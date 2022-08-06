import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../../components/Button";

import { ContentContainer, IllustrationContainer, NewRoomContainer } from "./style";

const NewRoom: NextPage = (): JSX.Element => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      toast.error("Você precisa estar logado para criar uma sala", {
        position: "top-center",
        duration: 5000,
      });

      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Nova sala - Letmeask</title>
      </Head>

      <NewRoomContainer>
        <IllustrationContainer>
          <Image
            src="/images/Illustration.svg"
            alt="Illustration"
            width={318}
            height={403}
          />

          <strong>Toda pergunta tem uma resposta.</strong>
          <span>Aprenda e compartilhe conhecimento com outras pessoas.</span>
        </IllustrationContainer>

        <ContentContainer>
          <div>
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              height={69}
              width={154}
            />

            <strong>Crie uma nova sala</strong>

            <form>
              <input
                type="text"
                placeholder="Nome da sala"
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
        </ContentContainer>
      </NewRoomContainer>
    </>
  )
}

export default NewRoom;
