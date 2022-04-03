import './CartPage.css'
import React, { useEffect } from 'react'
import { Header, ProductCard } from '../../components'
import { useAuth } from '../../context/auth-context'
import { useCart } from '../../context/cart-context'
import HorizontalProductCard from '../../components/ProductCard/HorizontalProductCard'
import { Link } from 'react-router-dom'
const CartPage = () => {
    const { auth } = useAuth();
    const { cartState, getCart } = useCart();
    const { cartItems } = cartState;

    useEffect(() => {
        getCart();
    }, [])


    return (
        <>
            <Header />
            <div>
                <h1>Cart</h1>
                {auth.isLoggedIn ?
                    <div className="product-container">
                        {
                            cartItems.length > 0 ?
                                cartItems.map(item => {
                                    return (<HorizontalProductCard item={item} key={item._id} />)
                                })
                                :
                                <div>cart empty</div>
                        }
                    </div> : <div>
                        <h4>Please login first</h4>
                        <Link to="/signup">Signup</Link>
                    </div>}
            </div>
        </>
    )
}

export default CartPage