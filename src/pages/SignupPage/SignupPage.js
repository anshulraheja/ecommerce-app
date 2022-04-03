import './SignupPage.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from '../../context/auth-context';
import Header from '../../components/Header/Header';
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

        <div>
            <Header />
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
                    <Link to="/login" className="login-new_account">Already Have an account? Login In </Link>
                </form>
            </section>
            </div>
        </div>
    )
}

export default SignupPage