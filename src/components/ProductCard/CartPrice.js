import { useState, useEffect } from 'react'
import { useCart } from '../../context/cart-context'
const CartPrice = () => {
    const { cartState: { cart } } = useCart();

    const [price, setPrice] = useState();
    const [prodCount, setProdCount] = useState();


    useEffect(() => {
        setPrice(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart]);

    useEffect(() => {
        setProdCount(cart.reduce((acc, curr) => acc + Number(curr.qty), 0))
    })

    return (
        <div class="price-card-container">
            <div class="price-card">
                <div class="coupon-check">
                    <span>Do you have a coupon?</span>
                    <a href="#">Apply</a>
                </div>
                <h4>PRICE DETAILS</h4>
                <div class="price-box">
                    {
                        cart.map(i => {
                            return (
                                <div class="item-price">
                                    <span>{i.title}</span>
                                    <span>*{" "}{i.qty}</span>
                                    <span>{i.price}</span>
                                </div>
                            )
                        })
                    }

                    <div class="item-price">
                        <span>Total Amount</span>
                        <span>{price}</span>
                    </div>
                </div>
                <a href="#" class="btn-placeOrder">Place Order</a>
            </div>
        </div>
    )
}

export default CartPrice