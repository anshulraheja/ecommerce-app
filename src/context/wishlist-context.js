import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './auth-context'
import axios from 'axios'

const WishlistContext = createContext(null);


const WishlistProvider = ({ children }) => {
    const { auth } = useAuth();
    const { isLoggedIn } = auth;
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (product) => {
        if (!isLoggedIn) {
            alert("Please login to add item to wishlist");
            return;
        }
        if (wishlist.find((item) => item._id === product._id)) {
            removeFromWishlist(product._id);
        } else {
            axios
                .post(
                    "/api/user/wishlist",
                    JSON.stringify({
                        product,
                    }),
                    {
                        headers: { authorization: localStorage.getItem("token") },
                    }
                )
                .then((res) => {
                    setWishlist(res.data.wishlist);
                })
                .catch((err) => {
                    alert("Oops you refreshed the page! Please logout and login again")
                });
        }

    };

    const removeFromWishlist = (id) => {
        axios
            .delete(`/api/user/wishlist/${id}`, {
                headers: { authorization: localStorage.getItem("token") },
            })
            .then((res) => {
                setWishlist(res.data.wishlist);
            })
            .catch((err) => {
                alert("some error occured while deleting")
            });
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    useEffect(() => {
        console.log("Wishlist", wishlist);

    }, [wishlist]);

    useEffect(() => {
        axios
            .get("/api/user/wishlist", {
                headers: { authorization: localStorage.getItem("token") },
            })
            .then((res) => {
                setWishlist(res.data.wishlist);
            })
            .catch((err) => {
                setWishlist([]);
            });
    }, []);

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                setWishlist,
                toggleWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };