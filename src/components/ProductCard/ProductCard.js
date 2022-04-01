import './ProductCard.css'
import { useWishlist } from '../../context/wishlist-context.js'
const ProductCard = ({ item }) => {
    const { title, price, image, categoryName, subCategory, rating } = item;
    const { wishlist, toggleWishlist } = useWishlist();

    const isProductInWishlist =
        wishlist.findIndex((p) => p._id === item._id) !== -1;
    return (
        <div className="product-card vertical-card">
            <div className="product-card-image-container">
                <img src={image} alt="" />
                <span className="btn-liked" onClick={() => toggleWishlist(item)}>
                    {
                        isProductInWishlist ? (
                            <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                        ) : (
                            <i className="far fa-heart"></i>
                        )
                    }

                </span>
            </div>
            <div className="product-card-info vertical-info">
                <div className="vertical-description">
                    <div className="description-content-title">
                        {title}
                        <span className="description-content temp2">
                            {rating}
                            <i className="fas fa-star rating-star"></i>
                        </span>
                    </div>
                    <h5 className="description-content">{categoryName}</h5>
                    <h5 className="description-content temp">{subCategory}</h5>

                    <div className="product-card-price">
                        <span className="current-price">Rs {price}</span>
                    </div>
                </div>
                <div className="product-card-btn-container">
                    <button className="btn-addToCart">Add to Bag</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard