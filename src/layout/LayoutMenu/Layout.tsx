import { NavLink, Outlet, useNavigate } from "react-router-dom"
import styles from "./Layout.module.css"
import { Button } from "../../components/Button/Button"
import cn from 'classnames'
import { AppDispatch, RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { logout, getProfile } from "../../store/user.slice"
import { useEffect } from "react"

export const Layout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const profile = useSelector((s: RootState) => s.user.profile);
    const items = useSelector((s: RootState) => s.cart.items);

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    const logoutUser = () => {
        dispatch(logout())
        navigate('/auth/login')
    }

    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img src="/avatar.png" alt="" className={styles['avatar']} />
                    <div className={styles['name']}>
                        {profile?.name}
                    </div>
                    <div className={styles['email']}>
                        {profile?.email}
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
                    {items.reduce((accum, item) => accum += item.count, 0)}
                </div>
                <Button className={styles['exit']} onClick={logoutUser}>
                    <img src="/out.svg" alt="" />
                    Выйти
                </Button>
            </div>
            <div className={styles['content']}>
                <Outlet/>
            </div>
        </div>
    )
}