import { Await, useLoaderData, useNavigate } from "react-router-dom"
import { Product } from "../../interfaces/product.interface"
import { Suspense } from "react";
import styles from "./Product.module.css"
import { Headling } from "../../components/Headling/Headling";
import { Button } from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartSliceActions } from "../../store/cart.slice";

export function Product() {
    const data = useLoaderData() as { data: Product };
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const addCart = (id: number) => {
        dispatch(cartSliceActions.add(id))
    }

    const backToMenu = () => {
        navigate("/")
    }

    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <Await
                    resolve={data.data}
                >
                    {({data}: {data: Product} ) => (
                        <>
                            <div className={styles['header']}>
                                <button className={styles['redirect']} onClick={backToMenu}>
                                    <img src="/back.svg" alt="" />
                                </button>
                                <Headling>{data.name}</Headling>
                                <Button appearence="small" onClick={() => addCart(data.id)} className={styles['add-cart']}>
                                    <img className={styles['add-cart-img']} src="/card-cart.svg" alt="" />
                                    В корзину
                                </Button>
                            </div>
                            <div className={styles['main']}>
                                <div className={styles['img']} style={{backgroundImage: `url('${data.image}')`}}></div>
                                <div className={styles['info']}>
                                    <div className={styles['info-line']}>
                                        <p className={styles['text']}>
                                            Цена
                                        </p>
                                        <p className={styles['price']}>
                                            {data.price} <span className={styles['currency']}>$</span>
                                        </p>
                                    </div>
                                    <div className={styles['info-line']}>
                                        <p className={styles['text']}>
                                            Рейтинг
                                        </p>
                                        <div className={styles['rating']}>
                                            {data.rating} 
                                            <img src="/star.svg" alt="" />
                                        </div>
                                    </div>
                                    <p className={styles['text-list']}>Состав:</p>
                                    <ul className={styles['list']}>
                                        {data.ingredients.map(i => {
                                            return (
                                                <li key={i}>{i}</li>
                                            )
                                        })}
                                    </ul>
                                    
                                </div>
                            </div>
                        </>
                        
                    )}
                </Await>
            </Suspense>
           
           
        </>
    )
}

