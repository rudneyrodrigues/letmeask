import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { getSession, signOut } from "next-auth/react";
import { child, get, ref, update } from "firebase/database";
import { GetServerSideProps, NextPage } from "next";

import { useRoom } from "../../../hooks/useRoom";
import { database } from "../../../services/firebase";
import { CodeRoom } from "../../../components/Button/CodeRoom";
import { CloseRoomModal } from "../../../components/Modal/CloseRoomModal";

import { AdminRoomContainer, AdminRoomMain, ButtonCloseRoom, ButtonLogout, HeaderContainer, Question } from "./styles";
import { Chat, CheckCircle, ThumbsUp, Trash, TrashSimple } from "phosphor-react";
import toast from "react-hot-toast";
import { DeleteQuestionModal } from "../../../components/Modal/DeleteQuestionModal";

interface RoomProps {
  title: string;
  authorId: string;
  endedAt?: string;
}

interface AdminRoomProps {
  slug: string;
  room: RoomProps;
}

const AdminRoom: NextPage = ({ slug, room }: AdminRoomProps): JSX.Element => {
  const [deleteQuestionId, setDeleteQuestionId] = useState('');

  const [isOpenModalCloseRoom, setIsOpenModalCloseRoom] = useState(false);
  const [isOpenModalDeleteQuestion, setIsOpenModalDeleteQuestion] = useState(false);

  const { questions } = useRoom(slug);

  const closeModalCloseRoom = () => {
    setIsOpenModalCloseRoom(false);
  }

  const openModalCloseRoom = () => {
    setIsOpenModalCloseRoom(true);
  }

  const closeModalDeleteQuestion = () => {
    setIsOpenModalDeleteQuestion(false);
  }

  const openModalDeleteQuestion = () => {
    setIsOpenModalDeleteQuestion(true);
  }

  const handleCheckQuestionAsAnswered = (questionId: string) => {
    const dbRef = ref(database);

    get(child(dbRef, `rooms/${slug}/questions/${questionId}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const question = snapshot.val();

        const postData = {
          ...question,
          isAnswered: !question.isAnswered
        }

        const updatedQuestion = {};

        updatedQuestion[`rooms/${slug}/questions/${questionId}`] = postData;

        await update(ref(database), updatedQuestion);

        if (postData.isAnswered) {
          toast.success("Pergunta marcada como respondida!", {
            position: "top-center",
            duration: 5000,
          });
        } else {
          toast("Pergunta marcada como não respondida!", {
            position: "top-center",
            duration: 5000,
          });
        }
      }
    }).catch(error => {
      toast("Erro ao marcar a pergunta como respondida", {
        position: "top-center",
        duration: 5000,
      })

      console.log(error);
    })
  }

  const handleCheckQuestionAsHighlighted = (questionId: string) => {
    const dbRef = ref(database);

    get(child(dbRef, `rooms/${slug}/questions/${questionId}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const question = snapshot.val();

        const postData = {
          ...question,
          isHighlighted: !question.isHighlighted
        }

        const updatedQuestion = {};

        updatedQuestion[`rooms/${slug}/questions/${questionId}`] = postData;

        await update(ref(database), updatedQuestion);
      }
    }).catch(error => {
      toast("Erro ao focar a pergunta", {
        position: "top-center",
        duration: 5000,
      })

      console.log(error);
    })
  }

  return (
    <>
      <Head>
        <title>{`${room?.title} - letmeask`}</title>
      </Head>

      <AdminRoomContainer>
        <HeaderContainer>
          <div className="header-content">
            <Image
              src="/images/Logo.svg"
              alt="letmeask"
              width={100}
              height={45}
            />

            <div className="button-container">
              <CodeRoom code={slug} />

              <ButtonCloseRoom onClick={openModalCloseRoom}>
                Encerrar sala
              </ButtonCloseRoom>

              <ButtonLogout onClick={() => signOut()}>
                Sair
              </ButtonLogout>
            </div>
          </div>
        </HeaderContainer>

        <AdminRoomMain>
          <div className="title">
            <h1>Sala {room.title}</h1>
            {questions.length <= 1 ? (
              <span>{questions.length} pergunta</span>
            ) : (
              <span>{questions.length} perguntas</span>
            )}
          </div>

          {questions.length > 0 ? (
            <div className="questions-container">
              {questions.map(question => {
                return (
                  <Question
                    key={question.id}
                    className={`
                      ${(question.isHighlighted && !question.isAnswered) && "isHighlighted"}
                      ${question.isAnswered && "isAnswered"}
                    `}
                  >
                    <p>{question.content}</p>

                    <footer>
                      <div>
                        <img src={question.author.avatar} alt={question.author.name} />
                        <span>{question.author.name}</span>
                      </div>

                      <div>
                        <button onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                          <CheckCircle
                            size={24}
                            weight={question.isAnswered ? "fill" : "regular"}
                          />
                        </button>
                        <button
                          disabled={question.isAnswered}
                          onClick={() => handleCheckQuestionAsHighlighted(question.id)}
                          className={question.isAnswered ? "isDisabled" : ""}
                        >
                          <Chat
                            size={24}
                            weight={(question.isHighlighted && !question.isAnswered) ? "fill" : "regular"}
                          />
                        </button>
                        <button onClick={() => {
                          setDeleteQuestionId(question.id);
                          openModalDeleteQuestion();
                        }}>
                          <TrashSimple size={24} />
                        </button>
                      </div>
                    </footer>
                  </Question>
                )
              })}
            </div>
          ) : (
            <div className="no-question">
              <Image
                src="/images/Illustration-no-question.png"
                alt="Illustration-no-question"
                width={150}
                height={150}
              />

              <strong>
                Nenhuma pergunta por aqui...
              </strong>

              <span>
                Envie o código desta sala para seus amigos e comece a responder perguntas!
              </span>
            </div>
          )}
        </AdminRoomMain>
      </AdminRoomContainer>

      <CloseRoomModal
        roomId={slug}
        isOpen={isOpenModalCloseRoom}
        onRequestClose={closeModalCloseRoom}
      />

      <DeleteQuestionModal
        roomId={slug}
        questionId={deleteQuestionId}
        isOpen={isOpenModalDeleteQuestion}
        onRequestClose={closeModalDeleteQuestion}
      />
    </>
  )
}

export default AdminRoom;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  const { slug } = params;

  const dbRef = ref(database);

  const room = (await get(child(dbRef, `rooms/${slug}`))).toJSON() as RoomProps;

  if (room.endedAt) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  if (room.authorId !== session?.user.email) {
    return {
      redirect: {
        destination: `/room/${slug}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      slug,
      room,
    },
  }
}
