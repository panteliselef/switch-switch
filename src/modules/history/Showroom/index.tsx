import React, { useEffect } from 'react';
import Stack from '@layouts/Stack';
import styles from './showRoom.module.scss';

import switch1 from '@assets/switch1.png';
import studio from '@assets/studio.png';

import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import classNames from 'classnames';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const Showroom: React.FC = () => {
    const w = useDebouncedWidth();
    useEffect(() => {
        const scrollTrigger = {
            trigger: `.studioPic`,
            scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
            start: 'top 50%',
            end: `50%`,
            scrub: 1,
        };

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
    }, [w]);

    return (
        <>
            <section className={styles.container}>
                <Stack className={styles.p1_cont}>
                    <div data-scroll="" data-scroll-speed="1.5" className={styles.img_cont}>
                        <Image src={switch1} layout={'fill'} objectFit={'cover'} />
                    </div>

                    <p className={classNames(styles.plain, 'p-text-2')}>
                        Switch Switch wishes to share with you its taste for art. Resonate with masterful works, kinetic
                        installations or high‑tech creations. We offer you to take a step into another dimension,
                        impalpable.
                    </p>
                </Stack>
                <Stack
                    direction={'column'}
                    className={styles.our_showroom}
                    alignItems={'flex-end'}
                    justifyContent={'flex-end'}
                >
                    <h3 className={classNames([styles.h1, 'heading-3'])}>Our showroom</h3>
                    <p
                        className={classNames(styles.plain, 'p-text-2')}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        Designed as an immersive experience and eye opening, our showroom promotes a meeting with
                        oneself in the comfort of a poetic and artistic space, which inspires and enriches ideas.
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
                    <Image alt={'studio'} src={studio} layout={'fill'} objectFit={'cover'} />
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
                        Quite simply
                    </h1>
                    <h3 className={'heading-3'}>Breathtaking</h3>
                </Stack>

                <Stack direction={'column'} className={styles.culture_cont}>
                    <p className={'p-text-1'} data-scroll="">
                        For a holistic <br />
                        culture
                    </p>

                    <p className={'p-text-1'} data-scroll="" data-scroll-speed="-1">
                        Our key component is a personal designated touch. You cannot take care of someone with a single
                        discipline. We defend the idea that every approach is generalized and illuminate the paths. Our
                        approach is global and does we do not hesitate to adapt to stictly your needs.
                    </p>
                </Stack>
            </section>
        </>
    );
};

export default Showroom;
