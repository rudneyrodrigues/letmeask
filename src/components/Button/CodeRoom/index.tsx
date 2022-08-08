import toast from "react-hot-toast";
import { Copy } from "phosphor-react";

import { ButtonCodeRoom } from "./styles";

interface CodeRoomProps {
  code: string;
}

export const CodeRoom = ({ code }: CodeRoomProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);

    toast.success("Código copiado para a área de transferência!", {
      position: "top-center",
      duration: 3000,
    })
  }

  return (
    <ButtonCodeRoom onClick={copyToClipboard}>
      <div>
        <Copy size={20} weight="bold" />
      </div>
      <span>{code}</span>
    </ButtonCodeRoom>
  )
}
