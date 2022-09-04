import Stack from '@layouts/Stack';
import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

function Reel() {
    const w = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#con`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: 'top top',
                    end: '+=400vh',
                    pin: true,
                    scrub: true,
                },
            })
                .fromTo(
                    `#video`,
                    {
                        scale: 0.4,
                    },
                    {
                        ease: 'linear',
                        scale: 1,
                    },
                    'timeline',
                )
                .fromTo(
                    `#play`,
                    {
                        ease: 'linear',
                        x: '-20vw',
                    },
                    {
                        x: 0,
                    },
                    '<',
                )
                .fromTo(
                    `#reel`,
                    {
                        ease: 'linear',
                        x: '20vw',
                    },
                    {
                        x: 0,
                    },
                    '<',
                );
        }, 1000);
    }, [w]);

    return (
        <section
            id={'con'}
            style={{
                height: '100vh',
                position: 'relative',
            }}
        >
            <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                }}
            >
                <Stack direction={'row'}>
                    <h2 id={'play'} className={'heading-2'}>
                        Play
                    </h2>
                    <h2 id={'reel'} className={'heading-2'}>
                        Reel
                    </h2>
                </Stack>

                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                    }}
                >
                    <p
                        className={'p-text-3 text-center'}
                        style={{
                            paddingBottom: '7vw',
                            width: '45vw',
                        }}
                    >
                        Designed as an immersive experience and eye opening, our showroom promotes a meeting with
                        oneself in the comfort of a poetic and artistic space, which inspires and enriches ideas.
                    </p>
                </Stack>
            </Stack>
            <video
                id={'video'}
                style={{
                    height: 'calc(var(--vh,1vh)*100)',
                    width: '100vw',
                    opacity: '0.3',
                    objectFit: 'cover',
                }}
                loop={true}
                autoPlay={true}
                muted={true}
            >
                <source src={`/videos/reel.mp4`} type="video/mp4" />
            </video>
        </section>
    );
}

export default Reel;
