import { Link } from "react-router-dom"


export const Menu = () => {
    return (
        <>
            <div>
                <Link to="/">Menu</Link>
                <Link to="/cart">Cart</Link>
            </div>
            Menu Page
        </>
    )
}