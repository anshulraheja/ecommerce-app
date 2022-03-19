import './ProductCard.css'

const ProductCard = () => {
    return (
        <div className="product-card vertical-card">
            <div className="product-card-image-container">
                <img src="https://picsum.photos/201" alt="" />
                <span className="btn-liked">
                    <i className="far fa-heart"></i>
                </span>
            </div>
            <div className="product-card-info vertical-info">
                <div className="vertical-description">
                    <h4 className="description-content-title">Nike</h4>
                    <h5 className="description-content-subtitle">Airforce 1</h5>
                    <div className="product-card-price">
                        <span className="current-price">Rs 395</span>
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