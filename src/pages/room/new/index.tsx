import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { child, push, ref, set } from "firebase/database";

import { Button } from "../../../components/Button";
import { database } from "../../../services/firebase";

import styles from "./styles";

const NewRoom: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data: session } = useSession();

  const [titleRoom, setTitleRoom] = useState('');

  const handleCreateNewRoom = async (e: FormEvent) => {
    e.preventDefault();

    if (titleRoom.trim() === '') {
      toast.error("Digite o título da sala", {
        position: "top-center",
        duration: 5000,
      });

      return;
    }

    // insert new room in firebase
    const newRoomKey = push(child(ref(database), "rooms")).key;

    set(ref(database, "rooms/" + newRoomKey), {
      title: titleRoom.trim(),
      authorId: session.user.email
    }).then(() => {
      toast.success("Sala criada com sucesso", {
        position: "top-center",
        duration: 5000,
      });

      router.push(`/room/admin/${newRoomKey}`);
    })
  }

  return (
    <>
      <Head>
        <title>Nova sala - Letmeask</title>
      </Head>

      <styles.NewRoomContainer>
        <styles.IllustrationContainer>
          <Image
            src="/images/Illustration.svg"
            alt="Illustration"
            width={318}
            height={403}
          />

          <strong>Toda pergunta tem uma resposta.</strong>
          <span>Aprenda e compartilhe conhecimento com outras pessoas.</span>
        </styles.IllustrationContainer>

        <styles.ContentContainer>
          <div>
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              height={69}
              width={154}
            />

            <strong>Crie uma nova sala</strong>

            <form onSubmit={handleCreateNewRoom}>
              <input
                type="text"
                placeholder="Nome da sala"
                value={titleRoom}
                onChange={(e) => setTitleRoom(e.target.value)}
              />

              <Button>
                Criar sala
              </Button>
            </form>

            <span>
              Quer entrar em uma sala já existente?
              <Link href="/">
                <a>Clique aqui</a>
              </Link>
            </span>
          </div>
        </styles.ContentContainer>
      </styles.NewRoomContainer>
    </>
  )
}

export default NewRoom;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    };
  }

  return {
    props: {},
  }
}
