import { useHistory } from "react-router-dom";
import { database } from "../../services/firebase";
import { Button } from "../Button";
import { Logo } from "../Logo";
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
        <div className="header-content-logo">
          <Logo />

          <div className="toggle-theme-mobile">
            <ToggleTheme />
          </div>
        </div>

        <div>
          <RoomCode code={roomId} />
          {showBtnEndRoom && (
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          )}

          <div className="toggle-theme-desktop">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
}
