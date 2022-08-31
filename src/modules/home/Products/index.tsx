import styles from './products.module.scss';
import React from 'react';
import Stack from '@layouts/Stack';

const Product: React.FC<{ videoFileName: string; title: string }> = ({ videoFileName, title }) => {
    return (
        <Stack direction={'column'} className={styles.product}>
            <div className={styles.product_image}>
                <video loop={true} autoPlay={true} muted={true}>
                    <source src={`/videos/${videoFileName}`} type="video/mp4" />
                </video>
            </div>
            <p className={styles.product_title}>{title}</p>
        </Stack>
    );
};

function ProductCollection() {
    return (
        <div>
            <div className={styles.product_collection}>
                <Product videoFileName={'artemide.mp4'} title={`Livolo`} />
                <Product videoFileName={'artemide.mp4'} title={`artemide`} />
                <Product videoFileName={'atelier.mp4'} title={`Atelier`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'avolt.mp4'} title={`Avolt`} />
                <Product videoFileName={'busch.mp4'} title={`Busch`} />
                <Product videoFileName={'jung.mp4'} title={`Busch`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'lifesmart.mp4'} title={`Busch`} />
                <Product videoFileName={'nowosaroski.mp4'} title={`Busch`} />
                <Product videoFileName={'pixo retro.mp4'} title={`pixo retro`} />
            </div>

            <div className={styles.product_collection}>
                <Product videoFileName={'simon.mp4'} title={`Simon`} />
                <Product videoFileName={'smarther.mp4'} title={`Smarther`} />
                <Product videoFileName={'tala.mp4'} title={`tala`} />
            </div>
        </div>
    );
}

function Products() {
    return (
        <section>
            <p className={styles.bg_title}>PRODUCTS</p>
            <ProductCollection />
        </section>
    );
}

export default Products;
