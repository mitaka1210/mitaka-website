'use client'
import React from 'react';
import './contact.scss';
import {SignUpFormHTML, FooterHTML, Navigation} from './componentsShare/DynamicComponentsShare';

const LoginPage = () => {
    return (
        <div className="contacts-page">
            <div className="contacts-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
                <Navigation />
            </div>
            <SignUpFormHTML />
            <FooterHTML />
        </div>
    );
};

export default LoginPage;
