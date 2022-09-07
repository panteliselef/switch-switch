import styles from './products.module.scss';
import React from 'react';
import Stack from '@layouts/Stack';

const Product: React.FC<{ videoFileName: string; title: string; speed?: number }> = ({
    speed,
    videoFileName,
    title,
}) => {
    return (
        <Stack direction={'column'} className={styles.product}>
            <Stack gap={'0.8.vw'} direction={'column'} data-scroll={true} data-scroll-speed={speed || 1}>
                <div className={styles.product_image}>
                    <video loop={true} autoPlay={true} muted={true}>
                        <source src={`/videos/${videoFileName}`} type="video/mp4" />
                    </video>
                </div>
                <p className={styles.product_title}>{title}</p>
            </Stack>
        </Stack>
    );
};

function ProductCollection() {
    return (
        <div
            style={{
                position: 'relative',
            }}
        >
            <div className={styles.product_collection}>
                <Product videoFileName={'livolo.mp4'} title={`Livolo`} />
                <Product speed={2} videoFileName={'simon.mp4'} title={`Simon`} />
                <Product videoFileName={'jung.mp4'} title={`Jung`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'atelier.mp4'} title={`Atelier`} />
                <Product speed={2} videoFileName={'busch.mp4'} title={`Busch`} />
                <Product videoFileName={'jung.mp4'} title={`Jung`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'lifesmart.mp4'} title={`lifesmart`} />
                <Product speed={2} videoFileName={'tem.mp4'} title={`Tem`} />
                <Product videoFileName={'simon.mp4'} title={`Simon`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'smarther.mp4'} title={`Smarther`} />
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
                <Product videoFileName={'artemide.mp4'} title={`artemide`} />
                <Product speed={2} videoFileName={'nowosaroski.mp4'} title={`nowosaroski`} />
                <Product videoFileName={'tala.mp4'} title={`tala`} />
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
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p className={styles.bg_title}>PRODUCTS</p>
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
