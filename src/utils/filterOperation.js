export const getFilterByCategory = (filteredArray, state) => {
    let withoutFiltered = [...filteredArray];
    let tempArray = [];

    if (
        state.categories.shoes === false &&
        state.categories.clothing === false
    )
        return withoutFiltered;


    if (state.categories.shoes) {
        tempArray.push(
            ...withoutFiltered.filter((prod) => prod.subCategory === "Shoes")
        );
    }

    if (state.categories.clothing) {
        tempArray.push(
            ...withoutFiltered.filter((prod) => prod.subCategory === "Clothing")
        );
    }

    return tempArray;
};

export const getSortedProducts = (products, sortBy) => {
    if (sortBy === "LOW_TO_HIGH")
        return [...products].sort((item1, item2) => item1.price - item2.price);
    if (sortBy === "HIGH_TO_LOW")
        return [...products].sort((item1, item2) => item2.price - item1.price);

    return products;
};


export const getDiscountedProducts = (products, rating) => {
    if (rating) {
        return products.filter((item) => parseInt(item.rating, 10) >= parseInt(rating, 10));
    }
    return products;
};


export const getPricedProducts = (products, price) => {
    return products.filter((item) => item.price <= price);
};


