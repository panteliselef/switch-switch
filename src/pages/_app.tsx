import '@styles/index.scss';
import '@styles/locomotive.scss';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import AppMenu from '@components/AppMenu';
import { useEffect, useState } from 'react';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import { Router, useRouter } from 'next/router';
import { isBrowser, useDebouncedHeight } from '@hooks/useWindowDimensions';
import CustomCursor from '@components/CustomCursor';

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

function useMobileHackVh() {
    const height = useDebouncedHeight();

    useEffect(() => {
        // First we get the viewport height, and we multiply it by 1% to get a value for a vh unit
        const vh = height * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, [height]);
}

function MyApp({ Component, pageProps }: AppProps) {
    useMobileHackVh();
    const { push, pathname } = useRouter();
    const [isReady, setIsReady] = useState(false);
    /**
     * We need to observer for route events and catch any changes in hashes
     * That means user has clicked on an anchor point for a specific section in one of the pages
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
            <SmoothScrollContext.Provider value={{ isReady, setIsReady }}>
                <CustomCursor />
                <AppMenu />
                {/*<LocomotiveLayout>*/}
                <Component {...pageProps} />
                {/*<Footer />*/}
                {/*</LocomotiveLayout>*/}
            </SmoothScrollContext.Provider>
        </>
    );
}

export default MyApp;
