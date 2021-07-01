import styles from './Button.module.css'
import { ReactNode } from 'react'
import cn from 'classnames'

interface ButtonProps {
	children: ReactNode
	appearance: 'primary' | 'ghost'
}

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
		>
			{children}
		</button>
	)
}

