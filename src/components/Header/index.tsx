import { useHistory } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { database } from "../../services/firebase";
import { Button } from "../Button";
import { RoomCode } from "../RoomCode";
import { ToggleTheme } from "../ToggleTheme";
import "./styles.scss";

type HeaderProps = {
  roomId: string;
  showBtnEndRoom?: boolean;
};

export function Header({ roomId, showBtnEndRoom = false }: HeaderProps) {
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <header>
      <div className="content">
        <img src={logoImg} alt="Logo Letmeask" />

        <div>
          <RoomCode code={roomId} />
          {showBtnEndRoom && (
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          )}
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
