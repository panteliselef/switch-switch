import React, { useContext, useEffect } from 'react';
import Stack from '@layouts/Stack';
import styles from './showRoom.module.scss';

import switch1 from '@assets/switch1.jpeg';
import studio from '@assets/studio.jpeg';

import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import classNames from 'classnames';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';

const Showroom: React.FC = () => {
    const { t } = useTranslation('history');
    const { isReady } = useContext(SmoothScrollContext);
    const w = useDebouncedWidth();
    useEffect(() => {
        const scrollTrigger = {
            trigger: `.studioPic`,
            scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
            start: 'top 50%',
            end: `50%`,
            scrub: 1,
        };

        if (!isReady) return;

        setTimeout(() => {
            gsap.timeline({
                scrollTrigger,
            })
                .fromTo(
                    `.${'studioPic'}`,
                    {
                        y: '-30%',
                        scale: 0.5,
                    },
                    {
                        scale: 1,
                        y: '10%',
                    },
                )
                .fromTo(
                    `.defuse`,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 0.5,
                    },
                    '<',
                );
        }, 1000);
    }, [w, isReady]);

    return (
        <>
            <section className={styles.container}>
                <Stack className={styles.p1_cont}>
                    <div data-scroll="" data-scroll-speed="1.5" className={styles.img_cont}>
                        <Image placeholder={'blur'} src={switch1} layout={'fill'} objectFit={'cover'} />
                    </div>

                    <p className={classNames(styles.plain, 'p-text-2')}>{t('paragraphWithImage')}</p>
                </Stack>
                <Stack
                    direction={'column'}
                    className={styles.our_showroom}
                    alignItems={'flex-end'}
                    justifyContent={'flex-end'}
                >
                    <h3 className={classNames([styles.h1, 'heading-3'])}> {t('showRoomHeading')}</h3>
                    <p
                        className={classNames(styles.plain, 'p-text-2')}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        {t('showRoomParagraph')}
                    </p>
                </Stack>
            </section>

            <section>
                <div
                    className={'studioPic'}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '120vh',
                    }}
                >
                    <div
                        className={'defuse'}
                        style={{
                            position: 'absolute',
                            zIndex: 2,
                            height: '100%',
                            width: '100%',
                            opacity: 1,
                            background: 'black',
                        }}
                    />
                    <Image placeholder={'blur'} alt={'studio'} src={studio} layout={'fill'} objectFit={'cover'} />
                </div>

                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    style={{
                        transform: 'translateY(-80vh)',
                    }}
                >
                    <h1 className={'heading-1'} data-scroll="" data-scroll-speed="2">
                        {t('animatedVideoHeading1')}
                    </h1>
                    <h3 className={'heading-3'}> {t('animatedVideoHeading2')}</h3>
                </Stack>

                <Stack direction={'column'} className={styles.culture_cont}>
                    <p className={'p-text-1'} data-scroll="">
                        {t('animatedVideoParagraph1')}
                    </p>

                    <p className={'p-text-1'} data-scroll="" data-scroll-speed="-1">
                        {t('animatedVideoParagraph2')}
                    </p>
                </Stack>
            </section>
        </>
    );
};

export default Showroom;
