import styles from "./CartItem.module.css";
import { CartItemProps } from "./CartItem.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartSliceActions } from "../../store/cart.slice";


const CartItem = (props: CartItemProps) => {
    const dispatch = useDispatch<AppDispatch>()

    const descrease = () => {
        dispatch(cartSliceActions.remove(props.id))
    }

    const increase = () => {
        dispatch(cartSliceActions.add(props.id))
    }

    const remove = () => {
        dispatch(cartSliceActions.delete(props.id))
    }

    return (
        <div className={styles['item']}>
            <div className={styles['image']}  style={{backgroundImage: `url('${props.image}')`}}></div>
            <div className={styles['wrapper']}>
                <div className={styles['description']}>
                    <div className={styles['name']}>{props.name}</div>
                    <div className={styles['currency']}>{props.price}&nbsp;<span>$</span></div>
                </div>
                <div className={styles['actions']}>
                    <button className={styles['minus']} onClick={descrease}>
                        <img className={styles['icon']} src="/minus.svg" alt="" />
                    </button>
                    <div className={styles['count']}>{props.count}</div>
                    <button className={styles['plus']} onClick={increase}>
                        <img className={styles['icon']} src="/plus.svg" alt="" />
                    </button>
                </div>
                <button className={styles['remove']} onClick={remove}>
                    <img src="/delete.svg" alt="" />
                </button>
            </div>
        </div>
        
    )
}

export default CartItem;