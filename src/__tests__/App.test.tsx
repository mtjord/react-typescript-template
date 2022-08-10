import App from '../App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('renders heading', () => {
        render(<App />);

        expect(screen.getByText('React TypeScript Template')).toBeInTheDocument();
    });
});
