import { Search } from "../../components/Search/Search"
import { Headling } from "../../components/Headling/Headling"
import styles from "./Menu.module.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import { PREFIX } from "../../helpers/api"
import { Product } from "../../interfaces/product.interface"
import { useEffect, useState } from "react"
import axios from "axios"

export const Menu = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getMenu = async () => {
        try {
            const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data)
        } catch(e) {
            console.log(e);
            return
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <>
            <div className={styles['head']}>
                <Headling>Hello World</Headling>
                <Search type="text" placeholder="Введите блюдо или состав" />
            </div>
            <div>
                {products.map(p => (
                    <ProductCard 
                        key={p.id}
                        id={p.id}
                        title={p.name}
                        description={p.ingredients.join(", ")}
                        rating={p.rating}
                        price={p.price}
                        image={p.image}
                    />
                ))}
                

               
            </div>
        </>
    )
}