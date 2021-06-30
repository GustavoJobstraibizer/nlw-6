import { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import answerImg from "../../assets/images/answer.svg";
import checkImg from "../../assets/images/check.svg";
import deleteImg from "../../assets/images/delete.svg";
import { Header } from "../../components/Header";
import { Question } from "../../components/Question";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import "../../styles/modal.scss";
import "../../styles/room.scss";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const { user } = useAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  Modal.setAppElement("#root");

  async function handleConfirmDelete(questionId: string) {
    setQuestionId(questionId);
    setIsOpen(true);
  }

  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    setIsOpen(false);
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  // useEffect(() => {
  //   if (!user) {
  //     history.push("/");
  //   }
  // }, [user, history]);

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
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}
            >
              {!question.isAnswered && (
                <>
                  <button>
                    <img
                      src={checkImg}
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      alt="Marcar pergunta como respondida"
                    />
                  </button>
                  <button>
                    <img
                      src={answerImg}
                      onClick={() => handleHighlightQuestion(question.id)}
                      alt="Dar destaque à pergunta"
                    />
                  </button>
                </>
              )}
              <button>
                <img
                  src={deleteImg}
                  onClick={() => handleConfirmDelete(question.id)}
                  alt="Remover questão"
                />
              </button>
            </Question>
          ))}
        </div>
      </main>

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Remove question modal"
        className="modal"
        overlayClassName="modalOverlay"
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="modal-content">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.99988H5H21"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2>Excluir pergunta</h2>
          <span>Tem certeza que você deseja excluir esta pergunta?</span>

          <div className="modal-actions">
            <button
              className="btn-cancel"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>
            <button
              className="btn-delete"
              type="button"
              onClick={handleDeleteQuestion}
            >
              Sim, excluir
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
