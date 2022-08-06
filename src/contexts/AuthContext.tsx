import toast from "react-hot-toast";
import { createContext, ReactNode } from "react";
import { useState, useEffect, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthContextData = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  logoutWithGoogle: () => Promise<void>;
  // Utiliza o Promise quando uma função possui async await
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);


  useEffect(() => {
    // Ira verificar no firebase se já há alguém conectado
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    });

    // Ira desligar a verificação no firebase, após ser concluída;
    return () => {
      unsubscribe();
    }
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        toast.error("Não foi possível recuperar as informações do usuário")
        return;
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  const logoutWithGoogle = async () => {
    await auth.signOut();

    toast.success("Você saiu do sistema")

    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logoutWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
