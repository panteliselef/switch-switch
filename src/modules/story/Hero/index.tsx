import React, { useEffect } from 'react';
import styles from './hero.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';

import storyHeroBg from '@assets/story_bg.png';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';
import { useSplitText } from '@modules/home/hero';

const Hero: React.FC = () => {
    // useSplitText('.hero-text', '.hero-trigger');
    useEffect(() => {
        setTimeout(() => {
            gsap.to('.story_bg', {
                scrollTrigger: {
                    trigger: `.${styles.story_hero_container}`,
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    scrub: 1,
                    start: 'top 0%',
                },
                ease: 'linear',
                yPercent: 15,
            });

            gsap.to('.scroll_experience_text', {
                scrollTrigger: {
                    trigger: '.scroll_experience_text',
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    scrub: 1,
                    start: 'top 80%',
                },
                y: 100,
                opacity: 0,
            });
        }, 1200);
    }, []);

    useSplitText('.gallery-text', '.gallery-trigger');

    // const onMouseEnterLink = useCallback(() => {
    //     gsap.killTweensOf(`.${styles.slide__img_wrap}`);
    //     gsap.to(`.${styles.slide__img_wrap}`, {
    //         duration: 1,
    //         ease: 'expo',
    //         clipPath: clipPaths.hover,
    //     });
    // }, []);
    //
    // const onMouseLeaveLink = useCallback(() => {
    //     gsap.killTweensOf(`.${styles.slide__img_wrap}`);
    //     gsap.to(`.${styles.slide__img_wrap}`, {
    //         duration: 1,
    //         ease: 'expo',
    //         clipPath: clipPaths.initial,
    //     });
    // }, []);

    return (
        <section>
            <div className={styles.story_hero_container}>
                <div
                    className={'story_bg'}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image alt={'story bg'} src={storyHeroBg} layout={'fill'} objectFit={'cover'} />
                </div>

                <Stack
                    direction={'column'}
                    style={{
                        position: 'relative',
                        margin: '0 8.33333vw',
                    }}
                >
                    {/*<p className={classNames('heading-2')}>Bulding Immersful Experiences</p>*/}
                    <Stack
                        direction={'column'}
                        style={{
                            paddingTop: '14vw',
                        }}
                        className={'gallery-trigger'}
                        gap={'2vw'}
                    >
                        <h3 className={'heading-3 split-line gallery-text'}>
                            <div>Bulding</div>
                        </h3>

                        <h3 className={'heading-3 split-line gallery-text'}>
                            <div>Immersful</div>
                        </h3>

                        <h3 className={'heading-3 split-line gallery-text'}>
                            <div>Experiences</div>
                        </h3>
                    </Stack>

                    <Stack direction={'row'} justifyContent={'flex-end'} gap={'2vw'}>
                        <p
                            style={{
                                paddingTop: '6vw',
                            }}
                            className={classNames('p-text-3', 'scroll_experience_text')}
                        >
                            Scroll to experience
                        </p>
                    </Stack>

                    <div
                        style={{
                            width: '40vw',
                            marginLeft: 'auto',
                        }}
                    >
                        <Stack
                            direction={'column'}
                            style={{
                                paddingTop: '14vw',
                                right: 0,
                            }}
                            gap={'2vw'}
                        >
                            <p className={classNames('p-text-3')}>Design & Architecture Office</p>
                            <p className={classNames('p-text-3')}>
                                We dreamed of an architectural house, with its well-designed furniture and its spaces
                                that mark the spirit. We made it a reality, which celebrates inspiration and
                                independence of choice.
                            </p>

                            <p className={classNames('p-text-3')}>
                                Designed as an immersive experience and eye opening, our showroom promotes a meeting
                                with oneself in the comfort of a poetic and artistic space, which inspires and enriches
                                ideas.
                            </p>

                            <p className={classNames('p-text-3')}>Meet the founders</p>
                        </Stack>
                    </div>
                </Stack>
            </div>
        </section>
    );
};

export default Hero;
