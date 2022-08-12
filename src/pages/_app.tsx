import '@styles/index.scss';
import '@styles/locomotive.scss';
import type { AppProps } from 'next/app';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LocomotiveLayout>
            <Component {...pageProps} />
            <Footer />
        </LocomotiveLayout>
    );
}

export default MyApp;
