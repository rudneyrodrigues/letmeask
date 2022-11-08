import Head from 'next/head';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { GoogleAuthProvider } from "firebase/auth";
import { child, get, ref } from 'firebase/database';
import { useSession, signIn } from "next-auth/react";
import { GoogleLogo, SignIn, Spinner } from 'phosphor-react';

import { Button } from '../components/Button';
import { database } from '../services/firebase';

import {
  ContentContainer,
  GoogleButton,
  HomeContainer,
  IllustrationContainer
} from '../styles/pages/home.styles';

const Home: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data: session } = useSession();


  const [roomCode, setRoomCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNewRoom = async () => {
    if (!session) {
      await signIn('google');
    }

    router.push(`/room/new`);
  }

  const handleJoinRoom = (e: FormEvent): void => {
    e.preventDefault();
    setIsLoading(true);

    if (roomCode.trim() === '') {
      setIsLoading(false);

      toast.error('Digite o código da sala', {
        position: "top-center",
        duration: 5000,
      });

      return;
    }

    const dbRef = ref(database);

    get(child(dbRef, `rooms/${roomCode}`)).then(snapshot => {
      if (snapshot.exists()) {
        const room = snapshot.val();

        if (room.endedAt) {
          setIsLoading(false);

          toast.error('A sala já foi encerrada', {
            position: "top-center",
            duration: 5000,
          });

          return;
        }

        setIsLoading(false);

        router.push(`/room/${roomCode}`);
      } else {
        setIsLoading(false);

        toast.error('Sala não encontrada', {
          position: "top-center",
          duration: 5000,
        })
      }
    })
  }

  return (
    <>
      <Head>
        <title>Home - Letmeask</title>
      </Head>

      <HomeContainer>
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

            <GoogleButton onClick={handleCreateNewRoom}>
              <GoogleLogo size={24} weight="bold" />
              Crie sua sala com o Google
            </GoogleButton>

            <div className="separator">ou entre em uma sala</div>

            <form onSubmit={handleJoinRoom}>
              <input
                type="text"
                placeholder="Digite o código da sala"
                onChange={(e) => setRoomCode(e.target.value.trim())}
                value={roomCode}
              />

              <Button>
                {isLoading ? <Spinner className="spinner" size={24} weight="bold" /> : (
                  <>
                    <SignIn size={24} weight="bold" />
                    Entrar na sala
                  </>
                )}
              </Button>
            </form>
          </div>
        </ContentContainer>
      </HomeContainer>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
