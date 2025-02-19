import React, {useEffect, useState} from "react";
import './loginPage.scss';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {validLoginInput} from "@/app/signInValidInput/signInValidInput";
import {login} from "@/store/login/loginSlice";
import SignUpFormHTML from '../SignUpForm/SignUpHTML';
import {useTranslation} from "react-i18next";
import Image from "next/image";
import google from '../../../assets/images/google-svgrepo-com.svg';
import {signIn, signOut, useSession} from "next-auth/react";

function LoginPageHtml(props) {
    const { t } = useTranslation(); // ✅ Винаги се извиква в началото
    const [errors, setErrors] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginForm, setHideForm] = useState(true);
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            signIn("google", {callbackUrl: '/'}).then(r => {})
        }
        const goToHome = () => {
            signOut({callbackUrl: '/'}).then(r => {
            })
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
                                    <h3 className="color-white">{t('login')}</h3>
                                    <div className="social-container-login" onClick={googleLogin}>
                                        <a href="#" className="social">
                                            <Image src={google} alt="google"/>
                                        </a>
                                    </div>
                                    <span className="color-white">{t('orUseYourAccount')}</span>
                                    <div>
                                        <label className="add-color-white login-input margin-top-15">Username</label>
                                        <input type="text" value={username} name="username" placeholder={t('username')} onChange={(e) => setUsername(e.target.value)} />
                                        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                                    </div>
                                    <div className="margin-15">
                                        <label className="add-color-white">Password</label>
                                        <input type="password" value={password} placeholder={t('password')} onChange={(e) => setPassword(e.target.value)} />
                                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                                    </div>
                                    {isLoggedIn && <p style={{ color: 'red' }}>{error}</p>}
                                    <button className="btn-login-page" onClick={handleClickSignIn} type="submit" disabled={loading}>
                                        {loading ? t('waitLoad') : t("login")}
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
                            <div className="overlay-panel overlay-left">
                                <h5>{t('welcomeBack')}</h5>
                                <p>{t('keepConnectedWithMePleaseLogin')}</p>
                                <button className="ghost btn-login-page" id="signIn" onClick={handleClickSignIn}>
                                    {t("login")}
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h6>{t("hiFriend")}</h6>
                                <span>{t("enterDetails")}</span>
                                <button className="ghost btn-login-page hello-friend-btn" id="signUp" onClick={handleClickSignUp}>
                                    {t("signUp")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default LoginPageHtml;