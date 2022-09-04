import '@styles/index.scss';
import '@styles/locomotive.scss';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import AppMenu from '@components/AppMenu';
import Loader from '@modules/loader';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Loader />
            <AppMenu />
            {/*<LocomotiveLayout>*/}
            <Component {...pageProps} />
            {/*<Footer />*/}
            {/*</LocomotiveLayout>*/}
        </>
    );
}

export default MyApp;
