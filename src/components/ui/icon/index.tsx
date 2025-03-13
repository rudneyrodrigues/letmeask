import {
	X,
	User,
	Plus,
	Check,
	House,
	Circle,
	SignIn,
	SignOut,
	ThumbsUp,
	Calendar,
	CaretDown,
	CaretLeft,
	Clipboard,
	CaretRight,
	GoogleLogo,
	ChatCircle,
	CheckCircle,
	TrashSimple,
	CircleNotch,
	WarningCircle,
	EnvelopeSimple
} from '@phosphor-icons/react'

export const Icon = {
	close: X,
	add: Plus,
	user: User,
	home: House,
	check: Check,
	logIn: SignIn,
	like: ThumbsUp,
	circle: Circle,
	logOut: SignOut,
	google: GoogleLogo,
	calendar: Calendar,
	mail: EnvelopeSimple,
	loading: CircleNotch,
	arrowDown: CaretDown,
	arrowLeft: CaretLeft,
	clipboard: Clipboard,
	warning: WarningCircle,
	arrowRight: CaretRight,
	chatCircle: ChatCircle,
	checkCircle: CheckCircle,
	trashSimple: TrashSimple
}

export type IconName = keyof typeof Icon
