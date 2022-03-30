import axios from "axios";
import { createContext, useContext, useReducer } from "react";

const authContext = createContext(null);

const authInitialState = {
    isLoggedIn: false,
    userId: "",
    user: ""
};


const authReducer = (state, action) => {
    console.log(state)
    console.log(action.payload.userInfo)
    switch (action.type) {
        case "loggedIn":
            const { userInfo, _id: userId } = action.payload;
            console.log(userInfo)
            console.log(userId)
            return {
                ...state,
                userId: userId,
                user: userInfo,
                isLoggedIn: true,
            };

        case "loggedOut":
            return authInitialState;
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [auth, authDispatcher] = useReducer(authReducer, authInitialState);

    const signUphandler = async (e, userInfo) => {
        e.preventDefault();
        const { name, email, password, confirmpassword, terms } = userInfo;
        console.log(name, email, password, confirmpassword, terms);
        if (password !== confirmpassword || name == "" || email == "" || password == "" || confirmpassword == "" || terms == false) {
            alert("Either password is incorrect or you haven't filled all the details ");
            return;
        }
        else {
            try {
                const response = await axios.post(`/api/auth/signup`, { userInfo });
                localStorage.setItem("token", response.data.encodedToken);
                const { createdUser } = response.data;
                console.log(response.data.encodedToken)
                console.log(createdUser);
                authDispatcher({ type: "loggedIn", payload: createdUser });
            } catch (error) {
                console.log(error);
            }
            console.log("else")
        }
    }

    const handleLoginIn = async (userInfo) => {
        const { email, password } = userInfo;
        try {
            const response = await axios.post(`/api/auth/login`, {
                email,
                password,
            });
            localStorage.setItem("token", response.data.encodedToken);
            const { foundUser } = response.data;
            authDispatcher({ type: "loggedIn", payload: foundUser });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <authContext.Provider
            value={{ auth, authDispatcher, signUphandler, handleLoginIn }}
        >
            {children}
        </authContext.Provider>
    );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider }




