import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { child, get, ref } from "firebase/database";
import { GetServerSideProps, NextPage } from "next";

import { database } from "../../../services/firebase";
import { CodeRoom } from "../../../components/Button/CodeRoom";
import { CloseRoomModal } from "../../../components/Modal/CloseRoomModal";

import { AdminRoomContainer, AdminRoomMain, ButtonCloseRoom, HeaderContainer } from "./styles";

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
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
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

              <ButtonCloseRoom onClick={openModal}>
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

      <CloseRoomModal
        roomId={slug}
        isOpen={isOpen}
        onRequestClose={closeModal}
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

  if (room.authorId !== session.user.email) {
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
