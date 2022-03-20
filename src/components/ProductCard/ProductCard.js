import './ProductCard.css'

const ProductCard = ({ item }) => {
    const { title, price, image, categoryName } = item;

    return (
        <div className="product-card vertical-card">
            <div className="product-card-image-container">
                <img src={image} alt="" />
                <span className="btn-liked">
                    <i className="far fa-heart"></i>
                </span>
            </div>
            <div className="product-card-info vertical-info">
                <div className="vertical-description">
                    <h4 className="description-content-title">{title}</h4>
                    <h5 className="description-content-subtitle">{categoryName}</h5>
                    <div className="product-card-price">
                        <span className="current-price">Rs {price}</span>
                    </div>
                </div>
                <div className="product-card-btn-container">
                    <button className="btn-addToCart">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard