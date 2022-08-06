import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import { GoogleLogo, SignIn } from 'phosphor-react';

import { Button } from '../components/Button';

import { ContentContainer, GoogleButton, HomeContainer, IllustrationContainer } from './home.style';
import toast from 'react-hot-toast';

const Home: NextPage = (): JSX.Element => {
  const [roomCode, setRoomCode] = useState('')

  const handleJoinRoom = (e: FormEvent): void => {
    e.preventDefault();
    toast.success(`Entrando na sala "${roomCode}"`, {
      position: 'top-center',
      duration: 5000,
    });
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

            <GoogleButton>
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
