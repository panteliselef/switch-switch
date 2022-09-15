import React, { useContext, useEffect } from 'react';
import styles from './hero.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';

import storyHeroBg from '@assets/story_bg.png';
import { LOCOMOTIVE_CONTAINER_CLASS, SmoothScrollContext } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';
import { useSplitText } from '@modules/history/hero';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const ScrollToExperience = () => {
    const { isReady } = useContext(SmoothScrollContext);
    const width = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
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
    }, [isReady]);

    if (width <= breakpoints.laptop) return null;

    return (
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
    );
};

const Hero: React.FC = () => {
    // useSplitText('.hero-text', '.hero-trigger');
    const { isReady } = useContext(SmoothScrollContext);
    useEffect(() => {
        if (!isReady) return;
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
        }, 1200);
    }, [isReady]);

    useSplitText('.gallery-text', `#trigger`);

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
                    <Image priority={true} alt={'story bg'} src={storyHeroBg} layout={'fill'} objectFit={'cover'} />
                </div>

                <Stack className={styles.stack_cont} direction={'column'}>
                    <Stack direction={'column'} id={'trigger'} className={styles.gallery_trigger} gap={'2vw'}>
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

                    <ScrollToExperience />

                    <div className={styles.text_cont}>
                        <Stack
                            direction={'column'}
                            style={{
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
