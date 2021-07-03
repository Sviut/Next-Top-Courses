import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Footer.module.css'
import { format } from 'date-fns'


interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>© 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href="#">Пользовательское соглашение</a>
			<a href="#">Политика конфиденциальности</a>
		</footer>
	)
}
