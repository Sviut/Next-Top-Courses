import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'

interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header/>
			<div>
				<Sidebar/>
				<div>
					{children}
				</div>
			</div>
			<Footer/>
		</>
	)
}
