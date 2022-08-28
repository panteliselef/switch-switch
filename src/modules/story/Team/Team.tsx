import styles from './team.module.scss';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
// import useWindowDimensions from '@hooks/useWindowDimensions';

// const adjustedBoundingRect = (el: HTMLElement) => {
//     let ta;
//     const rect = el.getBoundingClientRect();
//     const style = getComputedStyle(el);
//     const tx = style.transform;
//
//     if (tx) {
//         let sx, sy, dx, dy;
//         if (tx.startsWith('matrix3d(')) {
//             ta = tx.slice(9, -1).split(/, /);
//             sx = +ta[0];
//             sy = +ta[5];
//             dx = +ta[12];
//             dy = +ta[13];
//         } else if (tx.startsWith('matrix(')) {
//             ta = tx.slice(7, -1).split(/, /);
//             sx = +ta[0];
//             sy = +ta[3];
//             dx = +ta[4];
//             dy = +ta[5];
//         } else {
//             return rect;
//         }
//
//         const to = style.transformOrigin;
//         const x = rect.x - dx - (1 - sx) * parseFloat(to);
//         const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1));
//         const w = sx ? rect.width / sx : el.offsetWidth;
//         const h = sy ? rect.height / sy : el.offsetHeight;
//         return {
//             x: x,
//             y: y,
//             width: w,
//             height: h,
//             top: y,
//             right: x + w,
//             bottom: y + h,
//             left: x,
//         };
//     } else {
//         return rect;
//     }
// };

/**
 * Calculates the scale and translation values to apply to the images when we click on it (scale up and center it).
 * Also used to recalculate those values on resize.
 * @return {JSON} the translation and scale values
 */
// const useCalcTransformImage = (el: HTMLElement | null) => {
//     const { width, height } = useWindowDimensions();
//     if (el === null) return;
//     const imgrect = adjustedBoundingRect(el);
//     return {
//         scale: (height * 0.7) / imgrect.height,
//         x: width * 0.5 - (imgrect.left + imgrect.width / 2),
//         y: height * 0.5 - (imgrect.top + imgrect.height / 2),
//     };
// };

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
    // const imageTransform = useCalcTransformImage(outer.current);

    // const showContent = () => {
    //     // All the other (that are inside the viewport)
    //     const viewportGridItems = [...document.querySelectorAll(`.${styles.column__item}`)];
    //     // Remaining (not in the viewport)
    //     // image outer elements
    //     const viewportGridItemsImgOuter = viewportGridItems.map((gridItem) => gridItem.children[0]);
    //
    //     console.log(viewportGridItemsImgOuter);
    //
    //     window.locomotive.stop();
    //
    //     gsap.killTweensOf([outer, inner]);
    //     const timeline = gsap
    //         .timeline({
    //             defaults: {
    //                 duration: 1.4,
    //                 ease: 'expo.inOut',
    //             },
    //             // overflow hidden
    //             onStart: () => document.body.classList.add('oh'),
    //             onComplete: () => {
    //                 // Hide all other grid items from the grid.
    //                 // gsap.set(this.remainingGridItems, { opacity: 0 });
    //                 // this.isAnimating = false;
    //             },
    //         })
    //         .addLabel('start', 0)
    //         // .set(
    //         //     [gridItem.DOM.el, gridItem.DOM.el.parentNode.parentNode],
    //         //     {
    //         //         zIndex: 100,
    //         //     },
    //         //     'start',
    //         // )
    //         .set(
    //             [outer.current, inner.current, ...viewportGridItemsImgOuter],
    //             {
    //                 willChange: 'transform, opacity',
    //             },
    //             'start',
    //         )
    //         .to(
    //             outer.current,
    //             {
    //                 scale: imageTransform?.scale,
    //                 x: imageTransform?.x,
    //                 y: imageTransform?.y,
    //                 onComplete: () => gsap.set(outer.current, { willChange: '' }),
    //             },
    //             'start',
    //         )
    //         .to(
    //             inner.current,
    //             {
    //                 scale: 1,
    //                 onComplete: () => gsap.set(inner.current, { willChange: '' }),
    //             },
    //             'start',
    //         );
    // };

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

        // const gridItems = [...document.querySelectorAll(`.${styles.column__item}`)];
        // console.log(evenColumns);

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
                            <figure key={pos} className={styles.column__item}>
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
                            <figure key={pos} className={styles.column__item}>
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
                            <figure key={pos} className={styles.column__item}>
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
