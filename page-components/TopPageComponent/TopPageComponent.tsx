import {TopLevelCategory, TopPageModel} from "../../interfaces/topPage.interface";
import {ProductModel} from "../../interfaces/product.interface";
import {Advantages, HhDataCards, HTag, Sort, SortEnum, Tag} from "../../components";
import styles from './TopPageComponent.module.css'
import {sortReducer} from "./sort.reducer";
import {useReducer} from "react";

export interface TopPageComponentProps {
    firstCategory: number
    page: TopPageModel
    products: ProductModel[]
}

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort})
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag={'h1'}>{page.title}</HTag>
                {products && <Tag color={'grey'}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
                {sort}
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
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

            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <HTag tag={'h2'}>Получаемые навыки</HTag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    )
}
