import Head from 'next/head'
import {Provider} from 'react-redux'
import Layout from '../layouts'
import {useStore} from '../store'
import Router from 'next/router'
import NProgress from 'nprogress'

import 'bootstrap/dist/css/bootstrap.css';
import '../css/animations.css'
import '../css/font-awesome5.css'
import '../css/icomoon.css'
import '../css/main.css'
import '../css/shop.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)
  
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    )
  }
  