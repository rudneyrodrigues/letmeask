import { child, get, ref, remove } from 'firebase/database';
import { TrashSimple } from 'phosphor-react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { database } from '../../../services/firebase';
import { Button, DeleteQuestionModalContainer } from './styles';

interface DeleteQuestionModalProps {
  roomId: string;
  questionId: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export const DeleteQuestionModal = ({
  roomId,
  questionId,
  isOpen,
  onRequestClose,
}: DeleteQuestionModalProps) => {
  const handleDeleteQuestion = async () => {
    const dbRef = ref(database);
      
    remove(child(dbRef, `rooms/${roomId}/questions/${questionId}`));

    toast.success("Pergunta deletada com sucesso!", {
      position: "top-center",
      duration: 5000,
    })

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <DeleteQuestionModalContainer>
        <TrashSimple size={48} className="close-icon" />

        <strong>
          Excluir pergunta
        </strong>

        <span>
          Tem certeza que você deseja excluir esta pergunta?
        </span>

        <div>
          <Button onClick={onRequestClose}>
            Cancelar
          </Button>

          <Button onClick={handleDeleteQuestion} className="close-room">
            Sim, excluir
          </Button>
        </div>
      </DeleteQuestionModalContainer>
    </Modal>
  )
}
