import React, { useEffect, useState } from 'react';
import styles from './timeline.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';

import Image from 'next/image';

import img2015 from '@assets/2015.png';
import img2018_1 from '@assets/2018_1.png';
import img2021_1 from '@assets/2021_1.png';
import img2021_2 from '@assets/2021_2.png';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const Timeline: React.FC = () => {
    const [activeLine, setActiveLine] = useState(0);
    const w = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.timeline_container}`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    anticipatePin: 1,
                    toggleActions: 'restart pause resume reverse',
                    start: 'top 0%',
                    end: '+=3000vh',
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
                    x: w > breakpoints.laptop ? `-500vw` : '-500%',
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
    }, [w]);

    return (
        <section>
            <div className={classNames(styles.timeline_container)}>
                <Stack direction={'row'} className={styles.timeline}>
                    <Stack direction={'column'} className={styles.preview}>
                        {[0, 1, 2, 3, 4, 5].map((a) => (
                            <div
                                key={'timeline' + a}
                                className={classNames({
                                    [styles.line]: true,
                                    [styles.active]: activeLine === a,
                                })}
                            />
                        ))}
                    </Stack>
                    <Stack direction={'column'} className={styles.timeline_page}>
                        <p className={classNames(styles.timeline_year, styles.mask1)}>2008</p>

                        <p className={classNames('p-text-2', styles.info)}>
                            We had a grand vision that we really want to come to life. So we started making it a
                            reality. Transforming our garage into a space where we could work and express our ideas.{' '}
                        </p>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={classNames(styles.image_cont, styles.image_cont_70)}>
                            <Image src={img2015} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <p className={classNames(styles.timeline_year)}>2015</p>
                        <p className={classNames('p-text-2', styles.info)}>
                            We had a grand vision that we really want to come to life. So we started making it a
                            reality. Transforming our garage into a space where we could work and express our ideas.{' '}
                        </p>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={classNames(styles.image_cont, styles.image_cont_70)}>
                            <Image src={img2018_1} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <p className={classNames(styles.timeline_year)}>2018</p>
                        <p className={classNames('p-text-2', styles.info)}>
                            We had a grand vision that we really want to come to life. So we started making it a
                            reality. Transforming our garage into a space where we could work and express our ideas.{' '}
                        </p>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div
                            style={{
                                width: 'calc(100% - 3vw)',
                                height: '100%',
                                top: 0,
                                position: 'absolute',
                                overflow: 'hidden',
                            }}
                        >
                            <Image src={img2018_1} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </Stack>

                    <Stack direction={'column'} className={styles.timeline_page}>
                        <div className={classNames(styles.image_cont, styles.image_cont_70)}>
                            <Image src={img2021_1} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <p className={classNames(styles.timeline_year)}>2021</p>
                        <p className={classNames('p-text-2', styles.info)}>
                            We had a grand vision that we really want to come to life. So we started making it a
                            reality. Transforming our garage into a space where we could work and express our ideas.{' '}
                        </p>
                    </Stack>
                    <Stack direction={'column'} className={styles.timeline_page} id={'lel2'}>
                        <div
                            style={{
                                width: 'calc(100% - 9vw)',
                                height: '100%',
                                top: 0,
                                position: 'absolute',
                                overflow: 'hidden',
                            }}
                        >
                            <Image src={img2021_2} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </Stack>
                </Stack>
            </div>
        </section>
    );
};

export default Timeline;
