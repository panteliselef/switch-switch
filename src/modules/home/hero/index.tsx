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
        <section>
            <div className={styles.slideshow}>
                <figure className={classNames(styles.slide, styles.slide__current)}>
                    <div className={classNames(styles.slide__img_wrap)}>
                        <div className={classNames(styles.slide__img)} />
                    </div>
                    <figcaption className={classNames(styles.slide__caption)}>
                        <h3 className={classNames('heading-3')}>A secret address</h3>
                        <h3 className={classNames('heading-3')}>yet already</h3>
                        <h3 className={classNames('heading-3')}>
                            <span className={'font-light'}>unavoidable.</span>
                        </h3>
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
