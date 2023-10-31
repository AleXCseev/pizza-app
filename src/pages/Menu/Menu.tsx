import { Search } from "../../components/Search/Search"
import { Headling } from "../../components/Headling/Headling"
import styles from "./Menu.module.css"
import { PREFIX } from "../../helpers/API"
import { Product } from "../../interfaces/product.interface"
import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { MenuList } from "./MenuList/MenuList"

const Menu = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>();

    const getMenu = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data)
            setIsLoading(false)
        } catch(e) {
            console.log(e);
            if(e instanceof AxiosError) {
                setError(e.message)
            }
            setIsLoading(false)
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
                { !isLoading && <MenuList products={products}/> }
                { error && <>Error!!!</> }
                { isLoading && <>Loading!!!</> }
            </div>
        </>
    )
}

export default Menu;