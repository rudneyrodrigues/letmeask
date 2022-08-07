import Head from "next/head";
import Image from "next/image";
import { getSession } from "next-auth/react";
import { child, get, push, ref, update } from "firebase/database";
import { GetServerSideProps, NextPage } from "next";

import { database } from "../../../services/firebase";
import { CodeRoom } from "../../../components/Button/CodeRoom";

import { AdminRoomContainer, AdminRoomMain, ButtonCloseRoom, HeaderContainer } from "./styles";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface RoomProps {
  title: string;
  authorId: string;
  endedAt: {
    date: string;
  };
}

interface AdminRoomProps {
  slug: string;
  room: RoomProps;
}

const AdminRoom: NextPage = ({ slug, room }: AdminRoomProps): JSX.Element => {
  const router = useRouter();

  const handleEndRoom = async () => {
    if (window.confirm("Tem certeza que deseja encerrar a sala?")) {
      const roomRef = (await get(child(ref(database), "rooms/" + slug))).key;

      const updatedRoom = {};

      updatedRoom[`rooms/${roomRef}/endedAt`] = {
        date: new Date(),
      }

      await update(ref(database), updatedRoom);

      toast.success("Sala encerrada com sucesso!", {
        position: "top-center",
        duration: 5000,
      });

      router.push("/");
    }
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

              <ButtonCloseRoom onClick={handleEndRoom}>
                Encerrar sala
              </ButtonCloseRoom>
            </div>
          </div>
        </HeaderContainer>

        <AdminRoomMain>
          <h1>Sala {room.title}</h1>

          <div>
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
        </AdminRoomMain>
      </AdminRoomContainer>
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

  if (room.authorId !== session.user.email) {
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
