import React from "react";
import './mobileLoginSignUpForm.scss';
import SignUpFormHTML from "@/app/SignUpForm/SignUpHTML";
import {validLoginInput} from "@/app/signInValidInput/signInValidInput";
import {login} from "@/store/login/loginSlice";
function MobileLoginSignUpForm() {
    const toggleForm = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
    };
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
    return (
        <section className="mobile-form-login-signUp">
            <div className="container flex-vertical-container">
                <div className="user signinBx">
                    <div className="imgBx"><img
                        src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                        alt=""/></div>
                    <div className="formBx">
                        <form action="" onSubmit={handleLogin}>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="password" name=""
                                   placeholder="Password"/>
                            <input type="submit" name="" value="Login"/>
                            <p className="signup">
                                Don't have an account ?
                                <a href="#" onClick={toggleForm}>Sign Up.</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx flex-vertical-container">
                        <SignUpFormHTML />
                    </div>
                    <div className="imgBx"><img
                        src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                        alt=""/></div>
                </div>
            </div>
        </section>
    );
}

export default MobileLoginSignUpForm;