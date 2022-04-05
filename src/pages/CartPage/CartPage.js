import './CartPage.css'
import React, { useEffect } from 'react'
import { Header, ProductCard } from '../../components'
import { useAuth } from '../../context/auth-context'
import { useCart } from '../../context/cart-context'
import HorizontalProductCard from '../../components/ProductCard/HorizontalProductCard'
import { Link } from 'react-router-dom'
import CartPrice from '../../components/ProductCard/CartPrice'
const CartPage = () => {
    const { auth } = useAuth();
    const { cartState } = useCart();
    // const { cart } = cartState;
    console.log(cartState);
    return (
        <>
            <Header />
            <div>
                <h1>Cart</h1>
                <div>
                    {
                        auth.isLoggedIn ?
                            <div className="final-product-container">
                                <div className="product-container cart-page-product-container">
                                    {
                                        cartState.cart && cartState.cart.length > 0 ?
                                            cartState.cart.map(item => {
                                                return (<HorizontalProductCard item={item} key={item._id} />)
                                            })
                                            :
                                            <div>cart empty</div>
                                    }
                                </div>
                                {cartState.cart && cartState.cart.length > 0 && <CartPrice />}
                            </div>
                            :
                            <div>
                                <h4>Please login first</h4>
                                <Link to="/signup">Signup</Link>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default CartPage