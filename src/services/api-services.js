import axios from "axios";

export const LoginService = async ({ email, password }) =>
    axios.post("/api/auth/login", {
        email,
        password,
    });
export const GetAllProducts = async () => axios.get("/api/products");

export const GetAllCategories = async () => {
    try {
        const res = await axios.get('/api/categories');
        setCategories(res.data.categories);
    } catch (error) {
        console.log(error);
    }
}

export const GetAllSizes = async () => await axios.get("/api/sizes");

export const GetWishList = async ({ encodedToken }) =>
    await axios.get("/api/user/wishlist", {
        headers: {
            authorization: encodedToken,
        },
    });

export const PostWishList = async ({ product, encodedToken }) => {
    return await axios.post(
        "/api/user/wishlist",
        { product },
        {
            headers: {
                authorization: encodedToken,
            },
        }
    );
};

export const DeleteWish = async ({ productId, encodedToken }) => {
    return await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
            authorization: encodedToken,
        },
    });
};

export const GetCartList = async ({ encodedToken }) =>
    await axios.get("/api/user/cart", {
        headers: {
            authorization: encodedToken,
        },
    });

export const PostCart = async ({ product, encodedToken }) => {
    return await axios.post(
        "/api/user/cart",
        { product },
        {
            headers: {
                authorization: encodedToken,
            },
        }
    );
};

export const IncDecCart = async ({ productId, encodedToken, type }) => {
    return await axios.post(
        `/api/user/cart/${productId}`,
        {
            action: { type },
        },
        {
            headers: {
                authorization: encodedToken,
            },
        }
    );
};
export const DeleteCart = async ({ productId, encodedToken }) => {
    return await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
            authorization: encodedToken,
        },
    });
};