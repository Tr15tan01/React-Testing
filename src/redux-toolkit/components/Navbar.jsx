import { CartIcon } from '../icons'

import { useSelector } from 'react-redux'
import store from '../store'

const NavBar = () => {
    const { amount } = useSelector((store) => store.cart)
    return (
        <nav className="nav-center">
            <h3>Redux Toolkit</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar