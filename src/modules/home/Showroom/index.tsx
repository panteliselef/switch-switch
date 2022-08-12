import React, { useEffect } from 'react';
import Stack from '@layouts/Stack';
import styles from './showRoom.module.scss';

import switch1 from '@assets/switch1.png';
import studio from '@assets/studio.png';

import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';

const scrollTrigger = {
    trigger: `.studioPic`,
    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
    start: 'top 50%',
    end: `50%`,
    scrub: 1,
};

const Showroom: React.FC = () => {
    useEffect(() => {
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
                        y: 0,
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
    }, []);

    return (
        <>
            <section className={styles.container}>
                <Stack direction={'row'} gap={100}>
                    <div
                        data-scroll=""
                        data-scroll-speed="1.5"
                        style={{
                            width: 400,
                            height: 600,
                        }}
                    >
                        <Image src={switch1} layout={'responsive'} objectFit={'cover'} />
                    </div>

                    <p className={styles.plain}>
                        Switch Switch wishes to share with you its taste for art. Resonate with masterful works, kinetic
                        installations or high‑tech creations. We offer you to take a step into another dimension,
                        impalpable.
                    </p>
                </Stack>
                <Stack direction={'column'} gap={50} alignItems={'flex-end'} justifyContent={'flex-end'}>
                    <h1 className={styles.h1}>Our showroom</h1>
                    <p
                        className={styles.plain}
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
                        height: '100vh',
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
                    gap={80}
                    style={{
                        width: '60.55556vw',
                        transform: 'translateY(-40vh)',
                        margin: '0 auto auto auto',
                    }}
                >
                    <p className={'p-text-1'} data-scroll="" data-scroll-speed="1">
                        For a holistic <br />
                        culture
                    </p>

                    <p className={'p-text-1'} data-scroll="" data-scroll-speed="1">
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
