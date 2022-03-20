import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const DbContext = createContext();

const initialDbState = {
    categories: [],
    products: [],
    user: []
}
const DbReducer = (DbState, action) => {
    switch (action.type) {
        case "getproducts":
            return {
                ...DbState,
                products: action.payload,
            };
        case "getcategories":
            return {
                ...DbState,
                categories: action.payload,
            };
        default:
            return DbState
    }
};

function DbProvider({ children }) {
    const [DbState, DbDispatch] = useReducer(DbReducer, initialDbState);

    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get("/api/products");
                DbDispatch({
                    type: "getproducts",
                    payload: response.data.products,
                });
            } catch (error) {
                console.error(error.message);
            }
        };
        getproducts();
    }, []);

    useEffect(() => {
        const getcategory = async () => {
            try {
                const response = await axios.get("/api/categories");
                DbDispatch({
                    type: "getcategories",
                    payload: response.data.categories,
                });
            } catch (error) {
                console.error(error.message);
            }
        };
        getcategory();
    }, []);

    return (
        <DbContext.Provider value={{ DbState, DbDispatch }}>
            {children}
        </DbContext.Provider>
    )
}

const useDb = () => useContext(DbContext);

export { DbProvider, useDb }