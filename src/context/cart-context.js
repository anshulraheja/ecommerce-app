import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/api/user/cart", {
                headers: {
                    authorization: getToken(),
                },
            });
            setCart(data.cart);
        })();
    }, []);

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    );
};

const useCart = () => useContext(cartContext);

export { CartContextProvider, useCart };