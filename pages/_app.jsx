import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';

import Layout from "../components/Layout";
import { appWithTranslation } from '../i18n'


//export default appWithTranslation(withRedux(initStore, { debug: true })(

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : {})
          }
        };
      }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
           
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
     
        );
    }
};

//));
export default withRedux(initStore,{ debug: true })(appWithTranslation(MyApp));


