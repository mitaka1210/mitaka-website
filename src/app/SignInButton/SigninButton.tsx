import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import {useTranslation} from "react-i18next";
import './signIn.scss';

const SignInButton = () => {
  const {t, i18n} = useTranslation();
  const {data: session} = useSession();
  const goToHome = () => {
    signOut({callbackUrl: '/'}).then(r => {
    })
  }
  const logIn = () => {
    signIn().then(r => {
    })
  }
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={goToHome} className="flex-horizontal-container-raw log-out">
          {t("signOut")}
        </button>
      </div>
    );
  }
  return (
    <a onClick={logIn} className='login'>
      {t("signIn")}
    </a>
  );
};

export default SignInButton;
