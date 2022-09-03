import '@styles/index.scss';
import '@styles/locomotive.scss';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import Footer from '@components/Footer';
import AppMenu from '@components/AppMenu';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AppMenu />
            <LocomotiveLayout>
                <Component {...pageProps} />
                <Footer />
            </LocomotiveLayout>
        </>
    );
}

export default MyApp;
