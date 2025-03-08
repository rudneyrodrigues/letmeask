import {
	X,
	Plus,
	Check,
	Circle,
	SignIn,
	SignOut,
	ThumbsUp,
	Calendar,
	CaretDown,
	CaretRight,
	GoogleLogo,
	ChatCircle,
	CheckCircle,
	TrashSimple,
	CircleNotch,
	WarningCircle
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
	calendar: Calendar,
	loading: CircleNotch,
	arrowDown: CaretDown,
	warning: WarningCircle,
	arrowRight: CaretRight,
	chatCircle: ChatCircle,
	checkCircle: CheckCircle,
	trashSimple: TrashSimple
}

export type IconName = keyof typeof Icon
