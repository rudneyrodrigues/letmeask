import Head from "next/head";
import Image from "next/image";
import { child, get, ref } from "firebase/database";
import { GetServerSideProps, NextPage } from "next";
import { getSession, signIn, useSession } from "next-auth/react";

import { Button } from "../../components/Button";
import { database } from "../../services/firebase";
import { CodeRoom } from "../../components/Button/CodeRoom";

import { HeaderContainer, UserRoomContainer, UserRoomMain } from "./styles";

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
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>{`${room?.title} - Letmeask`}</title>
      </Head>

      <UserRoomContainer>
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
            </div>
          </div>
        </HeaderContainer>

        <UserRoomMain>
          <h1>Sala {room.title}</h1>

          <div className="input-new-question">
            <textarea
              name="new-question"
              id="new-question"
              placeholder="O que você quer perguntar?"
            />

            <div className="input-new-question-footer">
              {!session && (
                <p>
                  Para enviar uma pergunta, <span onClick={() => signIn('google')}>faça seu login</span>.
                </p>
              )}

              <Button disabled={!session ? true : false} aria-label="Enviar pergunta">
                Enviar pergunta
              </Button>
            </div>
          </div>

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
        </UserRoomMain>
      </UserRoomContainer>
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
