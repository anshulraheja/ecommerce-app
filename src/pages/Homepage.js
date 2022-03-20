import Header from '../components/Header/Header'
import './Homepage.css'
import homepage_front from '../assets/images/homepage_front.png'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import { useDb } from '../context/Dbcontext'
const Homepage = () => {
    const { DbState } = useDb();
    const { products } = DbState;
    const homepageProducts = products.slice(0, 2) || [];
    return (
        <div>
            <Header />
            <div className="homepage-image-block">
                <img src={homepage_front} alt="homepage" />
            </div>
            <div className="homepage-content">
                <h4 className="subtitle">The Future Is In The Air</h4>
                <h1 className="title">NIKE AIR MAX INTRLK</h1>
                <Link to="/products" className="btn-shop-now">Shop Now</Link>
            </div>
            {homepageProducts.length > 0 &&
                <div>
                    <h2 className="section-header">Best of Air Max</h2>

                    <div className="homepage-section-one">
                        {
                            homepageProducts.map(item => {
                                return <ProductCard item={item} key={item._id} />
                            })
                        }
                    </div>


                </div>
            }
        </div>
    )
}

export default Homepage