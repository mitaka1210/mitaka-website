'use client'
import React from 'react';
import { LoginPageHTML, FooterHTML, Navigation } from './componentsShare/DynamicComponentsShare';

const LoginPage = () => {
    return (
        <div className="login-create-account-page">
            <div className="contacts-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
                <Navigation />
            </div>
            <LoginPageHTML />
            <FooterHTML />
        </div>
    );
};

export default LoginPage;
