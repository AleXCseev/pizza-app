import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import styles from "./Success.module.css"

export const Success = () => {
    const navigate = useNavigate()

    const newOrder = () => {
        navigate('/')
    }

    return (
        <div className={styles['wrapper']}>
            <img className={styles['img']} src="/success.png" alt="" />
            <p className={styles['text']}>Ваш заказ успешно оформлен!</p>
            <Button onClick={newOrder} appearence="big">Сделать новый</Button>
        </div>
    )
}