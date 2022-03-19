import { useEffect, useState } from 'react';
import axios from 'axios'
import './Header.css'
import { Link } from 'react-router-dom'
import nike_logo from '../../assets/images/nike_logo.png'

const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(async () => {
        try {
            const res = await axios.get('/api/categories');
            setCategories(res.data.categories);
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <header className="header">
            <div className='logo'>
                <Link to="/">
                    <img src={nike_logo} alt="nike" />
                </Link>
            </div>
            <div className="categories">
                {categories.map(({ _id, categoryName }) => (
                    <li key={_id}>
                        <Link to="/">{categoryName}</Link>
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
                    <Link to="/signin" className="btn-login">
                        Sign in
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header