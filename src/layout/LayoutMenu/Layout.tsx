import { NavLink, Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import { Button } from "../../components/Button/Button"
import cn from 'classnames'

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
                    <NavLink to="/" className={({ isActive }) => cn(styles['link'], {
                        [styles['active']]: isActive
                    })}>
                        <img src="/cart-icon.svg" alt="" />
                        Меню
                    </NavLink>
                    <NavLink to="/cart"className={({ isActive }) => cn(styles['link'], {
                        [styles['active']]: isActive
                    })}>
                        <img src="/menu-icon.svg" alt="" />
                        Корзина
                    </NavLink>
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