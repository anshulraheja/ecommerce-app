import './Header.css'
import { Link } from 'react-router-dom'
import nike_logo from '../../assets/images/nike_logo.png'
import { useDb } from '../../context/Dbcontext'
import { useAuth } from '../../context/auth-context'
const Header = () => {
    const { DbState } = useDb();
    const { categories } = DbState;
    const { auth, logoutHandler } = useAuth();
    console.log(auth);
    console.log(auth.user.firstName);
    return (
        <header className="header">
            <div className='logo'>
                <Link to="/">
                    <img src={nike_logo} alt="nike" />
                </Link>
            </div>
            <div className="categories">
                {categories.length > 0 && categories.map(({ _id, categoryName }) => (
                    <li key={_id}>
                        <Link to="/products">{categoryName}</Link>
                    </li>
                ))}
            </div>
            <div className="desktop-actions">
                <div className="search-bar">
                    <i className="fas fa-search search-icon"></i>
                    <input type="text" className="search-input" placeholder="Search" />
                </div>
                <div className="desktop-actions-pages">
                    <Link to="/wishlist" className="badge-wrapper">
                        <i className="far fa-heart"></i>
                        <span className="badge notification-badge">15</span>
                    </Link>
                    <Link to="/cart" className="badge-wrapper">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="badge notification-badge">2</span>
                    </Link>
                    {auth.isLoggedIn === true ?
                        < div >
                            <button onClick={logoutHandler}>Logout</button>
                        </div>

                        :
                        <Link to="/signup" className="btn-login">
                            Sign up
                        </Link>
                    }
                </div>
            </div>
        </header >
    )
}

export default Header