import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
    it('should render Button component', () => {
        render(<Button />);

        expect(screen.getByTestId('button')).toBeInTheDocument();
    })

    it('should render Button component outlined', () => {
        render(<Button isOutlined />);

        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toHaveClass('outlined');
    })
})