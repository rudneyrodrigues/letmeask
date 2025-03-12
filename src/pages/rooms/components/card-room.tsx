import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { cn } from '@/lib/utils'
import { RoomProps } from '@/config/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardTitle, CardHeader, CardFooter } from '@/components/ui/card'

type CardRoomProps = {
	room: RoomProps
}

const CardRoom: FC<CardRoomProps> = memo(
	({ room }: CardRoomProps): JSX.Element => {
		return (
			<Link
				to={`/rooms/${room.uid}`}
				aria-disabled={!room.open}
				aria-label={`Entrar na sala ${room.title}`}
				className={cn(
					'group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2'
				)}
			>
				<Card className='group-hover:border-primary group-hover:bg-card/70 transition-colors'>
					<CardHeader>
						<div className='mb-4'>
							<Badge variant={room.open ? 'default' : 'destructive'}>
								{room.open ? 'Aberta' : 'Fechada'}
							</Badge>
						</div>
						<CardTitle>{room.title}</CardTitle>
					</CardHeader>

					<CardFooter>
						<div className='flex items-center gap-2'>
							<span className='text-sm text-zinc-300'>
								Criando em:{' '}
								<strong>
									{new Date(room.createdAt).toLocaleDateString('pt-BR', {
										day: 'numeric',
										month: 'long',
										year: 'numeric'
									})}
								</strong>
							</span>
						</div>
					</CardFooter>
				</Card>
			</Link>
		)
	}
)
CardRoom.displayName = 'CardRoom'

export { CardRoom }
