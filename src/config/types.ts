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
	author: {
		uid: string
		name: string
		avatar?: string
	}
}
