import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { child, get, ref } from 'firebase/database';
import { GoogleLogo, SignIn } from 'phosphor-react';
import { useSession, signIn } from "next-auth/react";

import { Button } from '../components/Button';
import { database } from '../services/firebase';

import { ContentContainer, GoogleButton, HomeContainer, IllustrationContainer } from './home.style';

const Home: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data: session } = useSession();

  const [roomCode, setRoomCode] = useState('')

  const handleCreateNewRoom = async () => {
    if (!session) {
      await signIn('google');
    }

    router.push(`/room/new`);
  }

  const handleJoinRoom = (e: FormEvent): void => {
    e.preventDefault();

    if (roomCode.trim() === '') {
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

        toast.success(`Entrando na sala ${room.title}`, {
          position: "top-center",
          duration: 5000,
        })

        router.push(`/room/${roomCode}`);
      } else {
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
                <SignIn size={24} weight="bold" />
                Entrar na sala
              </Button>
            </form>
          </div>
        </ContentContainer>
      </HomeContainer>
    </>
  )
}

export default Home;
