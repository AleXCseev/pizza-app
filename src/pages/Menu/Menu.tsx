import { Search } from "../../components/Search/Search"
import { Headling } from "../../components/Headling/Headling"
import styles from "./Menu.module.css"

export const Menu = () => {
    return (
        <>
            <div className={styles['head']}>
                <Headling>Hello World</Headling>
                <Search type="text" placeholder="Введите блюдо или состав" />
            </div>
            
        </>
    )
}