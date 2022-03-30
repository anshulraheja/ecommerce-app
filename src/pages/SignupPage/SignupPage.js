import './SignupPage.css'
import { useState } from 'react'
import { useAuth } from '../../context/auth-context';
const SignupPage = () => {

    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        terms: false
    });

    const { signUphandler, auth } = useAuth();

    const inputHandler = (e) => {
        if (e.target.type === "checkbox") {
            setSignUpData((signUpData) => ({
                ...signUpData,
                [e.target.name]: e.target.checked,
            }));
        }
        else {
            setSignUpData((data) => ({ ...data, [e.target.name]: e.target.value }));
        }

    };

    return (
        <div><section className="login-container">
            <form className="login-form">
                <h3 className="login-header">Signup</h3>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name" placeholder="Name" name="name" onChange={inputHandler} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" name="email" onChange={inputHandler} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={inputHandler} />
                </div>
                <div>
                    <label htmlFor="confirmpassowrd">Confirm Passowrd</label>
                    <input type="password" placeholder="Confirm Passowrd" name="confirmpassword" onChange={inputHandler} />

                    <div className="login-remember">
                        <span>
                            <input type="checkbox" name="terms" onChange={inputHandler} />
                            <label htmlFor="terms">I accept all Terms and Conditions</label>
                        </span>
                    </div>
                </div>
                <button className="login-button" onClick={(e) => signUphandler(e, signUpData)}>Create New Account</button>
                {/* <div className="social">
                    <button className="google"><i className="fab fa-google"></i>Sign up with Google</button>
                    <button className="fb"><i className="fab fa-facebook"></i>Sign up with Facebook</button>
                </div> */}
                <a href="/pages/login.html" className="login-new_account">Already have an account</a>
            </form>
        </section></div>
    )
}

export default SignupPage