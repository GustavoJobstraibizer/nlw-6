import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import "../styles/auth.scss";

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={ilustrationImg}
          alt="Ilustraçao simobilizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo Letmeask" />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
