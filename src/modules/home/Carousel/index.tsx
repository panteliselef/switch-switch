import Stack from '@layouts/Stack';
import styles from './carousel.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import React, { useContext, useEffect } from 'react';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import { breakpoints } from '@utils/breakpoints';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import useTranslation from 'next-translate/useTranslation';

const Carousel = () => {
    const { isReady } = useContext(SmoothScrollContext);
    const { t } = useTranslation('homepage');
    const w = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `#made`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: 'top top',
                    end: '+=700vh',
                    pin: true,
                    scrub: true,
                },
            });

            tl.fromTo(
                '#c',
                {
                    rotateX: 0,
                },
                {
                    rotateX: 40,
                },
            );
        }, 1000);
    }, [w, isReady]);
    return (
        <section>
            <div
                id={'made'}
                className={styles.grid}
                style={{
                    perspective: '2000px',
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: '22vw 1fr',
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack
                    direction={'column'}
                    style={{
                        width: 'auto',
                    }}
                >
                    <p className={'p-text-1'}>{t('carouselPinnedLabel')}</p>
                </Stack>

                <Stack
                    id={'c'}
                    direction={'column'}
                    alignItems={'flex-start'}
                    style={{
                        transformStyle: 'preserve-3d',
                        position: 'relative',
                        height: '100%',
                        maxWidth: '80vw',
                    }}
                >
                    <p className={classNames('p-text-1', styles.green, styles.t)}>{t('carouselItem1')}</p>
                    <p className={classNames('p-text-1', styles.blue, styles.t)}>{t('carouselItem2')}</p>
                    <p className={classNames('p-text-1', styles.red, styles.t)}>{t('carouselItem3')}</p>
                    <p className={classNames('p-text-1', styles.yellow, styles.t)}>{t('carouselItem4')}</p>
                    <p className={classNames('p-text-1', styles.red, styles.t)}>{t('carouselItem5')}</p>
                    <p className={classNames('p-text-1', styles.green, styles.t)}>{t('carouselItem6')}</p>
                    <p className={classNames('p-text-1', styles.blue, styles.t)}>{t('carouselItem7')}</p>
                    <p className={classNames('p-text-1', styles.yellow, styles.t)}>{t('carouselItem8')}</p>
                    <p className={classNames('p-text-1', styles.red, styles.t)}>{t('carouselItem9')}</p>
                </Stack>
            </div>
        </section>
    );
};

export default Carousel;
