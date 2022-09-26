import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./conter";

describe('Counter testing', () => {
    it('counter id increased by one', () => {
        const { getByTestId } = render(<Counter initialCount={0} />)
        const countValue = +screen.getByTestId("count").textContent
        expect(countValue).toBe(0)
    })

    it('button increments count', () => {
        const { getByRole } = render(<Counter />)
        const incrementButton = screen.getByRole("button", { name: "Increment" })
        expect(incrementButton).toBeInTheDocument()
    })

    test('increment button increments when clicked', () => {
        const { getByRole } = render(<Counter />)
        const incrementButton = screen.getByRole("button", { name: "Increment" })
        fireEvent.click(incrementButton)
        const countValue = Number(screen.getByTestId("count").textContent)
        expect(countValue).toBe(1)
    })

    test('Decrement button decrements when clicked', () => {
        const { getByRole } = render(<Counter />)
        const decrementButton = screen.getByRole("button", { name: "Decrement" })
        fireEvent.click(decrementButton)
        const countValue = Number(screen.getByTestId("count").textContent)
        expect(countValue).toBe(-1)
    })

    test('Reset button Resets when clicked', () => {
        const { getByRole } = render(<Counter />)
        const ResetButton = screen.getByRole("button", { name: "Reset" })
        fireEvent.click(ResetButton)
        const countValue = Number(screen.getByTestId("count").textContent)
        expect(countValue).toBe(0)
    })

    test('Reset button multiple actions sequentially', () => {
        const { getByRole } = render(<Counter />)
        const incrementButton = screen.getByRole("button", { name: "Increment" })
        fireEvent.click(incrementButton)
        const countValue1 = Number(screen.getByTestId("count").textContent)
        expect(countValue1).toBe(1)
        //must get value multiple times
        fireEvent.click(incrementButton)
        const countValue2 = Number(screen.getByTestId("count").textContent)
        expect(countValue2).toBe(2)
        const decrementButton = screen.getByRole("button", { name: "Decrement" })
        fireEvent.click(decrementButton)
        const countValue3 = Number(screen.getByTestId("count").textContent)
        expect(countValue3).toBe(1)
        const ResetButton = screen.getByRole("button", { name: "Reset" })
        fireEvent.click(ResetButton)
        const countValue4 = Number(screen.getByTestId("count").textContent)
        expect(countValue4).toBe(0)
    })
})