import {Button, HTag, Input, P, Rating, Tag, Textarea} from '../components'
import {withLayout} from '../Layout/Layout'
import {GetStaticProps} from 'next'
import axios from 'axios'
import {MenuItem} from '../interfaces/menu.interface'
import styles from '../components/Button/Button.module.css'
import ArrowIcon from '../components/Button/arrow.svg'

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}

function Home({menu}: HomeProps): JSX.Element {
    return (
        <>
            {/*<Button arrow={'down'} appearance={'primary'}>Кнопка</Button>*/}
            {/*<Button appearance={'primary'}>Кнопка</Button>*/}
            {/*<Button appearance={'ghost'}>Кнопка</Button>*/}
            {/*<Button appearance={'primary'} arrow={'right'}>Кнопка</Button>*/}
            {/*<Button appearance={'primary'} arrow={'down'}>Кнопка</Button>*/}
            {/*<HhDataCards size="l">dsfsdsf</HhDataCards>*/}
            {/*<HhDataCards size="m">dsfsdsf</HhDataCards>*/}
            {/*<HhDataCards size="s">dsfsdsf</HhDataCards>*/}
            {/*<Tag color="grey">тег</Tag>*/}
            {/*<Rating rating={1}/>*/}
            {/*<Rating rating={2}/>*/}
            {/*<Rating rating={3}/>*/}
            {/*<Rating rating={0} isEditable/>*/}
            {/*<HTag tag={'h1'}>Head</HTag>*/}
            {/*<HTag tag={'h2'}>Head</HTag>*/}
            {/*<HTag tag={'h3'}>Head</HTag>*/}
            <Input placeholder="test"/>
            <Textarea placeholder="test"/>
        </>
    )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    })
    return {
        props: {
            menu,
            firstCategory,
        },
    }
}
