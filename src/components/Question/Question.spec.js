import { render, screen } from '@testing-library/react';
import { Question } from '.';

const questionProps = {
    content: '',
    author: {
        name: 'teste',
        avatar: ''
    }
};

describe('Question', () => {
    it('should render Question Component', () => {
        render(<Question {...questionProps} />);

        expect(screen.getByTestId('question')).toBeInTheDocument();
    })

    it('should render Question Component highlighted', () => {
        const question = { ...questionProps, isHighlighted: true };
        render(<Question {...question} />);

        expect(screen.getByTestId('question')).toBeInTheDocument();
        expect(screen.getByTestId('question')).toHaveClass('highlighted');
    })
})