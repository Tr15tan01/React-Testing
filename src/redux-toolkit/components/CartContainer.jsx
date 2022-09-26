import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
    const dispatch = useDispatch()

    const { cartItems, total, amount } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h1>
                        Your bag is currently empty
                    </h1>
                </header>
            </section>
        )
    }


    return (
        <section className="cart">
            <header>
                <h3>Your Bag</h3>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total {total}</h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer