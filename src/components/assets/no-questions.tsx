import { SVGProps } from 'react'

type NoQuestionsProps = SVGProps<SVGSVGElement> & {}

const NoQuestions = ({ ...props }: NoQuestionsProps) => {
	return (
		<svg
			width='154'
			fill='none'
			height='150'
			viewBox='0 0 154 150'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<circle cx='75' cy='75' r='75' opacity='0.1' fill='#835AFD'></circle>
			<path
				fill='url(#paint0_linear_34_1365)'
				d='M9 29.723v35.422a4.723 4.723 0 0 0 4.723 4.723h30.7l12.613 11.644c.847.781 2.197.012 1.956-1.115l-2.762-12.89h8.265a4.723 4.723 0 0 0 4.722-4.723v-33.06A4.723 4.723 0 0 0 64.496 25H13.723A4.723 4.723 0 0 0 9 29.723'
			></path>
			<path
				fill='url(#paint1_linear_34_1365)'
				d='M153.218 54.723v35.422a4.723 4.723 0 0 1-4.723 4.723h-30.7l-12.614 11.644c-.846.782-2.197.012-1.955-1.115l2.762-12.89h-8.265A4.723 4.723 0 0 1 93 87.784v-33.06A4.723 4.723 0 0 1 97.723 50h50.772a4.723 4.723 0 0 1 4.723 4.723'
			></path>
			<circle
				r='3.5'
				cy='71.5'
				cx='109.5'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<circle
				r='3.5'
				cy='71.5'
				cx='122.5'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<circle
				r='3.5'
				cy='71.5'
				cx='135.5'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<path
				fill='#D67EE2'
				d='M45 100.41v18.076a2.42 2.42 0 0 0 2.431 2.41h15.804l6.494 5.942c.436.399 1.131.006 1.007-.569l-1.422-6.578h4.255a2.42 2.42 0 0 0 2.431-2.41V100.41A2.42 2.42 0 0 0 73.569 98H47.43A2.42 2.42 0 0 0 45 100.41'
			></path>
			<circle
				r='3.5'
				cx='25.5'
				cy='46.5'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<circle
				r='3.5'
				cx='38.5'
				cy='46.5'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<circle
				r='3.5'
				cx='51.5'
				cy='46.5'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<circle
				r='2.015'
				cx='53.015'
				cy='109.334'
				// fill='#F8F8F8'
				className='fill-foreground'
				opacity='0.7'
			></circle>
			<circle
				cx='60.5'
				r='2.015'
				cy='109.334'
				opacity='0.7'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<circle
				r='2.015'
				cx='67.985'
				cy='109.334'
				opacity='0.7'
				// fill='#F8F8F8'
				className='fill-foreground'
			></circle>
			<defs>
				<linearGradient
					id='paint0_linear_34_1365'
					x1='39.109'
					x2='39.109'
					y1='25'
					y2='81.83'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#9A78FF'></stop>
					<stop offset='1' stopColor='#835AFD'></stop>
				</linearGradient>
				<linearGradient
					id='paint1_linear_34_1365'
					x1='123.109'
					x2='123.109'
					y1='50'
					y2='106.83'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#EF7EFF'></stop>
					<stop offset='1' stopColor='#E554FA'></stop>
				</linearGradient>
			</defs>
		</svg>
	)
}

export { NoQuestions }
