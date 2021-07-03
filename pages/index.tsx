import { Button, P, Rating, Tag } from '../components'
import { withLayout } from '../Layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}

function Home({ menu }: HomeProps): JSX.Element {
	return (
		<>
			<Button arrow={'down'} appearance={'primary'}>Кнопка</Button>
			<Button appearance={'ghost'}>Кнопка</Button>
			<P size="l">dsfsdsf</P>
			<P size="m">dsfsdsf</P>
			<P size="s">dsfsdsf</P>
			<Tag color="grey">тег</Tag>
			<Rating rating={4}/>
			<Rating rating={0} isEditable/>
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory,
	})
	return {
		props: {
			menu,
			firstCategory,
		},
	}
}
