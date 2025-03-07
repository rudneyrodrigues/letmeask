import {
	X,
	Plus,
	Check,
	Circle,
	SignIn,
	SignOut,
	ThumbsUp,
	CaretDown,
	CaretRight,
	GoogleLogo,
	ChatCircle,
	CheckCircle,
	TrashSimple,
	CircleNotch
} from '@phosphor-icons/react'

export const Icon = {
	close: X,
	add: Plus,
	check: Check,
	logIn: SignIn,
	like: ThumbsUp,
	circle: Circle,
	logOut: SignOut,
	google: GoogleLogo,
	loading: CircleNotch,
	arrowDown: CaretDown,
	arrowRight: CaretRight,
	chatCircle: ChatCircle,
	checkCircle: CheckCircle,
	trashSimple: TrashSimple
}

export type IconName = keyof typeof Icon
