import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import {useTranslation} from "react-i18next";

const SignInButton = () => {
  const {t, i18n} = useTranslation();
  const {data: session} = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <a onClick={() => signIn()}>
      {t("signIn")}
    </a>
  );
};

export default SignInButton;
