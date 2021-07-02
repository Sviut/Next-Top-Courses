import { Button, P, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
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
