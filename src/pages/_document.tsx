import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#40AE3E" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#40ae3e" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />

                <link
                    rel="preload"
                    href="RocGrotesk-Medium.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin={'anonymous'}
                />
                <link
                    rel="preload"
                    href="RocGrotesk-Bold.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin={'anonymous'}
                />
                <link
                    rel="preload"
                    href="RocGrotesk-Thin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin={'anonymous'}
                />
                <link
                    rel="preload"
                    href="RocGrotesk-Light.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin={'anonymous'}
                />

                <link
                    rel="preload"
                    href="RocGrotesk-Regular.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin={'anonymous'}
                />
            </Head>
            <body>
                <Main />
                <div id={'mobile_menu'} />
                <NextScript />
            </body>
        </Html>
    );
}
