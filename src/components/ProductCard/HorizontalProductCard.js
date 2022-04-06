import './ProductCard.css'
import { useCart } from '../../context/cart-context';
const HorizontalProductCard = ({ item }) => {
    const { title, price, image, categoryName, subCategory, rating } = item;
    const { removeFromCart, moveToWishlist, incrementQty, decrementQty } = useCart();
    return (
        <div className="product-card">
            <div className="product-card-image-container">
                <img src={image} alt="" />
            </div>
            <div className="product-card-info">
                <div>
                    <h3>{title}</h3>
                    <h5 className="description-content">{categoryName}, {subCategory}</h5>
                    <div className="product-card-price">
                        <span className="current-price">Rs {price}</span>

                    </div>
                    <div class="quantity-box">
                        <span onClick={() => { item.qty <= 1 ? removeFromCart(item._id) : decrementQty(item._id, "decrement") }}>-{" "}</span>
                        <span>{item.qty || 0}</span>
                        <span onClick={() => incrementQty(item._id, "increment")}>+</span>
                    </div>
                </div>
                <div className="product-card-btn-container">
                    <button className="btn-removeFromCart" onClick={() => removeFromCart(item._id)}>Remove from Cart</button>
                    <button className="btn-movetoWishlist" onClick={() => moveToWishlist(item)}>Move to WishList</button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalProductCard