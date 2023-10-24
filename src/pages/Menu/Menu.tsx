import { Search } from "../../components/Search/Search"
import { Headling } from "../../components/Headling/Headling"
import styles from "./Menu.module.css"
import ProductCard from "../../components/ProductCard/ProductCard"

export const Menu = () => {
    return (
        <>
            <div className={styles['head']}>
                <Headling>Hello World</Headling>
                <Search type="text" placeholder="Введите блюдо или состав" />
            </div>
            <div>
                <ProductCard 
                    id={1}
                    title="Title"
                    description="Description"
                    rating={4.5}
                    price={100}
                    image="/main.jpg"
                />

               
            </div>
        </>
    )
}