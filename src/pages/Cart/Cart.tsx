import { Link } from "react-router-dom"

export const Cart = () => {
    return (
        <>
            <div>
                <Link to="/">Menu</Link>
                <Link to="/cart">Cart</Link>
            </div>
            Cart Page
        </>
    )
}