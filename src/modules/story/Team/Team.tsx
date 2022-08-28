import styles from './team.module.scss';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';

const a = [
    {
        pos: 2,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 5,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 8,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 11,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 14,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 17,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },

    {
        pos: 20,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 23,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
];

const b = [
    {
        pos: 1,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 4,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 7,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 10,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 13,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 16,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },

    {
        pos: 19,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 22,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
];

const c = [
    {
        pos: 3,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 6,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 9,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 12,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 15,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 18,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },

    {
        pos: 21,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
    {
        pos: 24,
        caption: {
            year: '2011',
            text: 'Cyber Blue',
        },
    },
];

const ImageWrapper: React.FC<{ pos: number }> = ({ pos }) => {
    const outer = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => {
        // if (!this.isGridView || this.isAnimating) {
        //     return false;
        // }
        gsap.killTweensOf([outer.current, inner.current]);
        gsap.timeline({
            defaults: { duration: 1.4, ease: 'expo' },
            onComplete: () => gsap.set([outer.current, inner.current], { willChange: '' }),
        })
            .addLabel('start', 0)
            .set([outer.current, inner.current], { willChange: 'transform' }, 'start')
            .to(outer.current, { scaleY: 0.95, scaleX: 0.88 }, 'start')
            .to(inner.current, { ease: 'power4', scaleY: 1.2, scaleX: 1.7 }, 'start');
    };

    const onMouseLeave = () => {
        gsap.killTweensOf([outer.current, inner.current]);
        gsap.timeline({
            defaults: { duration: 1.4, ease: 'expo' },
            onComplete: () => gsap.set([outer.current, inner.current], { willChange: '' }),
        })
            .addLabel('start', 0)
            .set([outer.current, inner.current], { willChange: 'transform' }, 'start')
            .to([outer.current, inner.current], { scale: 1 }, 0);
    };

    return (
        <div
            className={styles.column__item_imgwrap}
            data-pos={pos}
            ref={outer}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            <div className={classNames(styles.column__item_img, styles.alex_pic)} ref={inner}></div>
        </div>
    );
};

export default function Team() {
    useEffect(() => {
        const oddColumns = [...document.querySelectorAll(`.${styles.column}`)].filter((_, index) => index != 1);
        const evenColumns = [...document.querySelectorAll(`.${styles.column}`)].filter((_, index) => index === 1);
        console.log(evenColumns);

        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.columns}`,
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    scrub: 1,
                    start: 'top 100%',
                },
            })
                .to(oddColumns, {
                    yPercent: 100,
                })
                .to(
                    evenColumns,
                    {
                        yPercent: -100,
                    },
                    '<',
                );
        }, 1000);
    }, []);

    return (
        <section
            style={{
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <h2 className={classNames(styles.heading, styles.heading__up)}>Jack Ruthless</h2>
            <h2 className={classNames(styles.heading, styles.heading__down)}>Jack Ruthless</h2>

            <div className={styles.columns} data-scroll-container>
                <div className={classNames(styles.column_wrap, styles.column_wrap_height)}>
                    <div className={styles.column}>
                        {a.map(({ pos, caption: { year, text } }) => (
                            <figure className={styles.column__item}>
                                <ImageWrapper pos={pos} />
                                <figcaption className={styles.column__item_caption}>
                                    <span>{text}</span>
                                    <span>{year}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <div className={classNames(styles.column_wrap)}>
                    <div className={styles.column}>
                        {b.map(({ pos, caption: { year, text } }) => (
                            <figure className={styles.column__item}>
                                <ImageWrapper pos={pos} />
                                <figcaption className={styles.column__item_caption}>
                                    <span>{text}</span>
                                    <span>{year}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <div className={classNames(styles.column_wrap, styles.column_wrap_height)}>
                    <div className={styles.column}>
                        {c.map(({ pos, caption: { year, text } }) => (
                            <figure className={styles.column__item}>
                                <ImageWrapper pos={pos} />
                                <figcaption className={styles.column__item_caption}>
                                    <span>{text}</span>
                                    <span>{year}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
