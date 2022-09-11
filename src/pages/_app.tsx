import '@styles/index.scss';
import '@styles/locomotive.scss';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import AppMenu from '@components/AppMenu';
import Loader from '@modules/loader';
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import { isBrowser } from '@hooks/useWindowDimensions';

/**
 * We first need to wait for framer motion to complete the page transition animation
 * and then to search and scroll to the section user has selected
 */
const handExitComplete = (): void => {
    if (isBrowser) {
        const hashId = window.location.hash;
        console.log('hashId', hashId);

        if (hashId) {
            setTimeout(() => {
                const element = document.querySelector(hashId);
                if (element) {
                    if (window.locomotive) {
                        window.locomotive.scrollTo(element, {
                            offset: 300,
                        });
                    } else {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest',
                        });
                    }
                }
            }, 2000);
        }
    }
};

function MyApp({ Component, pageProps }: AppProps) {
    const { push, pathname } = useRouter();
    /**
     * We need to observer for route events and catch any changes in hashes
     * That means user has clicked on an acnher point for a specific section in one of the pages
     */
    useEffect(() => {
        handExitComplete();
        if (window.location.hash) {
            push(pathname);
        }
        Router.events.on('routeChangeComplete', handExitComplete); // add listener

        return () => {
            Router.events.off('routeChangeComplete', handExitComplete); // remove listener
        };
    }, [pathname, push]);
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
