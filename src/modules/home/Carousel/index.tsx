import Stack from '@layouts/Stack';
import styles from './carousel.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import React, { useContext, useEffect } from 'react';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import { breakpoints } from '@utils/breakpoints';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';

const Carousel = () => {
    const { isReady } = useContext(SmoothScrollContext);
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
            // .fromTo(
            //     document.querySelectorAll(`.${styles.t}`)[0],
            //     {
            //         opacity: 1,
            //     },
            //     {
            //         opacity: 0.8,
            //     },
            //     '<',
            // )
            // .fromTo(
            //     document.querySelectorAll(`.${styles.t}`)[1],
            //     {
            //         rotateX: '45deg',
            //     },
            //     {
            //         rotateX: '-45deg',
            //     },
            //     '<',
            // );
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
                    <p className={'p-text-1'}>Made for</p>
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
                    {/*<p*/}
                    {/*    className={'p-text-1'}*/}
                    {/*    style={{*/}
                    {/*        opacity: 0,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Designers*/}
                    {/*</p>*/}
                    <p className={classNames('p-text-1', styles.green, styles.t)}>Construction</p>
                    <p className={classNames('p-text-1', styles.blue, styles.t)}>Architects</p>
                    <p className={classNames('p-text-1', styles.red, styles.t)}>Designers</p>
                    <p className={classNames('p-text-1', styles.yellow, styles.t)}>Interior Designers</p>
                    <p className={classNames('p-text-1', styles.red, styles.t)}>You.</p>
                    <p className={classNames('p-text-1', styles.green, styles.t)}>Electricians</p>
                    <p className={classNames('p-text-1', styles.blue, styles.t)}>Consumers</p>
                    <p className={classNames('p-text-1', styles.yellow, styles.t)}>Business</p>
                    <p className={classNames('p-text-1', styles.red, styles.t)}>Artists</p>
                </Stack>
            </div>
        </section>
    );
};

export default Carousel;
