import { Search } from "../../components/Search/Search"
import { Headling } from "../../components/Headling/Headling"
import styles from "./Menu.module.css"
import { PREFIX } from "../../helpers/API"
import { Product } from "../../interfaces/product.interface"
import { ChangeEvent, useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { MenuList } from "./MenuList/MenuList"

const Menu = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>();
    const [filter, setFilter] = useState<string>("")

    useEffect(() => {
        getMenu(filter)
    }, [filter])

    const getMenu = async (name?:string) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
                params: {
                    name
                }
            });
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

    const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    

    return (
        <>
            <div className={styles['head']}>
                <Headling>Меню</Headling>
                <Search type="text" placeholder="Введите блюдо или состав" onChange={updateFilter} />
            </div>
            <div>
                { !isLoading && products.length > 0 && <MenuList products={products}/> }
                { error && <>Error!!!</> }
                { isLoading && <>Loading!!!</> }
                { !isLoading && products.length === 0 && <>Не найдено блюд по запросу</> }
            </div>
        </>
    )
}

export default Menu;