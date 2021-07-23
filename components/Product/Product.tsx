import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'
import styles from './Product.module.css'
import {ProductModel} from "../../interfaces/product.interface";
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {Divider} from "../Divider/Divider";
import {priceRu} from "../../helpers/helpers";

interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel
}

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/>
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
            </div> 
            <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.month}>месяц</span></div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>
                {product.categories.map(category => {
                    return (
                        <Tag
                            key={category}
                            color='ghost'
                            className={styles.category}
                        >{category}</Tag>
                    )
                })}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.ratingTitle}>{product.reviewCount} отзывов</div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>фичи</div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={styles.hr}/>
            <div className={styles.actions}>
                <Button appearance={'primary'}>Узнать подробнее</Button>
                <Button appearance={'ghost'} arrow={'right'} className={styles.reviewButton}>Читать отзывы</Button>
            </div>
        </Card>
    )
}
