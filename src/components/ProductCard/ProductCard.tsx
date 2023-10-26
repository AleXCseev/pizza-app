import styles from "./ProductCard.module.css";
import cn from "classnames";
import { ProductCardProps } from "./ProductCard.props";
import { Link } from "react-router-dom";

const ProductCard = (props: ProductCardProps) => {
    return (
        <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={styles['price']}>
                        {props.price}
                        <span className={styles['currency']}>$</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src="/card-cart.svg" alt="" />
                    </button>
                    <div className={styles['rating']}>
                        {props.rating}
                        <img src="/star.svg" alt="" />
                    </div>
                </div>
                <div className={styles['footer']}>
                    <h3 className={styles['title']}>{props.title}</h3>
                    <p className={styles['description']}>{props.description}</p>
                </div>
            </div>
        </Link>
        
    )
}

export default ProductCard;