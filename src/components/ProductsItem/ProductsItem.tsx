import classes from "./ProductsItem.module.css"

type ProductsItemProps = {
    id: number
    image: string
    category: string
    title: string
    price: string
    description: string
}

const ProductsItem = ({id, image, category, title, price, description}:ProductsItemProps) => {
  return (
    <div className={classes.products_item}>
        <div><img src={image} alt={`product${id}`} /></div>
        <div>
            <p className={classes.products_item_category}>{category}</p>
            <div className={classes.products_item_info}>
                <h3>{title}</h3>
                <div className={classes.line}></div>
                <p>${price}</p>
            </div>
            <p className={classes.products_item_desc}>{description}</p>
        </div>
    </div>
  )
}

export default ProductsItem