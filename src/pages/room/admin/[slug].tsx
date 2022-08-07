import { getSession } from "next-auth/react";
import { child, get, ref } from "firebase/database";
import { GetServerSideProps, NextPage } from "next";

import { database } from "../../../services/firebase";

interface RoomProps {
  title: string;
  authorId: string;
}

const AdminRoom: NextPage = (): JSX.Element => {
  return <h1>Página dos Admins</h1>
}

export default AdminRoom;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  const { slug } = params;

  const dbRef = ref(database);

  const room = (await get(child(dbRef, `rooms/${slug}`))).toJSON() as RoomProps;

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
    },
  }
}
