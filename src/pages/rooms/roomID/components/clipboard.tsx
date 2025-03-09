import { FC, JSX, memo, useState } from 'react'

import { useIsMobile } from '@/hooks/use-mobile'
import { ButtonIcon } from '@/components/ui/button-icon'

type ClipboardProps = {
	value: string
}

const Clipboard: FC<ClipboardProps> = memo(
	({ value }: ClipboardProps): JSX.Element => {
		const isMobile = useIsMobile()
		const [isCopied, setIsCopied] = useState(false)

		const copyToClipboard = async () => {
			// Copiando o valor para a área de transferência
			navigator.clipboard.writeText(value)
			// Atualizando o estado para exibir o ícone de check
			setIsCopied(true)
			// Aguardando 2 segundos para remover o ícone de check
			await new Promise(resolve => setTimeout(resolve, 2000))
			// Atualizando o estado para exibir o ícone de clipboard
			setIsCopied(false)
		}

		return (
			<div className='flex items-center gap-2 rounded-md md:border md:p-1'>
				<span className='hidden w-full max-w-60 min-w-20 truncate pl-1 text-sm font-semibold md:block'>
					{value}
				</span>

				<ButtonIcon
					onClick={copyToClipboard}
					size={isMobile ? 'default' : 'sm'}
					icon={isCopied ? 'check' : 'clipboard'}
					variant={isMobile ? 'outline' : 'secondary'}
					className='hover:bg-primary cursor-pointer'
				/>
			</div>
		)
	}
)
Clipboard.displayName = 'Clipboard'

export { Clipboard }
