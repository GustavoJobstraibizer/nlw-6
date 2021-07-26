import copyImg from "../../assets/images/copy.svg";
import "./styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function handleCopyToClipboard() {
    if (typeof (navigator.clipboard) == "undefined") {
      const textArea = document.createElement('textarea');
      textArea.value = props.code;
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (e) {
        console.log(e.error);
      }
    }
    //navigator.clipboard.writeText(props.code);
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
