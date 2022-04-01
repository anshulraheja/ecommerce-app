import './WishlistPage.css';
import { useAuth } from '../../context/auth-context'
import React from 'react'
import { useWishlist } from '../../context/wishlist-context';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom'

const WishlistPage = () => {

    const { auth } = useAuth();
    const { wishlist, clearWishlist } = useWishlist();
    return (
        <div>
            <h1>Wishlist</h1>
            {auth.isLoggedIn ?
                <div>

                    {wishlist.length > 0 && <button onClick={clearWishlist}>Clear wishlist</button>}
                    {
                        wishlist.length > 0 ?
                            wishlist.map(item => {
                                return (<ProductCard item={item} key={item._id} />)
                            })
                            :
                            <div>Wishlist empty</div>
                    }
                </div> : <div>
                    <h4>Please login first</h4>
                    <Link to="/signup">Signup</Link>
                </div>}
        </div>
    )
}

export default WishlistPage