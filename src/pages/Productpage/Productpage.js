import './Productpage.css'
import { useEffect } from 'react';
import { useDb } from '../../context/Dbcontext'
import { FilterBar, Header, ProductCard } from '../../components/index'
import { useFilterContext } from '../../context/filter-context';
import { getSortedProducts, getFilterByCategory, getDiscountedProducts, getPricedProducts } from '../../utils/filterOperation'
const Productpage = () => {
    const { DbState } = useDb();
    const { products } = DbState;
    const { filterState } = useFilterContext();
    const { sortBy, rating, price } = filterState;

    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const sortedProducts = getSortedProducts(products, sortBy);
    const categoryProducts = getFilterByCategory(sortedProducts, filterState);
    const discountedProducts = getDiscountedProducts(categoryProducts, rating);
    const pricedProducts = getPricedProducts(discountedProducts, price);

    return (
        <div>
            <Header />
            <div className="product-page-content">
                <FilterBar />
                <div className="product-container">
                    {
                        pricedProducts.length > 0 && pricedProducts.map(item => {
                            return (<ProductCard item={item} key={item._id} />)
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Productpage