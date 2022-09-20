import Stack from '@layouts/Stack';
import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';

function Reel() {
    const { t } = useTranslation('homepage');
    const { isReady } = useContext(SmoothScrollContext);
    const w = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#con`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: w > breakpoints.laptop ? 'top top' : 'top 50%',
                    end: '+=400vh',
                    pin: w > breakpoints.laptop,
                    scrub: w > breakpoints.laptop,
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
    }, [w, isReady]);

    return (
        <section
            id={'con'}
            style={{
                overflow: 'hidden',
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
                        {t('videoAnimationLeft')}
                    </h2>
                    <h2 id={'reel'} className={'heading-2'}>
                        {t('videoAnimationRight')}
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
                        {t('videoAnimationText')}
                    </p>
                </Stack>
            </Stack>
            <video
                id={'video'}
                style={{
                    height: 'calc(var(--vh,1vh)*100)',
                    width: '100%',
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
