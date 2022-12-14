import React, { useContext, useEffect } from 'react';
import styles from './hero.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';

import historyHeroBg from '@assets/hero-history.png';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import { breakpoints } from '@utils/breakpoints';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import useTranslation from 'next-translate/useTranslation';

const clipPaths = {
    initial: 'circle(55% at 70% 50%)',
    final: 'circle(15% at 70% 50%)',
    hover: 'circle(20% at 30% 50%)',
};

export function useSplitText(classElements: string, classTrigger: string) {
    const { isReady } = useContext(SmoothScrollContext);
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            const elements = Array.from(document.querySelectorAll(classElements)).map((a) => a.children[0]);

            if (!document.querySelector(classTrigger)) return;

            elements.forEach((e) => {
                if (e === null) return;
                // Set up the anim
                gsap.timeline({
                    scrollTrigger: {
                        trigger: document.querySelector(classTrigger) ?? '',
                        scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                        // toggleActions: "restart pause resume reverse",
                        // toggleActions: 'play none none none',
                        start: 'top 80%',
                    },
                }).fromTo(
                    elements,
                    {
                        yPercent: 120,
                        rotateZ: 10,
                        opacity: 0,
                    },
                    {
                        duration: 0.6,
                        ease: 'circ.out',
                        yPercent: 0,
                        stagger: 0.3,
                        rotateZ: 0,
                        opacity: 1,
                    },
                );
            });
        }, 1000);
    }, [isReady, classElements, classTrigger]);
}

const Hero: React.FC = () => {
    const { t } = useTranslation('history');
    const { isReady } = useContext(SmoothScrollContext);
    const w = useDebouncedWidth();
    useEffect(() => {
        gsap.killTweensOf(`.${styles.slide__img_wrap}`);
        gsap.set(`.${styles.slide__img_wrap}`, {
            duration: 1,
            ease: 'expo',
            clipPath: clipPaths.initial,
        });

        if (!isReady) return;

        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#historyHero`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: 'top 0',
                    end: '+=300vh',
                    scrub: true,
                },
            }).to(`.${styles.slide__img_wrap}`, {
                ease: 'linear',
                clipPath: clipPaths.hover,
            });
        }, 1000);
    }, [w, isReady]);

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
        <section id={'historyHero'}>
            <div className={styles.slideshow}>
                <figure className={classNames(styles.slide, styles.slide__current)}>
                    <div className={classNames(styles.slide__img_wrap)}>
                        <Image
                            loading={'eager'}
                            src={historyHeroBg}
                            alt={'office'}
                            placeholder={'blur'}
                            objectFit={'cover'}
                            objectPosition={'bottom'}
                            layout={'fill'}
                        />
                    </div>
                    <figcaption className={classNames(styles.slide__caption, 'hero-trigger')}>
                        <h3
                            className={classNames('heading-3', 'split-line', 'hero-text')}
                            style={{
                                position: 'relative',
                            }}
                        >
                            <div>{t('heroTitleLine1')}</div>
                        </h3>
                        <h3 className={classNames('heading-3', 'split-line', 'hero-text')}>
                            <div>{t('heroTitleLine2')}</div>
                        </h3>
                        <h3 className={classNames('heading-3', 'split-line', 'hero-text')}>
                            <div className={'font-light'}>{t('heroTitleLine3')}</div>
                        </h3>
                        <a
                            className={styles.slides__caption_link}
                            // onMouseEnter={onMouseEnterLink}
                            // onMouseLeave={onMouseLeaveLink}
                        >
                            <span>{t('heroSubtitle')}</span>
                        </a>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
