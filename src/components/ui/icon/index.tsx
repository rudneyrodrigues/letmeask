import {
	ArrowUpFromLineIcon,
	ArrowUpRightIcon,
	BookOpenIcon,
	CheckIcon,
	ChevronRightIcon,
	DotIcon,
	DownloadIcon,
	FolderDotIcon,
	GithubIcon,
	HomeIcon,
	LaptopIcon,
	LinkedinIcon,
	LucideProps,
	MailIcon,
	MenuIcon,
	MoonIcon,
	NewspaperIcon,
	SettingsIcon,
	ShieldAlertIcon,
	SunIcon,
	InstagramIcon,
	TwitchIcon,
	TwitterIcon,
	XIcon,
	LogInIcon,
	createLucideIcon,
	type LucideIcon,
	MessageSquareIcon,
	TrashIcon,
	CalendarIcon
} from 'lucide-react'

export const Icon = {
	arrowUpFromLine: ArrowUpFromLineIcon,
	arrowUpRight: ArrowUpRightIcon,
	alert: ShieldAlertIcon,
	bookOpen: BookOpenIcon,
	check: CheckIcon,
	calendar: CalendarIcon,
	chevronRight: ChevronRightIcon,
	dotFilled: DotIcon,
	download: DownloadIcon,
	folderDot: FolderDotIcon,
	github: GithubIcon,
	hamburger: MenuIcon,
	house: HomeIcon,
	logIn: LogInIcon,
	instagram: InstagramIcon,
	laptop: LaptopIcon,
	linkedin: LinkedinIcon,
	mail: MailIcon,
	messageSquare: MessageSquareIcon,
	moon: MoonIcon,
	newspaper: NewspaperIcon,
	settings: SettingsIcon,
	sun: SunIcon,
	trash: TrashIcon,
	twitch: TwitchIcon,
	twitter: TwitterIcon,
	x: XIcon,
	spotify: createLucideIcon('Spotify', [
		[
			'path',
			{
				d: 'M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z',
				fill: '#1ED760',
				stroke: 'transparent',
				key: 'spotify-icon'
			}
		]
	]),
	google: ({ size = 24, ...props }: LucideProps) => (
		<svg
			fill='none'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clip-path='url(#clip0_2_99)'>
				<path
					d='M12 5C13.6168 5 15.1013 5.55353 16.2863 6.47406L19.9235 3.00409C17.8088 1.13995 15.0406 0 12 0C7.3924 0 3.39667 2.59991 1.3858 6.40985L5.43024 9.60278C6.40997 6.91937 8.97748 5 12 5Z'
					fill='#FEFEFE'
				/>
				<path
					d='M23.8961 13.5018C23.9586 13.0102 24 12.5087 24 12C24 11.1422 23.9063 10.3068 23.7352 9.5H12V14.5H18.4862C17.9615 15.8638 17.0272 17.0178 15.838 17.8195L19.8975 21.0243C22.0494 19.1354 23.522 16.4904 23.8961 13.5018Z'
					fill='#FEFEFE'
				/>
				<path
					d='M5 12C5 11.1566 5.15686 10.3516 5.43024 9.60278L1.3858 6.40985C0.504333 8.08002 0 9.98016 0 12C0 13.9973 0.495056 15.8763 1.35822 17.533L5.40778 14.3359C5.14844 13.6044 5 12.8204 5 12Z'
					fill='#FEFEFE'
				/>
				<path
					d='M12 19C8.95447 19 6.37042 17.0515 5.40778 14.3359L1.35822 17.533C3.35925 21.3735 7.36981 24 12 24C15.0278 24 17.7888 22.8752 19.8975 21.0243L15.838 17.8195C14.7412 18.5589 13.4284 19 12 19Z'
					fill='#FEFEFE'
				/>
				<path
					opacity='0.1'
					d='M12 23.75C8.46832 23.75 5.29272 22.2928 3.04755 19.9713C5.24536 22.4378 8.43646 24 12 24C15.5306 24 18.6953 22.4686 20.8881 20.0408C18.6496 22.3246 15.4981 23.75 12 23.75Z'
					fill='#FEFEFE'
				/>
				<path
					opacity='0.1'
					d='M12 14.25V14.5H18.4862L18.5875 14.25H12Z'
					fill='#FEFEFE'
				/>
				<path
					d='M23.9944 12.147C23.9952 12.0978 24 12.0494 24 12C24 11.986 23.9978 11.9725 23.9977 11.9586C23.9971 12.0215 23.9939 12.0838 23.9944 12.147Z'
					fill='#E6E6E6'
				/>
				<path
					opacity='0.2'
					d='M12 9.5V9.75H23.7856C23.7698 9.66748 23.7526 9.58191 23.7352 9.5H12Z'
					fill='#FEFEFE'
				/>
				<path
					d='M23.7352 9.5H12V14.5H18.4862C17.4775 17.1216 14.9772 19 12 19C8.13403 19 5 15.866 5 12C5 8.13397 8.13403 5 12 5C13.4019 5 14.6939 5.43066 15.7885 6.14069C15.9561 6.24957 16.1289 6.35181 16.2863 6.47406L19.9235 3.00409L19.8414 2.94098C17.7369 1.11707 15.0035 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24C18.1177 24 23.1555 19.4188 23.8961 13.5018C23.9586 13.0102 24 12.5087 24 12C24 11.1422 23.9063 10.3068 23.7352 9.5Z'
					fill='#FEFEFE'
				/>
				<path
					opacity='0.1'
					d='M15.7885 5.89069C14.6939 5.18066 13.4019 4.75 12 4.75C8.13403 4.75 5 7.88397 5 11.75C5 11.7922 5.00057 11.8251 5.0013 11.8672C5.06874 8.05951 8.17621 5 12 5C13.4019 5 14.6939 5.43066 15.7885 6.14069C15.9561 6.24957 16.1289 6.35181 16.2863 6.47406L19.9235 3.00409L16.2863 6.22406C16.1289 6.10181 15.9561 5.99957 15.7885 5.89069Z'
					fill='#FEFEFE'
				/>
				<path
					opacity='0.2'
					d='M12 0.25C14.975 0.25 17.6829 1.34839 19.7793 3.1416L19.9235 3.00409L19.8134 2.90827C17.709 1.08436 15.0035 0 12 0C5.37256 0 0 5.37256 0 12C0 12.0422 0.0058594 12.0829 0.0062866 12.125C0.0740356 5.55585 5.41473 0.25 12 0.25Z'
					fill='#FEFEFE'
				/>
			</g>
			<defs>
				<clipPath id='clip0_2_99'>
					<rect width='24' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	),
	flagUs: ({ ...props }: LucideProps) => (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M8 0H16V2L15 3L16 4V6L15 7L16 8V10L15 11L16 12V14L8 15L0 14V12L1 11L0 10V8L8 0Z'
				fill='#EEEEEE'
			/>
			<path
				d='M7 2H16V4H7V2ZM7 6H16V8H8L7 6ZM0 10H16V12H0V10ZM0 14H16V16H0V14Z'
				fill='#D80027'
			/>
			<path d='M0 0H8V8H0V0Z' fill='#0052B4' />
			<path
				d='M5.84375 7.59375L7.625 6.3125H5.4375L7.21875 7.59375L6.53125 5.5L5.84375 7.59375ZM3.3125 7.59375L5.09375 6.3125H2.90625L4.6875 7.59375L4 5.5L3.3125 7.59375ZM0.78125 7.59375L2.5625 6.3125H0.375L2.15625 7.59375L1.46875 5.5L0.78125 7.59375ZM5.84375 5.0625L7.625 3.78125H5.4375L7.21875 5.0625L6.53125 2.96875L5.84375 5.0625ZM3.3125 5.0625L5.09375 3.78125H2.90625L4.6875 5.0625L4 2.96875L3.3125 5.0625ZM0.78125 5.0625L2.5625 3.78125H0.375L2.15625 5.0625L1.46875 2.96875L0.78125 5.0625ZM5.84375 2.5L7.625 1.21875H5.4375L7.21875 2.5L6.53125 0.40625L5.84375 2.5ZM3.3125 2.5L5.09375 1.21875H2.90625L4.6875 2.5L4 0.40625L3.3125 2.5ZM0.78125 2.5L2.5625 1.21875H0.375L2.15625 2.5L1.46875 0.40625L0.78125 2.5Z'
				fill='#EEEEEE'
			/>
		</svg>
	),
	flagBr: ({ ...props }: LucideProps) => (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M0 0H16V16H0V0Z' fill='#6DA544' />
			<path
				d='M8 3.13123L14.6094 7.99998L8 12.8687L1.39062 7.99998L8 3.13123Z'
				fill='#FFDA44'
			/>
			<path
				d='M5.44373 6.90619C5.28824 7.2638 5.21151 7.65068 5.21873 8.04056L10.2812 9.59681C10.5043 9.27823 10.6576 8.91618 10.7312 8.53431C9.46248 6.49369 6.9906 6.02494 5.44685 6.90931L5.44373 6.90619Z'
				fill='#EEEEEE'
			/>
			<path
				d='M7.99062 5.21876C7.53358 5.21991 7.08386 5.33369 6.68125 5.55001C6.12712 5.84898 5.69084 6.32713 5.44375 6.90626C6.39058 6.70521 7.37309 6.74954 8.29796 7.03505C9.22284 7.32055 10.0594 7.83774 10.7281 8.53751C10.8524 7.90487 10.7529 7.24871 10.4469 6.68126C10.2082 6.238 9.85361 5.86785 9.42103 5.61028C8.98845 5.35272 8.49407 5.2174 7.99062 5.21876ZM6.625 7.82814C6.14813 7.82654 5.67385 7.89821 5.21875 8.04063C5.22401 8.48683 5.33655 8.92521 5.54688 9.31876C5.71995 9.64061 5.95474 9.92519 6.23785 10.1562C6.52096 10.3873 6.84683 10.5603 7.19683 10.6654C7.54683 10.7704 7.9141 10.8055 8.27766 10.7685C8.64121 10.7316 8.99392 10.6233 9.31563 10.45C9.69757 10.2443 10.0261 9.95219 10.275 9.59689C9.83637 9.04925 9.28114 8.60631 8.64973 8.30034C8.01832 7.99436 7.32662 7.83305 6.625 7.82814Z'
				fill='#0052B4'
			/>
		</svg>
	),
	flagEs: ({ ...props }: LucideProps) => (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M0 4L8 3L16 4V12L8 13L0 12V4Z' fill='#FFDA44' />
			<path d='M0 0H16V4H0V0ZM0 12H16V16H0V12Z' fill='#D80027' />
			<path d='M4.5 9.5H4V7H4.5V9.5ZM8.5 9.5H9V7H8.5V9.5Z' fill='#EEEEEE' />
			<path
				d='M6.5 10.25C7.32843 10.25 8 9.80228 8 9.25C8 8.69772 7.32843 8.25 6.5 8.25C5.67157 8.25 5 8.69772 5 9.25C5 9.80228 5.67157 10.25 6.5 10.25Z'
				fill='#EEEEEE'
			/>
			<path
				d='M4.5 6.25C4.5 6.11193 4.38807 6 4.25 6C4.11193 6 4 6.11193 4 6.25V6.5C4 6.63807 4.11193 6.75 4.25 6.75C4.38807 6.75 4.5 6.63807 4.5 6.5V6.25Z'
				fill='#D80027'
			/>
			<path
				d='M9 6.25C9 6.11193 8.88807 6 8.75 6C8.61193 6 8.5 6.11193 8.5 6.25V6.5C8.5 6.63807 8.61193 6.75 8.75 6.75C8.88807 6.75 9 6.63807 9 6.5V6.25Z'
				fill='#D80027'
			/>
			<path
				d='M6.5 8.5V9.25C6.5 9.44891 6.57902 9.63968 6.71967 9.78033C6.86032 9.92098 7.05109 10 7.25 10C7.44891 10 7.63968 9.92098 7.78033 9.78033C7.92098 9.63968 8 9.44891 8 9.25V8.5H7.25H6.5Z'
				fill='#D80027'
			/>
			<path
				d='M4.5 6.5H4C3.86193 6.5 3.75 6.61193 3.75 6.75C3.75 6.88807 3.86193 7 4 7H4.5C4.63807 7 4.75 6.88807 4.75 6.75C4.75 6.61193 4.63807 6.5 4.5 6.5Z'
				fill='#FF9811'
			/>
			<path
				d='M9 6.5H8.5C8.36193 6.5 8.25 6.61193 8.25 6.75C8.25 6.88807 8.36193 7 8.5 7H9C9.13807 7 9.25 6.88807 9.25 6.75C9.25 6.61193 9.13807 6.5 9 6.5Z'
				fill='#FF9811'
			/>
			<path
				d='M4.5 9.5H4C3.86193 9.5 3.75 9.61193 3.75 9.75C3.75 9.88807 3.86193 10 4 10H4.5C4.63807 10 4.75 9.88807 4.75 9.75C4.75 9.61193 4.63807 9.5 4.5 9.5Z'
				fill='#FF9811'
			/>
			<path
				d='M9 9.5H8.5C8.36193 9.5 8.25 9.61193 8.25 9.75C8.25 9.88807 8.36193 10 8.5 10H9C9.13807 10 9.25 9.88807 9.25 9.75C9.25 9.61193 9.13807 9.5 9 9.5Z'
				fill='#FF9811'
			/>
			<path
				d='M5 8.5V9.25C5 9.5 5.125 9.6875 5.28125 9.84375L5.4375 9.65625L5.59375 9.96875C5.6964 9.99391 5.8036 9.99391 5.90625 9.96875L6.0625 9.65625L6.21875 9.84375C6.40625 9.6875 6.5 9.5 6.5 9.25V8.5H6.21875L6.0625 8.75L5.90625 8.5H5.59375L5.4375 8.75L5.28125 8.5H5Z'
				fill='#FF9811'
			/>
			<path
				d='M3.8125 7.875H9.1875ZM3.8125 8.625H4.6875ZM8.3125 8.625H9.1875Z'
				fill='black'
			/>
			<path
				d='M3.8125 7.75C3.77935 7.75 3.74755 7.76317 3.72411 7.78661C3.70067 7.81005 3.6875 7.84185 3.6875 7.875C3.6875 7.90815 3.70067 7.93995 3.72411 7.96339C3.74755 7.98683 3.77935 8 3.8125 8H9.1875C9.22065 8 9.25245 7.98683 9.27589 7.96339C9.29933 7.93995 9.3125 7.90815 9.3125 7.875C9.3125 7.84185 9.29933 7.81005 9.27589 7.78661C9.25245 7.76317 9.22065 7.75 9.1875 7.75H3.8125ZM3.8125 8.5C3.77935 8.5 3.74755 8.51317 3.72411 8.53661C3.70067 8.56005 3.6875 8.59185 3.6875 8.625C3.6875 8.65815 3.70067 8.68995 3.72411 8.71339C3.74755 8.73683 3.77935 8.75 3.8125 8.75H4.6875C4.72065 8.75 4.75245 8.73683 4.77589 8.71339C4.79933 8.68995 4.8125 8.65815 4.8125 8.625C4.8125 8.59185 4.79933 8.56005 4.77589 8.53661C4.75245 8.51317 4.72065 8.5 4.6875 8.5H3.8125ZM8.3125 8.5C8.27935 8.5 8.24755 8.51317 8.22411 8.53661C8.20067 8.56005 8.1875 8.59185 8.1875 8.625C8.1875 8.65815 8.20067 8.68995 8.22411 8.71339C8.24755 8.73683 8.27935 8.75 8.3125 8.75H9.1875C9.22065 8.75 9.25245 8.73683 9.27589 8.71339C9.29933 8.68995 9.3125 8.65815 9.3125 8.625C9.3125 8.59185 9.29933 8.56005 9.27589 8.53661C9.25245 8.51317 9.22065 8.5 9.1875 8.5H8.3125Z'
				fill='#D80027'
			/>
			<path
				d='M6.125 5.25C5.90625 5.25 5.71875 5.40625 5.65625 5.59375L5.5 5.5625C5.21875 5.5625 5 5.78125 5 6.0625C5 6.34375 5.21875 6.5625 5.5 6.5625C5.71875 6.5625 5.90625 6.4375 5.96875 6.21875C6.05989 6.25163 6.15862 6.25732 6.25293 6.23512C6.34725 6.21293 6.43308 6.16382 6.5 6.09375C6.56692 6.16382 6.65275 6.21293 6.74707 6.23512C6.84138 6.25732 6.94011 6.25163 7.03125 6.21875C7.06157 6.3134 7.11942 6.39687 7.19739 6.45849C7.27537 6.52012 7.36995 6.55711 7.46905 6.56473C7.56814 6.57236 7.66726 6.55028 7.75375 6.50131C7.84024 6.45234 7.91018 6.37871 7.95463 6.28981C7.99907 6.20092 8.01602 6.10079 8.0033 6.00222C7.99058 5.90364 7.94877 5.8111 7.88321 5.7364C7.81765 5.6617 7.73132 5.60823 7.63523 5.58282C7.53914 5.55741 7.43766 5.56122 7.34375 5.59375C7.31361 5.51273 7.26298 5.44091 7.19681 5.3853C7.13063 5.32968 7.05117 5.29218 6.96617 5.27644C6.88117 5.2607 6.79355 5.26726 6.71184 5.29549C6.63014 5.32372 6.55715 5.37265 6.5 5.4375C6.40625 5.3125 6.28125 5.25 6.125 5.25ZM6.125 5.5C6.28125 5.5 6.375 5.625 6.375 5.75C6.375 5.90625 6.28125 6 6.125 6C6 6 5.875 5.90625 5.875 5.75C5.875 5.625 6 5.5 6.125 5.5ZM6.875 5.5C7.03125 5.5 7.125 5.625 7.125 5.75C7.125 5.90625 7.03125 6 6.875 6C6.75 6 6.625 5.90625 6.625 5.75C6.625 5.625 6.75 5.5 6.875 5.5ZM5.5 5.8125L5.625 5.84375L5.75 6.09375C5.75 6.21875 5.625 6.3125 5.5 6.3125C5.375 6.3125 5.25 6.21875 5.25 6.0625C5.25 5.9375 5.375 5.8125 5.5 5.8125ZM7.5 5.8125C7.65625 5.8125 7.75 5.9375 7.75 6.0625C7.75 6.21875 7.65625 6.3125 7.5 6.3125C7.375 6.3125 7.25 6.21875 7.25 6.09375L7.375 5.84375L7.5 5.8125Z'
				fill='#EEEEEE'
			/>
			<path d='M6.25 5H6.75V6H6.25V5Z' fill='#FF9811' />
			<path d='M6.5 7H8V8.5H6.5V7Z' fill='#EEEEEE' />
			<path
				d='M7.75 6.5L7.5 6.75H5.5L5.25 6.5C5.25 6.09375 5.8125 5.75 6.5 5.75C7.1875 5.75 7.75 6.09375 7.75 6.5ZM5 7H6.5V8.5H5V7Z'
				fill='#D80027'
			/>
			<path
				d='M7.5625 7.5625C7.5625 7.38991 7.42259 7.25 7.25 7.25C7.07741 7.25 6.9375 7.38991 6.9375 7.5625V7.9375C6.9375 8.11009 7.07741 8.25 7.25 8.25C7.42259 8.25 7.5625 8.11009 7.5625 7.9375V7.5625Z'
				fill='#D80027'
			/>
			<path
				d='M5.25 7.25V7.5H5.5V8H5.25V8.25H6.25V8H6V7.5H6.25V7.25H5.25ZM5.5 6.75H7.5V7H5.5V6.75Z'
				fill='#FF9811'
			/>
			<path
				d='M5.8125 6.5C5.91605 6.5 6 6.41605 6 6.3125C6 6.20895 5.91605 6.125 5.8125 6.125C5.70895 6.125 5.625 6.20895 5.625 6.3125C5.625 6.41605 5.70895 6.5 5.8125 6.5Z'
				fill='#FFDA44'
			/>
			<path
				d='M6.5 6.5C6.60355 6.5 6.6875 6.41605 6.6875 6.3125C6.6875 6.20895 6.60355 6.125 6.5 6.125C6.39645 6.125 6.3125 6.20895 6.3125 6.3125C6.3125 6.41605 6.39645 6.5 6.5 6.5Z'
				fill='#FFDA44'
			/>
			<path
				d='M7.1875 6.5C7.29105 6.5 7.375 6.41605 7.375 6.3125C7.375 6.20895 7.29105 6.125 7.1875 6.125C7.08395 6.125 7 6.20895 7 6.3125C7 6.41605 7.08395 6.5 7.1875 6.5Z'
				fill='#FFDA44'
			/>
			<path
				d='M5.28125 8.5V9.84375C5.3746 9.90855 5.48146 9.9513 5.59375 9.96875V8.5H5.28125ZM5.90625 8.5V9.96875C6.01854 9.9513 6.1254 9.90855 6.21875 9.84375V8.5H5.90625Z'
				fill='#D80027'
			/>
		</svg>
	)
}

export type IconType = LucideIcon
export type IconName = keyof typeof Icon

interface DynamicIconProps extends LucideProps {
	name: IconName
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
	const IconComponent = Icon[name]
	return <IconComponent {...props} />
}
