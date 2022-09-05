import styles from './team.module.scss';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const a = [
    {
        pos: 2,
        caption: {
            year: '2011',
            text: 'Alex Tselekidis',
        },
    },
    {
        pos: 5,
        caption: {
            year: '2011',
            text: 'Dušan Nešić',
        },
    },
    {
        pos: 8,
        caption: {
            year: '2011',
            text: 'Miloš Petrović',
        },
    },
    {
        pos: 11,
        caption: {
            year: '2011',
            text: 'Nikola Jovanović ',
        },
    },
    // {
    //     pos: 14,
    //     caption: {
    //         year: '2011',
    //         text: 'Alex Tselekidis',
    //     },
    // },
    // {
    //     pos: 17,
    //     caption: {
    //         year: '2011',
    //         text: 'Dušan Nešić',
    //     },
    // },
    //
    // {
    //     pos: 20,
    //     caption: {
    //         year: '2011',
    //         text: 'Miloš Petrović',
    //     },
    // },
    // {
    //     pos: 23,
    //     caption: {
    //         year: '2011',
    //         text: 'Nikola Jovanović ',
    //     },
    // },
];

const b = [
    {
        pos: 1,
        caption: {
            year: '2011',
            text: 'Alex Tselekidis',
        },
    },
    {
        pos: 4,
        caption: {
            year: '2011',
            text: 'Dušan Nešić',
        },
    },
    {
        pos: 7,
        caption: {
            year: '2011',
            text: 'Alex Tselekidis',
        },
    },
    {
        pos: 10,
        caption: {
            year: '2011',
            text: 'Dušan Nešić',
        },
    },
    // {
    //     pos: 13,
    //     caption: {
    //         year: '2011',
    //         text: 'Cyber Blue',
    //     },
    // },
    // {
    //     pos: 16,
    //     caption: {
    //         year: '2011',
    //         text: 'Cyber Blue',
    //     },
    // },
    //
    // {
    //     pos: 19,
    //     caption: {
    //         year: '2011',
    //         text: 'Cyber Blue',
    //     },
    // },
    // {
    //     pos: 22,
    //     caption: {
    //         year: '2011',
    //         text: 'Cyber Blue',
    //     },
    // },
];

const c = [
    {
        pos: 3,
        caption: {
            year: '2011',
            text: 'Nikola Jovanović ',
        },
    },
    {
        pos: 6,
        caption: {
            year: '2011',
            text: 'Miloš Petrović',
        },
    },
    {
        pos: 9,
        caption: {
            year: '2011',
            text: 'Nikola Jovanović ',
        },
    },
    {
        pos: 12,
        caption: {
            year: '2011',
            text: 'Miloš Petrović',
        },
    },
];

const ImageWrapper: React.FC<{ pos: number }> = ({ pos }) => {
    const outer = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => {
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
    const w = useDebouncedWidth();
    useEffect(() => {
        const oddColumns = [...document.querySelectorAll(`.${styles.column}`)].filter((_, index) => index != 1);
        const evenColumns = [...document.querySelectorAll(`.${styles.column}`)].filter((_, index) => index === 1);

        // const gridItems = [...document.querySelectorAll(`.${styles.column__item}`)];
        // console.log(evenColumns);

        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.columns}`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    scrub: 1,
                    start: 'top 100%',
                },
            })
                .to(oddColumns, {
                    yPercent: w > breakpoints.laptop ? 100 : 15,
                })
                .to(
                    evenColumns,
                    {
                        yPercent: w > breakpoints.laptop ? -100 : -10,
                    },
                    '<',
                );
        }, 1000);
    }, [w]);

    return (
        <section
            id={'before-footer'}
            style={{
                height: '100vh',
                background: 'var(--text-color)',
                marginTop: '-2px',
                overflow: 'hidden',
            }}
        >
            <h2 className={classNames(styles.heading, styles.heading__up)}>OUR TEAM</h2>
            <h2 className={classNames(styles.heading, styles.heading__down)}>OUR TEAM</h2>

            <div className={styles.columns} data-scroll-container>
                <div className={classNames(styles.column_wrap, styles.column_wrap_height)}>
                    <div className={styles.column}>
                        {a.map(({ pos, caption: { year, text } }) => (
                            <figure key={pos} className={styles.column__item}>
                                <ImageWrapper pos={pos} />
                                <figcaption className={styles.column__item_caption}>
                                    <span className={styles.name}>{text}</span>
                                    <span className={styles.job}>{year}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <div className={classNames(styles.column_wrap)}>
                    <div className={styles.column}>
                        {b.map(({ pos, caption: { year, text } }) => (
                            <figure key={pos} className={styles.column__item}>
                                <ImageWrapper pos={pos} />
                                <figcaption className={styles.column__item_caption}>
                                    <span className={styles.name}>{text}</span>
                                    <span className={styles.job}>{year}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <div className={classNames(styles.column_wrap, styles.column_wrap_height)}>
                    <div className={styles.column}>
                        {c.map(({ pos, caption: { year, text } }) => (
                            <figure key={pos} className={styles.column__item}>
                                <ImageWrapper pos={pos} />
                                <figcaption className={styles.column__item_caption}>
                                    <span className={styles.name}>{text}</span>
                                    <span className={styles.job}>{year}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
