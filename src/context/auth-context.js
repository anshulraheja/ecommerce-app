import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext(null);

const authInitialState = {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
};


const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };

        case "LOGGED_OUT":
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                isLoggedIn: false,
                user: ""
            };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [auth, authDispatcher] = useReducer(authReducer, authInitialState);
    const navigate = useNavigate();

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
                const response = await axios.post(`/api/auth/signup`, {
                    "email": email,
                    "password": password,
                    "confirmpassword": confirmpassword,
                    "firstName": name,
                    "terms": terms
                });
                localStorage.setItem("token", response.data.encodedToken);
                localStorage.setItem("user", JSON.stringify(response.data));
                authDispatcher({ type: "LOGGED_IN", payload: response.data });
                navigate("/");
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
    }

    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        authDispatcher({ type: "LOGGED_OUT" });
        navigate("/");
    }

    const loginHandler = async (e, userInfo) => {
        e.preventDefault();
        const { email, password } = userInfo;
        if (email == "" || password == "") {
            alert("Fields can't be empty");
            return;
        }
        else {

            try {
                const response = await axios.post("/api/auth/login", JSON.stringify({
                    email: email,
                    password: password,
                }))
                localStorage.setItem("token", response.data.encodedToken);
                localStorage.setItem("user", JSON.stringify(response.data));
                authDispatcher({ type: "LOGGED_IN", payload: response.data });
                navigate("/");
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
    }
    return (
        <authContext.Provider
            value={{ auth, authDispatcher, signUphandler, logoutHandler, loginHandler }}
        >
            {children}
        </authContext.Provider>
    );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider }




