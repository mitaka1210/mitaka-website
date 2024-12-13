'use client';

import { Inter } from "next/font/google";
import React from "react";
import './typography.scss';
import './reusable-styles.scss';
import Providers from "@/app/SignInButton/Providers/Provider";
import '../i18n';
import { Provider } from "react-redux";
import store from "@/store/storeState/store";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// @ts-ignore
// @ts-ignore
export default function RootLayout({ children, session: userSession }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <SessionProvider session={userSession}>
            <Provider store={store}>
                <Providers>
                    {children}
                </Providers>
            </Provider>
        </SessionProvider>
        </body>
        </html>
    );
}
