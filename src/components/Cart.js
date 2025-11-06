import react from "react"
import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { addItem, clearCart } from "../utils/redux/cartSlice"
import { Link } from "react-router-dom"

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => (store.cart.items))

    const handleClearAll = () => {
        dispatch(clearCart())
    }

    return (
        <div className="cartContaier accordian">
            <h1> Products in cart </h1>
            {cartItems.length
                ? <>
                    <div className="flex-space-between">
                        <p> Review your cart & place your order now. </p>
                        <button onClick={() => handleClearAll()}>
                            Clear All
                        </button>
                    </div>
                    <ItemList
                        items={cartItems}
                    />
                </>
                : <div className="">
                    <Link to="/">
                        Your cart is empty!! Order food now
                    </Link>
                </div>

            }

        </div>
    )
}

export default Cart