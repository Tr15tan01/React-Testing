import ToDo from "./todo";
import { render, screen, fireEvent } from "@testing-library/react";

describe('passing todo page tests', () => {
    test('should have input element', () => {
        render(<ToDo />)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()
    })
})