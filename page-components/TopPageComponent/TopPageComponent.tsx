import {TopPageModel} from "../../interfaces/topPage.interface";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: number
    page: TopPageModel
    products: ProductModel[]
}

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <>
            {products && products.length}
        </>
    )
}
