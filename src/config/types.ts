export type RoomProps = {
	uid: string
	title: string
	open: boolean
	createdAt: Date
	createdBy: string
}

export type QuestionProps = {
	id: string
	createdAt: number
	question: string
	isAnswered: boolean
	isHighlighted: boolean
	likeCount: number
	likeId: string | undefined
	author: {
		uid: string
		name: string
		avatar?: string
	}
}
