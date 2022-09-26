import '../redux-toolkit/index.css'
import store from '../redux-toolkit/store'
import { Provider } from 'react-redux'
import NavBar from '../redux-toolkit/components/Navbar'
import CartContainer from '../redux-toolkit/components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from '../redux-toolkit/features/cart/cartSlice'
import { useEffect } from 'react'

const ReduxToolkitComponent = () => {
    // const { cartItems } = useSelector(store => store.cart)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(calculateTotals())
    // }, [cartItems])
    return (
        <Provider store={store} >
            <div>
                <main>
                    <NavBar />
                    <CartContainer />
                </main>
                this is toolkit xomponent
            </div>
        </Provider>
    )
}

export default ReduxToolkitComponent