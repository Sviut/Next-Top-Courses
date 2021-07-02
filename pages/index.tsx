import { Button, P, Rating, Tag } from '../components'
import { Layout } from '../Layout/Layout'

export default function Home(): JSX.Element {
	return (
		<Layout>
			<Button arrow={'down'} appearance={'primary'}>Кнопка</Button>
			<Button appearance={'ghost'}>Кнопка</Button>
			<P size="l">dsfsdsf</P>
			<P size="m">dsfsdsf</P>
			<P size="s">dsfsdsf</P>
			<Tag color="grey">тег</Tag>
			<Rating rating={4}/>
			<Rating rating={0} isEditable/>
		</Layout>
	)
}
