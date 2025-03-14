import { JSX, memo, SVGProps } from 'react'

type LogoProps = SVGProps<SVGSVGElement> & {}

const Logo = memo(({ ...props }: LogoProps): JSX.Element => {
	return (
		<svg
			width='157'
			height='75'
			fill='none'
			viewBox='0 0 157 75'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				// fill='#29292E'
				className='fill-foreground'
				d='M0 18.999h4.473v21.275H0zM22.587 32.618q0 .086-.086 1.204h-11.67q.316 1.434 1.492 2.265t2.924.832q1.204 0 2.122-.344a5.3 5.3 0 0 0 1.749-1.147l2.38 2.58q-2.18 2.495-6.366 2.495-2.609 0-4.616-1.004-2.007-1.032-3.096-2.838-1.09-1.806-1.09-4.1 0-2.265 1.061-4.072a7.53 7.53 0 0 1 2.953-2.838q1.893-1.032 4.215-1.032 2.265 0 4.1.974a7 7 0 0 1 2.867 2.81q1.062 1.807 1.061 4.215m-8-4.616q-1.518 0-2.551.86-1.032.86-1.262 2.351h7.598q-.229-1.463-1.261-2.322-1.033-.89-2.523-.89M34.367 39.528q-.66.488-1.634.745-.946.23-2.007.23-2.753 0-4.272-1.405-1.491-1.405-1.491-4.129v-6.336h-2.38v-3.44h2.38v-3.757h4.473v3.756h3.842v3.44h-3.842v6.28q0 .974.487 1.52.516.515 1.434.516 1.061 0 1.806-.574zM55.486 24.619q2.895 0 4.588 1.72 1.72 1.692 1.72 5.104v8.83h-4.473v-8.142q0-1.836-.774-2.724-.746-.918-2.15-.918-1.578 0-2.495 1.033-.917 1.003-.917 3.01v7.742h-4.473V32.13q0-3.642-2.925-3.642-1.548 0-2.465 1.033-.918 1.003-.918 3.01v7.742h-4.473V24.847h4.272v1.778a5.7 5.7 0 0 1 2.093-1.491q1.263-.516 2.753-.516 1.635 0 2.953.66a5.13 5.13 0 0 1 2.122 1.863 6.35 6.35 0 0 1 2.38-1.864q1.461-.66 3.182-.66M79.934 32.618q0 .086-.086 1.204h-11.67q.316 1.434 1.492 2.265t2.924.832q1.204 0 2.122-.344a5.3 5.3 0 0 0 1.75-1.147l2.379 2.58q-2.18 2.495-6.365 2.495-2.61 0-4.617-1.004-2.007-1.032-3.096-2.838-1.09-1.806-1.09-4.1 0-2.265 1.061-4.072a7.53 7.53 0 0 1 2.954-2.838q1.892-1.032 4.214-1.032 2.265 0 4.1.974a7 7 0 0 1 2.868 2.81q1.06 1.807 1.06 4.215m-8-4.616q-1.519 0-2.55.86-1.033.86-1.263 2.351h7.599q-.23-1.463-1.262-2.322-1.033-.89-2.523-.89'
			></path>
			<path
				fill='url(#paint0_linear_2_29)'
				d='m106.086 24.848-3.068 15.426h-4.243l.286-1.52q-1.92 1.749-4.73 1.749a6.8 6.8 0 0 1-3.326-.832q-1.52-.83-2.437-2.38-.89-1.576-.89-3.698 0-2.551 1.119-4.588 1.147-2.064 3.097-3.21 1.95-1.177 4.3-1.176 3.555 0 5.018 2.322l.401-2.093zm-10.38 11.956q1.32 0 2.352-.63a4.46 4.46 0 0 0 1.606-1.807q.573-1.147.573-2.638 0-1.577-.946-2.494-.918-.918-2.58-.918-1.32 0-2.352.66-1.032.63-1.605 1.777-.574 1.147-.574 2.638 0 1.578.918 2.495.945.917 2.609.917'
			></path>
			<path
				fill='url(#paint1_linear_2_29)'
				d='M111.632 40.503q-2.007 0-3.813-.43-1.778-.459-2.781-1.176l1.72-3.24q1.003.66 2.437 1.061 1.463.402 2.924.402 1.52 0 2.266-.373.745-.401.745-1.118 0-.574-.659-.832-.66-.258-2.122-.545-1.663-.316-2.753-.688a4.75 4.75 0 0 1-1.863-1.204q-.774-.86-.774-2.322 0-2.552 2.121-3.986 2.15-1.433 5.62-1.433 1.605 0 3.125.344t2.581.946l-1.606 3.268q-1.893-1.175-4.559-1.175-1.462 0-2.236.43-.746.43-.746 1.09 0 .602.66.888.658.259 2.208.574 1.634.316 2.666.688 1.06.345 1.835 1.175.774.832.774 2.266 0 2.58-2.179 3.985-2.15 1.405-5.591 1.405'
			></path>
			<path
				fill='url(#paint2_linear_2_29)'
				d='m131.595 31.557 5.304 8.717h-5.189l-3.67-5.993-2.724 2.265-.746 3.727h-4.473L124.341 19h4.473l-2.38 11.899 7.397-6.05h5.821z'
			></path>
			<path
				stroke='url(#paint3_linear_2_29)'
				strokeWidth='4.301'
				d='M81.084 15.902V8.734A5.734 5.734 0 0 1 86.82 3h61.644a5.735 5.735 0 0 1 5.735 5.734v40.141a5.735 5.735 0 0 1-5.735 5.734h-10.035l3.354 15.651c.293 1.368-1.346 2.303-2.374 1.354l-15.316-14.137H86.819a5.734 5.734 0 0 1-5.735-5.735v-2.867'
			></path>
			<defs>
				<linearGradient
					id='paint0_linear_2_29'
					x1='87.679'
					x2='99.758'
					y1='18.999'
					y2='53.111'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#485BFF'></stop>
					<stop offset='1' stopColor='#FF59F8'></stop>
				</linearGradient>
				<linearGradient
					id='paint1_linear_2_29'
					x1='87.679'
					x2='99.758'
					y1='18.999'
					y2='53.111'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#485BFF'></stop>
					<stop offset='1' stopColor='#FF59F8'></stop>
				</linearGradient>
				<linearGradient
					id='paint2_linear_2_29'
					x1='87.679'
					x2='99.758'
					y1='18.999'
					y2='53.111'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#485BFF'></stop>
					<stop offset='1' stopColor='#FF59F8'></stop>
				</linearGradient>
				<linearGradient
					id='paint3_linear_2_29'
					x1='81.084'
					x2='141.295'
					y1='3'
					y2='77.547'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#485BFF'></stop>
					<stop offset='1' stopColor='#FF59F8'></stop>
				</linearGradient>
			</defs>
		</svg>
	)
})
Logo.displayName = 'Logo'

export { Logo }
