import { FC, JSX, memo, useState } from 'react'

import { cn } from '@/lib/utils'
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
			<div className='flex items-center gap-1 rounded-md md:gap-2 md:border md:p-1'>
				<span className='text-muted-foreground hidden w-full truncate pl-2 text-sm font-semibold md:block'>
					{value}
				</span>

				<ButtonIcon
					size={isMobile ? 'default' : 'sm'}
					variant='secondary'
					onClick={copyToClipboard}
					icon={isCopied ? 'check' : 'clipboard'}
					className={cn(
						'cursor-pointer',
						isCopied && 'bg-primary hover:bg-primary'
					)}
				/>
			</div>
		)
	}
)
Clipboard.displayName = 'Clipboard'

export { Clipboard }
