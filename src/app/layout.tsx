'use client'
import {Inter} from "next/font/google";
import React from "react";
import './typography.scss';
import './reusable-styles.scss';
import Providers from "@/app/SignInButton/Providers/Provider";
import '../i18n';
import {Provider} from "react-redux";
import store from "@/store/storeState/store";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Provider store={store}>
            <html lang="en">
            <head>
                <title>Dimitar Dimitrov - Blog</title>
            </head>
            <body className={inter.className}>
            <Providers>
                {children}
            </Providers>
            </body>
            </html>
        </Provider>
    );
}
