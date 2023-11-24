import { useDispatch, useSelector } from "react-redux"
import { Headling } from "../../components/Headling/Headling"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect, useState } from "react"
import { Product } from "../../interfaces/product.interface"
import axios from "axios"
import { PREFIX } from "../../helpers/API"
import CartItem from "../../components/CartItem/CartItem"
import styles from "./Cart.module.css"
import { Button } from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { cartSliceActions } from "../../store/cart.slice"

const DELIVERY = 100;

export const Cart = () => {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const items = useSelector((s: RootState) => s.cart.items)
    const jwt = useSelector((s: RootState) => s.user.jwt)
    const navigate = useNavigate();
    const dispatch  = useDispatch<AppDispatch>()

    const total = items.map(i => {
        const product = cartProducts.find(p => p.id === i.id);
        if(!product) {
            return 0;
        }
        return i.count * product.price;
    }).reduce((accum, i) => accum += i, 0)


    const getItem = async (id: number) => {
        const {data} = await axios.get<Product>(`${PREFIX}/products/${id}`)
        return data;
    }

    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)))
        setCartProducts(res)
    }

    const checkout  = async () => {
        const { data } = await axios.post(`${PREFIX}/order`, {
            products: items
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch(cartSliceActions.clean())
        navigate('/success')
    }

    useEffect(() => {
        loadAllItems()
    }, [items])

    return (
            <>
                
                {
                    items.length === 0 ? <Headling className={styles['title']}>Корзина пуста</Headling> :
                    <>
                        <Headling className={styles['title']}>Корзина</Headling>
                        { items.map(i => {
                            const product = cartProducts.find(p => p.id === i.id);
                            console.log(product)
                            if(!product) {
                                return;
                            }
                            return <CartItem key={product.id} count={i.count} {...product}/>
                        })}
                        <div className={styles['line']}>
                            <p className={styles['text']}>Итог</p>
                            <p className={styles['price']}>{total} <span>$</span></p>
                        </div>
                        <hr className={styles['hr']} />
                        <div className={styles['line']}>
                            <p className={styles['text']}>Доставка</p>
                            <p className={styles['price']}>{DELIVERY} <span>$</span></p>
                        </div>
                        <hr className={styles['hr']} />
                        <div className={styles['line']}>
                            <p className={styles['text']}>Итог <span className={styles['total-count']}>({items.length})</span></p>
                            <p className={styles['price']}>{total + DELIVERY} <span>$</span></p>
                        </div>
                        <div className={styles['checkout']}>
                            <Button onClick={checkout} appearence="big">Оформить</Button>
                        </div>
                    </>
                }
               
            </>
    )
}