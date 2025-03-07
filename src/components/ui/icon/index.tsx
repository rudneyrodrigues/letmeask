import {
	X,
	SignIn,
	SignOut,
	ThumbsUp,
	GoogleLogo,
	ChatCircle,
	CheckCircle,
	TrashSimple
} from '@phosphor-icons/react'

export const Icon = {
	close: X,
	logIn: SignIn,
	like: ThumbsUp,
	logOut: SignOut,
	google: GoogleLogo,
	chatCircle: ChatCircle,
	checkCircle: CheckCircle,
	trashSimple: TrashSimple
}

export type IconName = keyof typeof Icon
