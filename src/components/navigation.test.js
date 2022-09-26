import NavBar from "./navigation";
import { render, screen } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom'

const LocationDisplay = () => {
    const location = useLocation()

    return <div data-testid="location-display">{location.pathname}</div>
}

describe('testing navigation', () => {
    test('must have a link element with home text', () => {
        render(<NavBar />, { wrapper: BrowserRouter })
        // After so meny testing, i just had to add this  { wrapper: BrowserRouter } to work
        // const user = userEvent.setup()
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();

        const navElement = screen.getByRole('navigation')
        expect(navElement).toBeInTheDocument()


        // // verify page content for expected route after navigating
        // fireEvent.click(screen.getByText('/Counter'))
        // // expect(screen.getByText('Counter Component').textContent).toBeInTheDocument()
        // screen.debug()

    })
})