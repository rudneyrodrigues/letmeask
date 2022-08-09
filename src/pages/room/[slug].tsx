import Head from "next/head";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Heart, ThumbsUp } from "phosphor-react";
import { GetServerSideProps, NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { child, get, onValue, push, ref, remove, update } from "firebase/database";

import { useRoom } from "../../hooks/useRoom";
import { Button } from "../../components/Button";
import { database } from "../../services/firebase";
import { CodeRoom } from "../../components/Button/CodeRoom";

import styles from "../../styles/pages/room.styles";

interface RoomProps {
  title: string;
  authorId: string;
  endedAt?: string;
}

interface UserRoomProps {
  slug: string;
  room: RoomProps;
}

const UserRoom: NextPage = ({ slug, room }: UserRoomProps): JSX.Element => {
  const router = useRouter();
  const { data: session } = useSession();
  const [newQuestion, setNewQuestion] = useState('');

  const { questions } = useRoom(slug);

  const handleSendQuestion = async (e: FormEvent) => {
    e.preventDefault();

    if (newQuestion.trim() == '') {
      toast.error('Por favor, preencha o campo de pergunta.', {
        position: 'top-center',
        duration: 5000,
      });

      return;
    }

    if (!session) {
      toast.error('Por favor, faça login para enviar uma pergunta.', {
        position: 'top-center',
        duration: 5000,
      });

      return;
    }

    const question = {
      content: newQuestion,
      author: {
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image,
      },
      isHighlighted: false, // Se a pergunta está com destaque
      isAnswered: false // Se a pergunta já foi respondida
    }

    const dbRef = ref(database);

    const newQuestionKey = push(child(ref(database), "rooms" + slug  + "questions")).key;
      
    get(child(dbRef, `rooms/${slug}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const updatedQuestions = {};

        updatedQuestions[`rooms/${slug}/questions/${newQuestionKey}`] = question;

        await update(ref(database), updatedQuestions);

        toast.success("Pergunta adicionada com sucesso!", {
          position: "top-center",
          duration: 5000,
        });

        return;
      }
    }).catch(error => {
      toast.error("Erro ao enviar pergunta", {
        position: "top-center",
        duration: 5000,
      });

      console.log(error);
    });

    setNewQuestion('');
  }

  const handleLikeQuestion = async (questionId: string, likeId: string | undefined) => {
    if (!session) {
      toast.error("Por favor, faça login para dar um like.", {
        position: "top-center",
        duration: 5000,
      });

      return;
    }

    const dbRef = ref(database);

    if (likeId) {
      // Remove o like  
      remove(child(dbRef, `rooms/${slug}/questions/${questionId}/likes/${likeId}`));

      toast.success("Pergunta desmarcada como Gostei!", {
        position: "top-center",
        duration: 5000,
      })
    } else {
      const newLikeKey = push(child(ref(database), `rooms/${slug}/questions/${questionId}/likes/`)).key;

      get(child(dbRef, `rooms/${slug}/questions/${questionId}/`)).then(async (snapshot) => {
        if (snapshot.exists()) {
          const newLike = {}

          newLike[`rooms/${slug}/questions/${questionId}/likes/${newLikeKey}`] = {
            authorName: session.user.name,
            authorId: session.user.email,
          };

          await update(ref(database), newLike);

          toast.success("Pergunta marcada como Gostei!", {
            position: "top-center",
            duration: 5000,
          })

          return;
        }
      }).catch(error => {
        toast.error("Erro ao marcar pergunta como gostei.", {
          position: "top-center",
          duration: 5000,
        });

        console.log(error);
      })
    }
  }

  useEffect(() => {
    const roomRef = ref(database, `rooms/${slug}`);

    onValue(roomRef, snapshot => {
      const room = snapshot.val();

      if (room.endedAt) {
        toast.success("Sala encerrada!", {
          position: "top-center",
          duration: 5000,
        });

        router.push("/");
      }
    })
  }, [slug, router]);

  return (
    <>
      <Head>
        <title>{`${room?.title} - Letmeask`}</title>
      </Head>

      <styles.UserRoomContainer>
        <styles.HeaderContainer>
          <div className="header-content">
            <Image
              src="/images/Logo.svg"
              alt="letmeask"
              width={100}
              height={45}
            />

            <div className="button-container">
              <CodeRoom code={slug} />

              {session && (
                <styles.ButtonLogout onClick={() => signOut()}>
                  Sair
                </styles.ButtonLogout>
              )}
            </div>
          </div>
        </styles.HeaderContainer>

        <styles.UserRoomMain>
          <div className="title">
            <h1>Sala {room.title}</h1>
            {questions.length <= 1 ? (
              <span>{questions.length} pergunta</span>
            ) : (
              <span>{questions.length} perguntas</span>
            )}
          </div>

          <form onSubmit={handleSendQuestion} className="input-new-question">
            <textarea
              name="new-question"
              id="new-question"
              placeholder="O que você quer perguntar?"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />

            <div className="input-new-question-footer">
              {!session && (
                <p>
                  Para enviar uma pergunta, <span onClick={() => signIn('google')}>faça seu login</span>.
                </p>
              )}

              <Button
                type="submit"
                disabled={!session ? true : false}
                aria-label="Enviar pergunta"
              >
                Enviar pergunta
              </Button>
            </div>
          </form>

          {questions.length > 0 ? (
            <div className="questions-container">
              {questions.map(question => {
                return (
                  <styles.Question
                    key={question.id}
                    className={`
                      ${(question.isHighlighted && !question.isAnswered) && "isHighlighted"}
                      ${question.isAnswered && "isAnswered"}
                    `}
                  >
                    <p>{question.content}</p>

                    <footer>
                      <div>
                        <img
                          src={question.author.avatar ?
                            question.author.avatar :
                            "https://bit.ly/broken-link"
                          }
                          alt={question.author.name}
                        />
                        <span>{question.author.name}</span>
                      </div>

                      <div>
                        { question.likeCount > 0 && <span>{question.likeCount}</span> }
                        <button
                          disabled={!session || question.isAnswered ? true : false}
                          onClick={() => handleLikeQuestion(question.id, question.likeId)}
                        >
                          <ThumbsUp size={24} weight={question.likeId ? "fill" : "regular"} />
                        </button>
                      </div>
                    </footer>
                  </styles.Question>
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
                Faça login e seja a primeira pessoa a fazer uma pergunta!
              </span>
            </div>
          )}
        </styles.UserRoomMain>
      </styles.UserRoomContainer>
    </>
  )
}

export default UserRoom;

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

  if (room.authorId === session?.user.email) {
    return {
      redirect: {
        destination: `/room/admin/${slug}`,
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
