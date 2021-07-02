import { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import answerImg from "../../assets/images/answer.svg";
import checkImg from "../../assets/images/check.svg";
import deleteImg from "../../assets/images/delete.svg";
import emptyLogo from "../../assets/images/empty-questions.svg";
import { Header } from "../../components/Header";
import { ModalRemoveQuestion } from "../../components/ModalRemoveQuestion";
import { Question } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import "../../styles/room.scss";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
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

        {questions.length > 0 ? (
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
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
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
        ) : (
          <div className="whitout-questions">
            <img src={emptyLogo} alt="Icone sala sem questões" />

            <h1>Nenhuma pergunta por aqui...</h1>
            <p>
              Envie o código desta sala para seus amigos e comece a responder
              perguntas!
            </p>
          </div>
        )}
      </main>

      <ModalRemoveQuestion
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleDeleteQuestion={handleDeleteQuestion}
      />
    </div>
  );
}
