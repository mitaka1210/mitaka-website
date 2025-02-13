import React, {useEffect, useState} from "react";
import './loginPage.scss';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {validLoginInput} from "@/app/signInValidInput/signInValidInput";
import {login} from "@/store/login/loginSlice";
import SignUpFormHTML from '../SignUpForm/SignUpHTML';

function LoginPageHtml(props) {

        const [errors, setErrors] = useState({});
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [loginForm, setHideForm] = useState(true);
        const dispatch = useDispatch();
        const { loading, error } = useSelector((state) => state.auth);
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const router = useRouter();
        const [user, setUser] = useState(null);
        useEffect(() => {
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const containerLogin = document.getElementById('login');

            const handleSignUpClick = () => {
                containerLogin.classList.add('right-panel-active');
            };

            const handleSignInClick = () => {
                containerLogin.classList.remove('right-panel-active');
            };

            signUpButton.addEventListener('click', handleSignUpClick);
            signInButton.addEventListener('click', handleSignInClick);
            return () => {
                signUpButton.removeEventListener('click', handleSignUpClick);
                signInButton.removeEventListener('click', handleSignInClick);
            };
        }, []);
        const googleLogin  = () => {

        }
        const handleLogin = async (e) => {
            console.log(username, password);
            e.preventDefault();
            const validationErrors = validLoginInput(username, password);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            const result = await dispatch(login({ username, password, role: 'user' }));
            if (result.payload.token) {
                // navigate('/home');
            }
        };
        const handleClickSignUp = () => {
            setHideForm(false);
        };
        const handleClickSignIn = () => {
            setHideForm(true);
            setIsLoggedIn(true);
        };
        return (
            <div className="container-login-page">
                <div className="container-login" id="login">
                    <div className="form-container-login sign-in-container-login">
                        {loginForm ? (
                            <div>
                                <form action="#" onSubmit={handleLogin}>
                                    <h2 className="add-color-white">Sign In</h2>
                                    <div className="social-container-login" onClick={googleLogin}>
                                        {/*<a href="#" className="social">*/}
                                        {/*    <img className="google-size" src={google} alt="google" />*/}
                                        {/*</a>*/}
                                    </div>
                                    <span className="add-color-white">or use your account</span>
                                    <div>
                                        <label className="add-color-white login-input margin-top-15">Username</label>
                                        <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
                                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                                    </div>
                                    <div className="margin-15">
                                        <label className="add-color-white">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                                    </div>
                                    {isLoggedIn && <p style={{ color: 'red' }}>{error}</p>}
                                    <button className="btn-login-page" onClick={handleClickSignIn} type="submit" disabled={loading}>
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="form-container-login sign-up-container-login">
                                <SignUpFormHTML />
                            </div>
                        )}
                    </div>
                    <div className="overlay-container-login">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left" onClick={handleClickSignIn}>
                                <h5>Welcome Back</h5>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost btn-login-page" id="signIn" onClick={handleClickSignIn}>
                                    Sign In
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right" onClick={handleClickSignUp}>
                                <h4>Hello,Friend</h4>
                                <p>Enter your personal details and start journey with me!</p>
                                <button className="ghost btn-login-page hello-friend-btn" id="signUp" onClick={handleClickSignUp}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default LoginPageHtml;