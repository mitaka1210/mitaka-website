import type {AppProps} from 'next/app'
import {appWithTranslation} from "next-i18next";
import {SessionProvider} from "next-auth/react";
import {Provider} from "react-redux";
import store from '../store/storeState/store'

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>

  )
}

export default appWithTranslation(App);
