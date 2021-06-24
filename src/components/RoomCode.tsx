import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button type="button" className="room-code" onClick={handleCopyToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>

      <span>Sala #{props.code}</span>
    </button>
  );
}
