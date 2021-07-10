import {TopLevelCategory, TopPageModel} from "../../interfaces/topPage.interface";
import {ProductModel} from "../../interfaces/product.interface";
import {HhDataCards, HTag, Tag} from "../../components";
import styles from './TopPageComponent.module.css'

export interface TopPageComponentProps {
    firstCategory: number
    page: TopPageModel
    products: ProductModel[]
}

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag={'h1'}>{page.title}</HTag>
                {products && <Tag color={'grey'}>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag='h2'>Вакансии - {page.category}</HTag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>

            {firstCategory === TopLevelCategory.Courses && <HhDataCards {...page.hh}/>}
        </div>
    )
}
