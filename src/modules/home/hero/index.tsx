import React, { useCallback, useEffect } from 'react';
import styles from './hero.module.scss';
import classNames from 'classnames';
import gsap from 'gsap';

const clipPaths = {
    initial: 'circle(55% at 70% 50%)',
    final: 'circle(15% at 70% 50%)',
    hover: 'circle(20% at 30% 50%)',
};

const Hero: React.FC = () => {
    useEffect(() => {
        gsap.killTweensOf(`.${styles.slide__img_wrap}`);
        gsap.set(`.${styles.slide__img_wrap}`, {
            duration: 1,
            ease: 'expo',
            clipPath: clipPaths.initial,
        });
    }, []);

    const onMouseEnterLink = useCallback(() => {
        gsap.killTweensOf(`.${styles.slide__img_wrap}`);
        gsap.to(`.${styles.slide__img_wrap}`, {
            duration: 1,
            ease: 'expo',
            clipPath: clipPaths.hover,
        });
    }, []);

    const onMouseLeaveLink = useCallback(() => {
        gsap.killTweensOf(`.${styles.slide__img_wrap}`);
        gsap.to(`.${styles.slide__img_wrap}`, {
            duration: 1,
            ease: 'expo',
            clipPath: clipPaths.initial,
        });
    }, []);

    return (
        <section data-scroll-section>
            <div className={styles.slideshow}>
                <figure className={classNames(styles.slide, styles.slide__current)}>
                    <div className={classNames(styles.slide__img_wrap)}>
                        <div className={classNames(styles.slide__img)} />
                    </div>
                    <figcaption className={classNames(styles.slide__caption)}>
                        <h2 className={styles.slides__caption_headline}>
                            <span className={classNames(styles.text_row)}>
                                <span>
                                    Far from <em>Venice</em>
                                </span>
                            </span>
                            <span className={classNames(styles.text_row)}>
                                <span>
                                    <strong>sunset</strong> in her <em>gaze</em>
                                </span>
                            </span>
                        </h2>
                        <a
                            className={styles.slides__caption_link}
                            onMouseEnter={onMouseEnterLink}
                            onMouseLeave={onMouseLeaveLink}
                        >
                            <span>Explore</span>
                        </a>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
