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
        <div className={styles.product_collection}>
            <Product videoFileName={'artemide.mp4'} title={`Livolo`} />
            <Product videoFileName={'artemide.mp4'} title={`artemide`} />
            <Product videoFileName={'atelier.mp4'} title={`Atelier`} />
            <Product videoFileName={'avolt.mp4'} title={`Avolt`} />
            <Product videoFileName={'busch.mp4'} title={`Busch`} />
            <Product videoFileName={'jung.mp4'} title={`Busch`} />
            <Product videoFileName={'lifesmart.mp4'} title={`Busch`} />
            <Product videoFileName={'nowosaroski.mp4'} title={`Busch`} />
            <Product videoFileName={'pixo retro.mp4'} title={`pixo retro`} />
            <Product videoFileName={'simon.mp4'} title={`Simon`} />
            <Product videoFileName={'smarther.mp4'} title={`Smarther`} />
            <Product videoFileName={'tala.mp4'} title={`tala`} />

            {/*<Product*/}
            {/*    imageSrc={`https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}*/}
            {/*    title={`Livolo`}*/}
            {/*/>*/}

            {/*<Product*/}
            {/*    imageSrc={`https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}*/}
            {/*    title={`Livolo`}*/}
            {/*/>*/}
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
