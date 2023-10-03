import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import { Button } from "../../components/Button/Button"

export const Layout = () => {
    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img src="/avatar.png" alt="" className={styles['avatar']} />
                    <div className={styles['name']}>
                        Алексеев Константин
                    </div>
                    <div className={styles['email']}>
                        alexcseev1990@gmail.com
                    </div>
                </div>
                <div className={styles['menu']}>
                    <Link to="/" className={styles['link']}>
                        <img src="/cart-icon.svg" alt="" />
                        Меню
                    </Link>
                    <Link to="/cart" className={styles['link']}>
                        <img src="/menu-icon.svg" alt="" />
                        Корзина
                    </Link>
                </div>
                <Button className={styles['exit']}>
                    <img src="/out.svg" alt="" />
                    Выйти
                </Button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}