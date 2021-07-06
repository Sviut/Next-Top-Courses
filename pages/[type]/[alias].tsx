import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next'
import axios from 'axios'
import {TopPageModel} from '../../interfaces/topPage.interface'
import {ParsedUrlQuery} from 'querystring'
import {ProductModel} from '../../interfaces/product.interface'
import {withLayout} from '../../Layout/Layout'
import {MenuItem} from '../../interfaces/menu.interface'

const firstCategory = 0

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
    page: TopPageModel
    products: ProductModel[]
}

function Course({menu, page, products}: CourseProps): JSX.Element {
    return (
        <div>{products && products.length}</div>
    )
}

export default withLayout(Course)

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    })

    return {
        paths: menu.flatMap(m => m.pages.map(p => '/[type]/' + p.alias)),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        }
    }

    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    })

    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias)
    //
    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10,
    })

    return {
        props: {
            firstCategory,
            page,
            products,
            menu,
        },
    }
}
