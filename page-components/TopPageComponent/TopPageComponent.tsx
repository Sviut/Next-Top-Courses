import {TopLevelCategory, TopPageModel} from "../../interfaces/topPage.interface";
import {ProductModel} from "../../interfaces/product.interface";
import {Advantages, HhDataCards, HTag, P, Tag} from "../../components";
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

            {firstCategory === TopLevelCategory.Courses && page.hh && <HhDataCards {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
                <HTag tag={'h2'}>Преимущества</HTag>
                <Advantages advantages={page.advantages}/>
            </>}

            {page.seoText && <P>{page.seoText}</P>}
            <HTag tag={'h2'}>Получаемые навыки</HTag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    )
}
