import React, { useContext, useEffect, useState } from 'react';
import styles from './timeline.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import Stack from '@layouts/Stack';

import Image from 'next/image';

import img2018_1 from '@assets/2018_1.png';
import img2018_2 from '@assets/2018_2.png';
import img2018_3 from '@assets/2018_3.png';
import img2018_4 from '@assets/2018_4.png';
import img2018_5 from '@assets/2018_5.png';

import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';
import { useLazyVideo } from '@hooks/useLazyVideo';

const Timeline: React.FC = () => {
    const { inView, ref, videoProps, videoSources } = useLazyVideo({
        sources: [
            {
                path: '/videos/2021_2.mp4',
                type: 'video/mp4',
            },
        ],
    });

    const { videoProps: videoProps2, videoSources: videoSources2 } = useLazyVideo({
        sources: [
            {
                path: '/videos/2021_1.mp4',
                type: 'video/mp4',
            },
        ],
    });

    const [activeLine, setActiveLine] = useState(0);
    const { isReady } = useContext(SmoothScrollContext);
    const w = useDebouncedWidth();
    const { t } = useTranslation('story');
    useEffect(() => {
        if (!isReady) return;
        if (w <= breakpoints.laptop) return;
        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.timeline_container}`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    anticipatePin: 1,
                    toggleActions: 'restart pause resume reverse',
                    start: 'top 0%',
                    end: '+=4000vh',
                    pin: true,
                    scrub: true,
                },
                onUpdate: () => {
                    const process = tl.progress();

                    if (process < 0.1) {
                        setActiveLine(0);
                    } else if (process < 0.2) {
                        setActiveLine(1);
                    } else if (process < 0.7) {
                        setActiveLine(2);
                    } else if (process < 0.85) {
                        setActiveLine(3);
                    } else if (process < 0.93) {
                        setActiveLine(4);
                    } else if (process < 0.97) {
                        setActiveLine(5);
                    }
                },
            });

            tl.to(
                `.${styles.timeline_page}`,
                {
                    ease: 'linear',
                    x: w > breakpoints.laptop ? `-700vw` : '-700%',
                    duration: 5,
                    stagger: 0.01,
                },
                'timeline',
            ).fromTo(
                '#lel2',
                {
                    duration: 1,
                    ease: 'linear',
                    scale: 0.5,
                },
                {
                    duration: 1,
                    ease: 'linear',
                    scale: 1,
                },
            );
        }, 1000);
    }, [isReady, w]);

    return (
        <section ref={ref}>
            <div className={classNames(styles.timeline_container)}>
                <Stack className={styles.timeline}>
                    <div className={styles.preview}>
                        {[0, 1, 2, 3, 4, 5].map((a) => (
                            <div
                                key={'timeline' + a}
                                className={classNames({
                                    [styles.line]: true,
                                    [styles.active]: activeLine === a,
                                })}
                            />
                        ))}
                    </div>
                    <Stack direction={'column'} className={styles.timeline_page}>
                        <p className={classNames(styles.timeline_year, styles.mask1)}>{t('timelinePage1Title')}</p>
                        <p className={classNames('p-text-2', styles.info)}>{t('timelinePage1Info')}</p>
                    </Stack>

                    {/*<Stack direction={'column'} className={styles.timeline_page}>*/}
                    {/*    <div className={classNames(styles.image_cont, styles.image_cont_70)}>*/}
                    {/*        <Image placeholder={'blur'} src={img2015} layout={'fill'} objectFit={'cover'} />*/}
                    {/*    </div>*/}
                    {/*    <p className={classNames(styles.timeline_year)}>{t('timelinePage2Title')}</p>*/}
                    {/*    <p className={classNames('p-text-2', styles.info)}>{t('timelinePage2Info')}</p>*/}
                    {/*</Stack>*/}

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={classNames(styles.image_cont, styles.image_cont_70)}>
                            <Image placeholder={'blur'} src={img2018_1} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <p className={classNames(styles.timeline_year)}>{t('timelinePage3Title')}</p>
                        {/*<p className={classNames('p-text-2', styles.info)}>{t('timelinePage3Info')}</p>*/}
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={styles.page_img_cont}>
                            <Image placeholder={'blur'} src={img2018_2} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={styles.page_img_cont}>
                            <Image placeholder={'blur'} src={img2018_3} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={styles.page_img_cont}>
                            <Image placeholder={'blur'} src={img2018_4} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={styles.page_img_cont}>
                            <Image placeholder={'blur'} src={img2018_5} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={classNames(styles.image_cont, styles.image_cont_70)}>
                            {inView && (
                                <video
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: '50% 50%',
                                    }}
                                    {...videoProps2}
                                >
                                    {videoSources2}
                                </video>
                            )}
                        </div>
                        <p className={classNames(styles.timeline_year)}>{t('timelinePage4Title')}</p>
                        <p className={classNames('p-text-2', styles.info)}>{t('timelinePage4Info')}</p>
                    </Stack>
                    <Stack direction={'column'} className={styles.timeline_page} id={'lel2'}>
                        <div className={styles.page_video_cont}>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                {inView && (
                                    <video
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: '50% 50%',
                                        }}
                                        {...videoProps}
                                    >
                                        {videoSources}
                                    </video>
                                )}
                            </div>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </section>
    );
};

export default Timeline;
