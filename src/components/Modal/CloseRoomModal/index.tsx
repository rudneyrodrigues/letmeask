import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { XCircle } from 'phosphor-react';
import { child, get, ref, update } from 'firebase/database';

import { database } from '../../../services/firebase';

import { Button, CloseRoomModalContainer } from './styles';

interface CloseRoomModalProps {
  roomId: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#App');

export const CloseRoomModal = ({
  roomId,
  isOpen,
  onRequestClose,
}: CloseRoomModalProps): JSX.Element => {
  const router = useRouter();

  const handleEndRoom = async () => {
    const dbRef = ref(database);
      
    get(child(dbRef, `rooms/${roomId}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const room = snapshot.val();

        const postData = {
          ...room,
          endedAt: new Date()
        }

        const updatedRoom = {};

        updatedRoom[`rooms/${roomId}`] = postData;

        await update(ref(database), updatedRoom);

        toast.success("Sala encerrada com sucesso!", {
          position: "top-center",
          duration: 5000,
        });

        router.push("/");
      }
    }).catch(error => {
      toast.error("Erro ao encerrar a sala", {
        position: "top-center",
        duration: 5000,
      });

      console.log(error);
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <CloseRoomModalContainer>
        <XCircle size={48} className="close-icon" />

        <strong>
          Encerrar sala
        </strong>

        <span>
          Tem certeza que você deseja encerrar esta sala?
        </span>

        <div>
          <Button onClick={onRequestClose}>
            Cancelar
          </Button>

          <Button onClick={handleEndRoom} className="close-room">
            Sim, encerrar
          </Button>
        </div>
      </CloseRoomModalContainer>
    </Modal>
  )
}
