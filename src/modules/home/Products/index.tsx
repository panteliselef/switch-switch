import styles from './products.module.scss';
import React from 'react';
import Stack from '@layouts/Stack';
import ExternalLink from '@helpers/ExternalLink';

const Product: React.FC<{ url?: string; videoFileName: string; title: string; speed?: number }> = ({
    speed,
    url,
    videoFileName,
    title,
}) => {
    return (
        <Stack direction={'column'} className={styles.product}>
            <ExternalLink to={url || ''}>
                <Stack gap={'0.8.vw'} direction={'column'} data-scroll={true} data-scroll-speed={speed || 1}>
                    <div className={styles.product_image}>
                        <video loop={true} autoPlay={true} muted={true}>
                            <source src={`/videos/${videoFileName}`} type="video/mp4" />
                        </video>
                    </div>
                    <p className={styles.product_title}>{title}</p>
                </Stack>
            </ExternalLink>
        </Stack>
    );
};

function ProductCollection() {
    return (
        <div
            style={{
                position: 'relative',
                paddingBottom: '40vw',
            }}
        >
            <div className={styles.product_collection} id={'products'}>
                <Product videoFileName={'livolo.mp4'} title={`Livolo`} />
                <Product
                    url={'https://www.simonelectric.com/intl/simon-100'}
                    speed={2}
                    videoFileName={'simon.mp4'}
                    title={`Simon`}
                />
                <Product videoFileName={'smarther.mp4'} title={`Smarther`} />
            </div>

            <div className={styles.product_collection}>
                <Product url={'https://www.atelierluxus.com/'} videoFileName={'atelier.mp4'} title={`Atelier`} />
                <Product
                    url={'https://www.busch-jaeger.de/produkte/schalterdesign/busch-dynasty'}
                    speed={2}
                    videoFileName={'busch.mp4'}
                    title={`Busch`}
                />
                <Product url={'https://www.jung.de/en/'} videoFileName={'jung.mp4'} title={`Jung`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'lifesmart.mp4'} title={`lifesmart`} />
                <Product url={'https://www.tem.si/'} speed={2} videoFileName={'tem.mp4'} title={`Tem`} />
                <Product
                    url={'https://www.simonelectric.com/intl/simon-100'}
                    videoFileName={'simon.mp4'}
                    title={`Simon`}
                />
            </div>
        </div>
    );
}

function Lighting() {
    return (
        <div
            style={{
                position: 'relative',
            }}
        >
            <div className={styles.product_collection}>
                <Product url={'https://www.artemide.com/en/home'} videoFileName={'artemide.mp4'} title={`artemide`} />
                <Product
                    url={'https://www.nowodvorski.com/'}
                    speed={2}
                    videoFileName={'nowosaroski.mp4'}
                    title={`nowosaroski`}
                />
                <Product url={'https://www.tala.co.uk/'} videoFileName={'tala.mp4'} title={`tala`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'pixo retro.mp4'} title={`pixo retro`} />
            </div>
        </div>
    );
}

function Products() {
    return (
        <section>
            <Stack id={'products'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p className={styles.bg_title}>SWITCHES</p>
            </Stack>
            <ProductCollection />
            <Stack
                direction={'row'}
                style={{
                    width: '100%',
                }}
                justifyContent={'center'}
            >
                <div className={styles.single_product}>
                    <Product videoFileName={'avolt.mp4'} title={`Avolt`} />
                </div>
            </Stack>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p className={styles.bg_title}>LIGHTING</p>
            </Stack>
            <Lighting />
        </section>
    );
}

export default Products;
