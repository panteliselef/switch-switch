import React, { useContext, useEffect } from 'react';
import styles from './light.module.scss';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import Stack from '@layouts/Stack';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

const Light: React.FC = () => {
    const { isReady } = useContext(SmoothScrollContext);
    const { t } = useTranslation('story');
    const w = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.door}`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    anticipatePin: 1,
                    toggleActions: 'restart pause resume reverse',
                    start: w > breakpoints.laptop ? 'top -30%' : 'top 50%',
                    end: '+=400vh',
                    // pin: true,
                    scrub: true,
                },
            })
                .to(
                    `.${styles.door}`,
                    {
                        ease: 'power2.in',
                        clipPath:
                            w > breakpoints.laptop
                                ? 'inset(15vw 0vw 0vw round 0vw 0vw 0 0)'
                                : 'inset(0px 0px 0px round 0px 0px 0 0)',
                        // clipPath: 'inset(4rem 20% round 50%)',
                        // clipPath: 'inset(15vw 0vw 0vw round 0vw 0vw 0 0)',
                    },
                    'timeline',
                )
                .to(
                    `.${styles.door_knob}`,
                    {
                        ease: 'power2.in',
                        clipPath: w > breakpoints.laptop ? 'circle(0px at 52vw 70vw)' : 'circle(0px at 220px 280px)',
                        // clipPath: 'inset(4rem 20% round 50%)',
                        // clipPath: 'inset(15vw 0vw 0vw round 0vw 0vw 0 0)',
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
    }, [isReady, w]);
    return (
        <>
            <section
                style={{
                    position: 'relative',
                }}
            >
                <div className={styles.door}></div>
                <div className={styles.door_knob}></div>
                <Stack
                    direction={'column'}
                    className={styles.cont}
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
                            className={classNames('p-text-1 text-center', styles.p)}
                            style={{
                                mixBlendMode: 'difference',
                            }}
                        >
                            {t('In order for us to bing')}
                        </p>

                        <p
                            className={'heading-3'}
                            style={{
                                mixBlendMode: 'difference',
                            }}
                        >
                            {t('Light')}
                        </p>
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
                            className={classNames('p-text-1 text-center', styles.p)}
                            style={{
                                color: 'black',
                            }}
                        >
                            {t('hiddenBlackText')}
                        </p>

                        <Stack
                            direction={'column'}
                            data-scroll={''}
                            data-scroll-speed={'1'}
                            className={styles.cont_1}
                            style={{
                                mixBlendMode: 'difference',
                                paddingBottom: '10vw',
                                position: 'relative',
                            }}
                        >
                            <p
                                id={'team'}
                                className={classNames('heading-3', styles.cont_2)}
                                style={{
                                    mixBlendMode: 'difference',
                                }}
                            >
                                {t('enthusiastsPart1')}
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
                                {t('enthusiastsPart2')}
                            </p>
                            <p
                                className={classNames('heading-3', styles.cont_2)}
                                style={{
                                    mixBlendMode: 'difference',
                                }}
                            >
                                {t('enthusiastsPart3')}
                            </p>
                        </Stack>
                    </Stack>
                </Stack>
            </section>
        </>
    );
};

export default Light;
