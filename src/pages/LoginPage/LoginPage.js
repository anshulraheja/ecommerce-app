import './LoginPage.css'
import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <section class="login-container">
                <form class="login-form">
                    <h3 class="login-header">Login</h3>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email" id="email" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" id="password" />

                        <div class="login-remember">
                            <span>
                                <input type="checkbox" id="rememberme" name="rememberme" />
                                <label for="rememberme">Remember me</label>
                            </span>
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                    <button class="login-button">Login</button>
                    <div class="social">
                        <button class="google"><i class="fab fa-google"></i>Google</button>
                        <button class="fb"><i class="fab fa-facebook"></i>Facebook</button>
                    </div>
                    <a href="/pages/signup.html" class="login-new_account">Create New Account</a>
                </form>
            </section>
        </div>
    )
}

export default LoginPage