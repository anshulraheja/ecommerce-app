import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useWishlist } from './wishlist-context'

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartState, setCartState] = useState({
        cartItems: []
    })
    const navigate = useNavigate();
    const { auth: { token, isLoggedIn } } = useAuth();
    const { wishlist, setWishlist } = useWishlist();
    useEffect(() => {
        console.log(cartState.cartItems)
    }, [cartState])


    const getCart = () => {
        axios
            .get("/api/user/cart", {
                headers: { authorization: token },
            })
            .then((res) => {
                setCartState({ cartItems: res.data.cart })

            })
            .catch((err) => {
                alert("Error in getting the cart items")
            });
    }

    const addToCart = (product) => {
        if (!isLoggedIn) {
            alert("Please login first to add items to cart")
            return;
        }
        if (cartState.cartItems.find((item) => item._id === product._id)) {
            navigate("/cart")
        }
        else {
            axios.post("/api/user/cart", JSON.stringify({
                product
            }),
                {
                    headers: { authorization: token },
                }
            )
                .then((res) => {
                    getCart();
                })
                .catch((err) => {
                    alert("Error occured while adding the product to cart");
                });
        }
    }

    const removeFromCart = (id) => {
        axios
            .delete(`/api/user/cart/${id}`, {
                headers: { authorization: token },
            })
            .then((res) => {
                getCart();
            })
            .catch((err) => {
                alert("some error occured while deleting")
            });
    }

    const moveToWishlist = (product) => {

        if (wishlist.find((item) => item._id === product._id)) {
            removeFromCart(product._id);
        }
        else {
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
            removeFromCart(product._id);
        }


    }
    const increaseItemQty = (id) => {
        console.log("increase");
    }
    return <CartContext.Provider value={{ cartState, addToCart, getCart, removeFromCart, moveToWishlist, increaseItemQty }}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }