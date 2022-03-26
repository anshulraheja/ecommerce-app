import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const initialFilterState = {
    categories: {
        shoes: false,
        clothing: false
    },
    rating: "",
    soryBy: "",
    price: 6000,
    max_price: 0,
    searchQuery: "",

};
function filterReducer(state, action) {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sortBy: action.payload };
        case "FILTER_BY_RATING":
            return { ...state, rating: action.payload };
        case "CLOTHING":
            return {
                ...state,
                categories: {
                    ...state["categories"],
                    clothing: !state.categories.clothing
                }
            };
        case "SHOES":
            return {
                ...state,
                categories: {
                    ...state["categories"],
                    shoes: !state.categories.shoes
                }
            };
        case "PRICE":
            return { ...state, price: action.payload };
        case "MAX_PRICE":
            return { ...state, max_price: action.payload };
        case 'CLEAR_FILTERS':
            return {
                categories: {
                    shoes: false,
                    clothing: false
                },
                rating: "",
                soryBy: "",
                price: 6000,
                max_price: 0,
                searchQuery: "",

            }
        default: return state

    }
}


const FilterProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);
    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterContext = () => useContext(FilterContext);

export { useFilterContext, FilterProvider };
