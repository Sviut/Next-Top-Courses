import { Button } from '../components'

export default function Home(): JSX.Element {
	return (
		<>
			<Button arrow={'down'} appearance={'primary'}>Кнопка</Button>
			<Button appearance={'ghost'}>Кнопка</Button>
		</>
	)
}
