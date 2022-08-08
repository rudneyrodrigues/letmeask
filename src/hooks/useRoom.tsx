import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { child, get, onValue, ref } from "firebase/database";

import { database } from "../services/firebase";

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
    authorName: string;
  }>
}>

type QuestionType = {
  id: string;
  author: {
    name: string,
    avatar: string
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

export const useRoom = (roomId: string) => {
  const { data: session } = useSession();

  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const questionsRef = ref(database, `rooms/${roomId}/questions`);

    onValue(questionsRef, snapshot => {
      const questions: FirebaseQuestions = snapshot.val() ?? {};

      const questionsArray = Object.entries(questions).map(([key, question]) => {
        return {
          id: key,
          content: question.content,
          author: question.author,
          isHighlighted: question.isHighlighted,
          isAnswered: question.isAnswered,
          likeCount: Object.values(question.likes ?? {}).length,
          likeId: Object.entries(question.likes ?? {}).find(([key, like]) => like.authorId === session?.user?.email)?.[0]
        }
      });
      
      setQuestions(questionsArray);
    });
  }, [roomId, session]);

  return ({ questions });
}
