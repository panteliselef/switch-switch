import '@styles/index.scss';
import '@styles/locomotive.scss';
import type { AppProps } from 'next/app';
import LocomotiveLayout from '@layouts/LocomotiveLayout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LocomotiveLayout>
            <Component {...pageProps} />
        </LocomotiveLayout>
    );
}

export default MyApp;
