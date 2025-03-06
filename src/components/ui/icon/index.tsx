import {
	SignIn,
	ThumbsUp,
	GoogleLogo,
	ChatCircle,
	CheckCircle,
	TrashSimple
} from '@phosphor-icons/react'

export const Icon = {
	logIn: SignIn,
	like: ThumbsUp,
	google: GoogleLogo,
	chatCircle: ChatCircle,
	checkCircle: CheckCircle,
	trashSimple: TrashSimple
}

export type IconName = keyof typeof Icon
