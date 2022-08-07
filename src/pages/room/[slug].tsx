import { getSession } from "next-auth/react";
import { child, get, ref } from "firebase/database";
import { GetServerSideProps, NextPage } from "next";

import { database } from "../../services/firebase";

interface RoomProps {
  title: string;
  authorId: string;
}

interface UserRoomProps {
  slug: string;
}

const UserRoom: NextPage = ({ slug }: UserRoomProps): JSX.Element => {
  return <h1>Usuários - Sala: {slug}</h1>
}

export default UserRoom;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  const { slug } = params;

  const dbRef = ref(database);

  const room = (await get(child(dbRef, `rooms/${slug}`))).toJSON() as RoomProps;

  if (room.authorId === session.user.email) {
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
    },
  }
}
