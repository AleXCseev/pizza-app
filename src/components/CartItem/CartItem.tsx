import styles from "./CartItem.module.css";
import { CartItemProps } from "./CartItem.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";


const CartItem = (props: CartItemProps) => {
    const dispatch = useDispatch<AppDispatch>()

    const descrease = () => {

    }

    const increase = () => {

    }

    const remove = () => {

    }

    return (
        <div className={styles['item']}>
            <div className={styles['image']}  style={{backgroundImage: `url('${props.image}')`}}></div>
            <div className={styles['description']}>
                <div className={styles['name']}>{props.name}</div>
                <div className={styles['currency']}>{props.price}&nbsp;$</div>
            </div>
            <div className={styles['actions']}>
                <button className={styles['button']} onClick={descrease}>
                    <img src="/card-cart.svg" alt="" />
                </button>
                <div>{props.count}</div>
                <button className={styles['button']} onClick={increase}>
                    <img src="/card-cart.svg" alt="" />
                </button>
            </div>
            <button className={styles['remove']} onClick={remove}>
                <img src="/card-cart.svg" alt="" />
            </button>
        </div>
        
    )
}

export default CartItem;