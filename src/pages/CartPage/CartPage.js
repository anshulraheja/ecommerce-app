import './CartPage.css'


import React from 'react'
import { Header, ProductCard } from '../../components'
import { useAuth } from '../../context/auth-context'
const CartPage = () => {
    const { auth } = useAuth();
    return (
        <>
            <Header />
            <main className="main-container">

                <div>
                    <h2 className="cart-header">My Cart</h2>
                </div>
                <section className="cart-product-container">
                    <div className="final-product-container">
                        <div className="product-card">
                            <div className="product-card-image-container">
                                <img src="https://picsum.photos/201" alt="product" />
                                <span className="btn-liked">
                                    <i className="far fa-heart"></i>
                                </span>
                            </div>
                            <div className="product-card-info">
                                <div>
                                    <div className="description-content-title">Nike</div>
                                    <h5 className="description-content">Airforce 1</h5>
                                    <div className="product-card-price">
                                        <span className="current-price">Rs 395</span>
                                        <small className="original-price">Rs 1099</small>
                                        <small className="discount">(64% OFF)</small>
                                    </div>
                                </div>
                                <div className="product-card-btn-container">
                                    <button className="btn-removeFromCart">Remove from Cart</button>
                                    <button className="btn-movetoWishlist">Move to WishList</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-card-image-container">
                                <img src="https://picsum.photos/201" alt="product" />
                            </div>
                            <div className="product-card-info">
                                <div>
                                    <h3>Nike</h3>
                                    <h5 className="description-content">Airforce 1</h5>
                                    <div className="product-card-price">
                                        <span className="current-price">Rs 395</span>
                                        <small className="original-price">Rs 1099</small>
                                        <small className="discount">(64% OFF)</small>
                                    </div>
                                </div>
                                <div className="product-card-btn-container">
                                    <button className="btn-removeFromCart">Remove from Cart</button>
                                    <button className="btn-movetoWishlist">Move to WishList</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price-card-container">
                        <div className="price-card">
                            <div className="coupon-check">
                                <span>Do you have a coupon?</span>
                                <a href="#">Apply</a>
                            </div>
                            <h4>PRICE DETAILS</h4>
                            <div className="price-box">
                                <div className="item-price">
                                    <span>Price (3 items)</span>
                                    <span>Rs.3000</span>
                                </div>
                                <div className="item-price">
                                    <span>Discount</span>
                                    <span>-Rs.500</span>
                                </div>
                                <div className="item-price">
                                    <span>Delivery Charges</span>
                                    <span>FREE</span>
                                </div>
                                <div className="item-price">
                                    <span>Total Amount</span>
                                    <span>Rs2500</span>
                                </div>
                            </div>
                            <p>You will save Rs500 on this order</p>
                            <a href="#" className="btn-placeOrder">Place Order</a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default CartPage