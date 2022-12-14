import styles from './products.module.scss';
import React, { useRef } from 'react';
import Stack from '@layouts/Stack';
import ExternalLink from '@helpers/ExternalLink';
import gsap from 'gsap/dist/gsap';
import { useLazyVideo } from '@hooks/useLazyVideo';
import useTranslation from 'next-translate/useTranslation';

const Product: React.FC<{ url?: string; videoFileName: string; title: string; speed?: number }> = ({
    speed,
    url,
    videoFileName,
    title,
}) => {
    const { inView, ref, videoProps, videoSources } = useLazyVideo({
        sources: [
            {
                path: `/videos/${videoFileName}`,
                type: 'video/mp4',
            },
        ],
    });

    const outer = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLVideoElement>(null);

    const onComplete = () => {
        if (outer.current && inner.current) {
            gsap.set([outer.current, inner.current], { willChange: '' });
        }
    };

    const onMouseEnter = () => {
        gsap.killTweensOf([outer.current, inner.current]);
        gsap.timeline({
            defaults: { duration: 1.4, ease: 'expo' },
            onComplete,
        })
            .addLabel('start', 0)
            .set([outer.current, inner.current], { willChange: 'transform' }, 'start')
            .to(outer.current, { scaleY: 0.95, scaleX: 0.88 }, 'start')
            .to(inner.current, { ease: 'power4', scaleY: 1.2, scaleX: 1.7 }, 'start');
    };

    const onMouseLeave = () => {
        gsap.killTweensOf([outer.current, inner.current]);
        gsap.timeline({
            defaults: { duration: 1.4, ease: 'expo' },
            onComplete,
        })
            .addLabel('start', 0)
            .set([outer.current, inner.current], { willChange: 'transform' }, 'start')
            .to([outer.current, inner.current], { scale: 1 }, 0);
    };

    return (
        <Stack ref={ref} direction={'column'} className={styles.product}>
            <ExternalLink to={url || ''}>
                <Stack
                    gap={'0.8.vw'}
                    direction={'column'}
                    style={{
                        overflow: 'hidden',
                    }}
                    data-scroll={true}
                    data-scroll-speed={speed || 1}
                >
                    <div
                        className={styles.product_image}
                        ref={outer}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                    >
                        {inView && (
                            <video {...videoProps} ref={inner}>
                                {videoSources}
                            </video>
                        )}
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
                <Product url={'https://vook.rs/'} videoFileName={'livolo.mp4'} title={`Livolo`} />
                <Product
                    url={'https://www.simonelectric.com/intl/simon-100'}
                    speed={2}
                    videoFileName={'simon.mp4'}
                    title={`Simon`}
                />
                <Product url={'https://www.bticino.com/living-now/'} videoFileName={'bticino.mp4'} title={`Bticino`} />
            </div>

            <div className={styles.product_collection}>
                <Product url={'https://www.atelierluxus.com/'} videoFileName={'atelier.mp4'} title={`Atelier Luxus`} />
                <Product
                    url={'https://www.busch-jaeger.de/produkte/schalterdesign/busch-dynasty'}
                    speed={2}
                    videoFileName={'busch jaeger.mp4'}
                    title={`Bush Jaeger`}
                />
                <Product url={'https://www.jung.de/en/'} videoFileName={'jung.mp4'} title={`Jung`} />
            </div>

            <div className={styles.product_collection}>
                <Product
                    url={`http://www.smartsteel.rs/`}
                    videoFileName={'lifesmart.mp4'}
                    title={`lifesmart`}
                />
                <Product url={'https://www.tem.si/'} speed={2} videoFileName={'modul.mp4'} title={`TEM`} />
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
                    videoFileName={'nowodvorski.mp4'}
                    title={`Nowodvorski`}
                />
                <Product url={'https://www.tala.co.uk/'} videoFileName={'tala.mp4'} title={`tala`} />
            </div>

            <div className={styles.product_collection}>
                <Product url={`https://novaluce.com/`} videoFileName={'pixo retro.mp4'} title={`Nova Luce`} />
            </div>
        </div>
    );
}

function Products() {
    const { t } = useTranslation('homepage');
    return (
        <section>
            <Stack id={'products'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p className={styles.bg_title}>{t('productsBgTitle1')}</p>
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
                    <Product url={`https://avolt.com/`} videoFileName={'avolt.mp4'} title={`Avolt`} />
                </div>
            </Stack>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p className={styles.bg_title}>{t('productsBgTitle2')}</p>
            </Stack>
            <Lighting />
        </section>
    );
}

export default Products;
