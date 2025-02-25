import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from "@/store/createAccount/createAccountSlice";
import {validateInput} from '../validSignUpFormInput/validSignUpFormInput';
import {useTranslation} from "react-i18next";
import {validLoginInput} from "@/app/signInValidInput/signInValidInput";
const SignUpFormHTML = () => {
    const {t} = useTranslation();
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    //! ERROR input default state
    const [usernameError, setUsernameError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const { errorCreate } = useSelector((state) => state.createAccount);
    const dispatch = useDispatch();


    const handleCreateAccount = async (e) => {
        e.preventDefault();
        const validationErrors = validateInput(username, password, firstName, lastName, email, confirmPassword)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }else {
            try {
                dispatch(createAccount({ username, firstName, lastName, email, password })).unwrap();
                const signInButton = document.getElementById('idCreateAccount');
                const containerLogin = document.getElementById('login');
                signInButton.addEventListener('click', () => {
                    containerLogin.classList.remove('right-panel-active');
                });
            } catch (error) {
                console.log('Error', error);
            }
        }
    };
    return (
        <form action="#" onSubmit={handleCreateAccount}>
            <h4 className="color-white ">{t('createAccount')}</h4>
            <div>
                <label className="color-white login-input margin-top-15">{t('username')}</label>
                <input type="text" value={username} name="username1" onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
            </div>

            <div className="input-width-100 margin-5">
                <label className="color-white">{t('firstName')}</label>
                <input className="border-radius-10" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            </div>

            <div className="input-width-100 margin-5">
                <label className="color-white">{t('lastName')}</label>
                <input className="border-radius-10" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}

            </div>

            <div className="flex-vertical-container input-width-100 margin-5">
                <label className="color-white">{t('email')}</label>
                <input className="border-radius-10" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

            </div>

            <div className="input-width-100 margin-5">
                <label className="color-white">{t('password')}</label>
                <input className="border-radius-10" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

            </div>

            <div className="margin-10 input-width-100 margin-5">
                <label className="color-white">{t('confirmPassword')}</label>
                <input className="border-radius-10" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}

            </div>

            {errorCreate && (
                <p className="remove-padding-bottom" style={{ color: 'red' }}>
                    {errorCreate.message}
                </p>
            )}
            <button className="btn-login-page" id="idCreateAccount">
                {t("createAccount")}
            </button>
        </form>
    );
};

export default SignUpFormHTML;
