import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './auth-context'
import axios from 'axios'

const WishlistContext = createContext(null);


const WishlistProvider = ({ children }) => {
    const { auth } = useAuth();
    const { isLoggedIn, token } = auth;
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (product) => {
        if (!isLoggedIn) {
            alert("Please login to add item to wishlist");
            return;
        }
        if (wishlist.find((item) => item._id === product._id)) {
            removeFromWishlist(product._id);
        } else {
            axios.post("/api/user/wishlist", JSON.stringify({
                product,
            }),
                {
                    headers: { authorization: token },
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
                headers: { authorization: token },
            })
            .then((res) => {
                setWishlist(res.data.wishlist);
            })
            .catch((err) => {
                alert("some error occured while deleting")
            });
    };

    const clearWishlist = () => {
        wishlist.map(product => removeFromWishlist(product._id))
        setWishlist([]);
    };

    const getWishlist = () => {
        axios
            .get("/api/user/wishlist", {
                headers: { authorization: token },
            })
            .then((res) => {
                setWishlist(res.data.wishlist);
            })
            .catch((err) => {
                setWishlist([]);
            });
    }

    useEffect(() => {
        console.log("wishlist state varibale: ", wishlist);
    }, [wishlist]);





    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                setWishlist,
                toggleWishlist,
                clearWishlist,
                getWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };