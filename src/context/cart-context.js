import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useWishlist } from './wishlist-context'

const CartContext = createContext();
export function cartReducer(state, action) {

    switch (action.type) {
        case "GET_CARTITEM":
            return { ...state, cart: action.payload }

        case "ADD_TO_CART":
            return { ...state, cart: action.payload }

        case "REMOVE_CART_CARD":
            console.log(state, action);
            return { ...state, cart: action.payload }

        case "INCREMENT_CART_QUANTITY":
            console.log(state, action)
            return { ...state, cart: action.payload }

        case "DECREMENT_CART_QUANTITY":
            return { ...state, cart: action.payload }

        default:
            return state
    }
}

const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: []
    })
    const navigate = useNavigate();
    const { auth: { token, isLoggedIn } } = useAuth();
    const { wishlist, setWishlist } = useWishlist();
    useEffect(() => {
        console.log("useEffect: ", cartState.cart)
    }, [cartState])


    useEffect(() => {
        {
            token &&
                (async () => {
                    try {
                        const { data: { cart } } = await axios("api/user/cart", {
                            headers: {
                                authorization: token,
                            }
                        })
                        console.log("cart useEffect:", cart)
                        cartDispatch({ type: "GET_CARTITEM", payload: cart })
                    } catch (error) {
                        console.log(error);
                    }
                })();
        }
    }, [token])


    const addToCart = (product) => {
        if (cartState.cart.find((item) => item._id === product._id)) {
            return;
        } else {
            (async () => {
                try {
                    const { status, data: { cart } } = await axios.post("api/user/cart", { product }, {
                        headers: {
                            authorization: token,
                        }
                    })
                    if (status === 201 || status === 200) {
                        cartDispatch({ type: "ADD_TO_CART", payload: cart, productId: product._id },)
                    }

                } catch (error) {
                    console.log("error occured while adding the item")
                }


            })();
        }
    }

    const removeFromCart = async (id) => {
        try {
            const { status, data: { cart } } = await axios.delete(`/api/user/cart/${id}`, {
                headers: {
                    authorization: token,
                }
            })
            if (status === 201 || status === 200) {
                cartDispatch({ type: "REMOVE_CART_CARD", payload: cart })
            }
        } catch (error) {
            alert("error occured while deleting the item")
        }
    }

    const incrementQty = async (id, type) => {
        console.log(id, type)
        try {
            const { data: { cart } } = await axios.post(`/api/user/cart/${id}`, {
                action: {
                    type: type,
                },
            },
                {
                    headers: {
                        authorization: token,
                    }
                })
            console.log("res", cart);
            cartDispatch({ type: "INCREMENT_CART_QUANTITY", payload: cart })

        } catch (error) {
            console.log(error)
        }
    }

    const decrementQty = async (id, type) => {
        try {
            const { data: { cart }, } = await axios.post(`/api/user/cart/${id}`, {
                action: {
                    type: type
                },
            },
                {
                    headers: {
                        authorization: token,
                    }
                })

            cartDispatch({ type: "DECREMENT_CART_QUANTITY", payload: cart })


        } catch (error) {
            console.log(error)
        }
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
    return <CartContext.Provider value={{ cartState, addToCart, removeFromCart, incrementQty, decrementQty, moveToWishlist }}>
        {children}
    </CartContext.Provider>
}


const useCart = () => useContext(CartContext)

export { useCart, CartProvider }