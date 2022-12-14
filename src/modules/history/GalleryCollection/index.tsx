import React, { useContext, useEffect } from 'react';
import styles from './galleryCollection.module.scss';
import Image from 'next/image';

import img1 from '@assets/bw1.png';
import img2 from '@assets/bw2.png';
import img3 from '@assets/bw3.png';
import img4 from '@assets/bw4.png';
import img5 from '@assets/bw5.png';

import mapImage from '@assets/map.png';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import Stack from '@layouts/Stack';
import InnerScroll from '@components/InnerScroll';
import studio from '@assets/studio.png';
import { useSplitText } from '@modules/history/hero';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import ExternalLink from '@helpers/ExternalLink';
import useTranslation from 'next-translate/useTranslation';

const GalleryCollection: React.FC = () => {
    const { isReady } = useContext(SmoothScrollContext);
    const w = useDebouncedWidth();
    useEffect(() => {
        const scrollTrigger = {
            trigger: `.${styles.media}`,
            scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
            start: 'top 100%',
            end: '150%',
            scrub: true,
        };

        if (!isReady) return;
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger,
            })
                .to(`.${styles.media}`, {
                    y: `${window.innerWidth - (window.innerWidth * 80) / 100}px`,
                })
                .to(`.${styles.media}:nth-child(2)`, {
                    x: `-${(window.innerWidth - (window.innerWidth * 80) / 100) / 2}px`,
                    scrollTrigger,
                })
                .to(`.${styles.media}:nth-child(3)`, {
                    x: `${(window.innerWidth - (window.innerWidth * 80) / 100) / 2}px`,
                    scrollTrigger,
                })
                .to(`.${styles.media}:nth-child(4)`, {
                    x: `-${window.innerWidth - (window.innerWidth * 80) / 100}px`,
                    scrollTrigger,
                })
                .to(`.${styles.media}:nth-child(5)`, {
                    x: `${window.innerWidth - (window.innerWidth * 80) / 100}px`,
                    scrollTrigger,
                });
        }, 1000);
    }, [w, isReady]);

    useSplitText('.gallery-text', '#gallery-trigger');

    useSplitText('.gallery-title', '.gallery-title-trigger');

    const { t } = useTranslation('history');

    return (
        <section className={styles.gallery}>
            <Stack
                data-scroll={''}
                direction={'column'}
                style={{
                    marginBottom: '10em',
                }}
                className={'gallery-title-trigger'}
            >
                <h1 className={'heading-1 text-center split-line gallery-title'}>
                    <div>{t('imgCollectionLine1')}</div>
                </h1>
                <h3 className={'heading-3 text-center split-line gallery-title'}>
                    <div>{t('imgCollectionLine2')}</div>
                </h3>
            </Stack>

            <ul className={styles.mediaWrapper}>
                <li className={styles.media}>
                    <Image placeholder={'blur'} objectFit={'cover'} src={img1} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image placeholder={'blur'} objectFit={'cover'} src={img2} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image placeholder={'blur'} objectFit={'cover'} src={img3} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image placeholder={'blur'} objectFit={'cover'} src={img4} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image placeholder={'blur'} objectFit={'cover'} src={img5} alt={'image 1'} layout={'fill'} />
                </li>
            </ul>

            <Stack direction={'row'} justifyContent={'center'}>
                <Stack
                    direction={'column'}
                    style={{
                        padding: '20vw 1em 1em',
                    }}
                    gap={'2vw'}
                >
                    <Stack id={'gallery-trigger'} className={styles.location_cont}>
                        <h3
                            className={'heading-3 split-line gallery-text'}
                            style={{
                                flex: '0 0 auto',
                            }}
                        >
                            <div>{t('locationLine1')}</div>
                        </h3>
                        <InnerScroll
                            style={{
                                width: '100%',
                                height: '150px',
                            }}
                        >
                            <Image alt={'photo from the studio'} src={studio} layout={'fill'} objectFit={'cover'} />
                        </InnerScroll>
                    </Stack>

                    <h3 className={'heading-3 split-line gallery-text'}>
                        <div>{t('locationLine2')}</div>
                    </h3>

                    <h3 className={'heading-3 split-line gallery-text'}>
                        <div>{t('locationLine3')}</div>
                    </h3>
                </Stack>
            </Stack>

            <Stack direction={'column'} className={styles.text}>
                <p className={'p-text-1'} data-scroll="" data-scroll-speed="1">
                    {t('locationParagraph1')}
                </p>

                <p className={'p-text-1'} data-scroll="">
                    {t('locationParagraph2')}
                </p>

                <ExternalLink
                    to={
                        'https://www.google.com/maps/place/Switch+Switch/@44.8198326,20.4716844,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7be9da66d6e3:0x85883af2149b288c!8m2!3d44.8198326!4d20.4738731'
                    }
                >
                    <div data-scroll="" data-scroll-speed="-1.5" className={styles.map_cont}>
                        <Image src={mapImage} alt={'map location'} objectFit={'cover'} layout={'responsive'} />
                    </div>
                </ExternalLink>
            </Stack>
        </section>
    );
};

export default GalleryCollection;
