import { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import deleteImg from "../../assets/images/delete.svg";
import { Header } from "../../components/Header";
import { Question } from "../../components/Question";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import "../../styles/room.scss";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="page-room">
      <Header showBtnEndRoom roomId={roomId} />

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button>
                <img
                  src={deleteImg}
                  onClick={() => handleDeleteQuestion(question.id)}
                  alt="Remover questão"
                />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
}
