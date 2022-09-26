import HomeComponent from "./homecomponent";
import { render, screen } from '@testing-library/react';

test('Home text is here', () => {
    render(<HomeComponent />)
    expect(screen.getByTestId('home')).toBeInTheDocument()
    const testText = screen.getByText('This is a home component');
    expect(testText).toBeInTheDocument()
})