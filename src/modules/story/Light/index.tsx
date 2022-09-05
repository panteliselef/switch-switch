import React, { useEffect } from 'react';
import styles from './light.module.scss';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const Light: React.FC = () => {
    const w = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.door}`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    anticipatePin: 1,
                    toggleActions: 'restart pause resume reverse',
                    start: w > breakpoints.laptop ? 'top -30%' : 'top 0',
                    end: '+=400vh',
                    // pin: true,
                    scrub: true,
                },
            }).to(
                `.${styles.door}`,
                {
                    ease: 'power2.in',
                    // clipPath: 'inset(4rem 20% round 50%)',
                    clipPath: 'inset(15vw 0vw 0vw round 0vw 0vw 0 0)',
                },
                'timeline',
            );

            gsap.timeline({
                scrollTrigger: {
                    trigger: `#team`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: w > breakpoints.laptop ? 'top 50%' : 'top 50%',
                },
            })
                .to('#team', {
                    opacity: 0,
                    y: -200,
                })
                .to(
                    '#cheers',
                    {
                        opacity: 1,
                        y: 0,
                    },
                    '<',
                );
        }, 1000);
    }, [w]);
    return (
        <>
            <section
                style={{
                    position: 'relative',
                }}
            >
                <div className={styles.door}></div>
                <Stack
                    direction={'column'}
                    gap={'40vw'}
                    style={{
                        position: 'relative',
                    }}
                >
                    <Stack
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'2vw'}
                        style={{
                            width: '100%',
                            top: '0',
                            paddingTop: '10vw',
                        }}
                    >
                        <p
                            className={'p-text-1'}
                            style={{
                                textAlign: 'center',
                                maxWidth: '20vw',
                                mixBlendMode: 'difference',
                            }}
                        >
                            In order for us to bing
                        </p>

                        <p className={'heading-3'}>Light</p>
                    </Stack>
                    <Stack
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'20vw'}
                        style={{
                            width: '100%',
                            bottom: '0',
                        }}
                    >
                        <p
                            data-scroll={''}
                            data-scroll-speed={'2'}
                            className={'p-text-1'}
                            style={{
                                textAlign: 'center',
                                maxWidth: '20vw',
                                color: 'black',
                            }}
                        >
                            To the wall of your home
                        </p>

                        <Stack
                            direction={'column'}
                            data-scroll={''}
                            data-scroll-speed={'1'}
                            style={{
                                width: '60vw',
                                mixBlendMode: 'difference',
                                paddingBottom: '10vw',
                                position: 'relative',
                            }}
                        >
                            <p
                                id={'team'}
                                className={'heading-3'}
                                style={{
                                    mixBlendMode: 'difference',
                                    maxWidth: '50vw',
                                }}
                            >
                                This is the team of
                            </p>
                            <p
                                id={'cheers'}
                                className={'heading-3'}
                                style={{
                                    mixBlendMode: 'difference',
                                    position: 'absolute',
                                    top: '0',
                                    opacity: '0',
                                    transform: 'translateY(200px)',
                                }}
                            >
                                Cheers from the team of
                            </p>
                            <p
                                className={'heading-3'}
                                style={{
                                    mixBlendMode: 'difference',
                                    maxWidth: '50vw',
                                }}
                            >
                                enthusiasts
                            </p>
                        </Stack>
                    </Stack>
                </Stack>
            </section>
        </>
    );
};

export default Light;
