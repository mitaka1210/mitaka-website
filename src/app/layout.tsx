'use client'
import {Inter} from "next/font/google";
import React from "react";
import './typography.scss';
import './reusable-styles.scss';
import Providers from "@/app/Login-page/Providers/Provider";
import '../i18n';
import {Provider} from "react-redux";
import store from "@/store/storeState/store";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Provider store={store}> {/* Обвиваме само тук клиентските неща */}
            <Providers>
                {children}
            </Providers>
        </Provider>
        </body>
        </html>
    );
}