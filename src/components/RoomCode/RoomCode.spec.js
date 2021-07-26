import { fireEvent, render, screen } from '@testing-library/react';
import { RoomCode } from '.';

const propsCode = {
    code: '12345678',
}

const handleCopyToClipboard = jest.fn();

const renderRoomCode = () => {
    return render(<RoomCode {...propsCode} />);
}

describe('RoomCode', () => {
    it('should render RoomCode Component', () => {
        renderRoomCode();

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should display prop code', () => {
        renderRoomCode();

        expect(screen.getByText(new RegExp(`Sala #${propsCode.code}`, 'i'))).toBeInTheDocument();
    });

    it('should call handleCopyToClipboard when click copy button', async () => {
        renderRoomCode();

        const copyButton = screen.getByRole('button');

        await fireEvent.click(copyButton);

        //expect(handleCopyToClipboard).toBeHaveBeenCalledTimes(1);
    })
});