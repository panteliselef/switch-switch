import styles from './team.module.scss';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import alexPic from '@assets/team/alex.png';
import dusan from '@assets/team/dusan.png';
import milos from '@assets/team/milos.png';
import nikola from '@assets/team/nikola.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const a = [
    {
        pos: 2,
        url: '/team/alex',
        caption: {
            year: '2011',
            text: 'Alex Tselekidis',
        },
        img: alexPic,
    },
    {
        pos: 5,
        url: '/team/dusan',
        caption: {
            year: '2011',
            text: 'Dušan Nešić',
        },
        img: dusan,
    },
    {
        pos: 8,
        url: '/team/milos',
        caption: {
            year: '2011',
            text: 'Miloš Petrović',
        },
        img: milos,
    },
    {
        pos: 11,
        url: '/team/nikola',
        caption: {
            year: '2011',
            text: 'Nikola Jovanović ',
        },
        img: nikola,
    },
];

const b = [
    {
        pos: 1,
        url: '/team/alex',
        caption: {
            year: '2011',
            text: 'Alex Tselekidis',
        },
        img: alexPic,
    },
    {
        pos: 4,
        url: '/team/dusan',
        caption: {
            year: '2011',
            text: 'Dušan Nešić',
        },
        img: dusan,
    },
    {
        pos: 7,
        url: '/team/alex',
        caption: {
            year: '2011',
            text: 'Alex Tselekidis',
        },
        img: alexPic,
    },
    {
        pos: 10,
        url: '/team/dusan',
        caption: {
            year: '2011',
            text: 'Dušan Nešić',
        },
        img: dusan,
    },
];

const c = [
    {
        pos: 3,
        url: '/team/nikola',
        caption: {
            year: '2011',
            text: 'Nikola Jovanović ',
        },
        img: nikola,
    },
    {
        pos: 6,
        url: '/team/milos',
        caption: {
            year: '2011',
            text: 'Miloš Petrović',
        },
        img: milos,
    },
    {
        pos: 9,
        url: '/team/nikola',
        caption: {
            year: '2011',
            text: 'Nikola Jovanović ',
        },
        img: nikola,
    },
    {
        pos: 12,
        url: '/team/milos',
        caption: {
            year: '2011',
            text: 'Miloš Petrović',
        },
        img: milos,
    },
];

const ImageWrapper: React.FC<{ pos: number; img: StaticImageData }> = ({ pos, img }) => {
    const outer = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLDivElement>(null);

    const onComplete = () => {
        if (outer.current && inner.current) {
            gsap.set([outer.current, inner.current], { willChange: '' });
        }
    };

    const onMouseEnter = () => {
        gsap.killTweensOf([outer.current, inner.current]);
        gsap.timeline({
            defaults: { duration: 1.4, ease: 'expo' },
            onComplete,
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
            onComplete,
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
            <div className={classNames(styles.column__item_img, styles.alex_pic)} ref={inner}>
                <Image alt={'team member profile picture'} src={img} layout={'fill'} objectFit={'cover'} />
            </div>
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
                    trigger: `#before-footer`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    scrub: 1,
                    pin: true,
                    start: 'top 0%',
                    end: '+=300vh',
                },
            })
                .to(oddColumns, {
                    yPercent: w > breakpoints.laptop ? 70 : 15,
                })
                .to(
                    evenColumns,
                    {
                        yPercent: w > breakpoints.laptop ? -70 : -10,
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
                        {a.map(({ pos, url, img, caption: { year, text } }) => (
                            <Link key={pos} href={url}>
                                <a>
                                    <figure className={styles.column__item}>
                                        <ImageWrapper pos={pos} img={img} />
                                        <figcaption className={styles.column__item_caption}>
                                            <span className={styles.name}>{text}</span>
                                            <span className={styles.job}>{year}</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={classNames(styles.column_wrap)}>
                    <div className={styles.column}>
                        {b.map(({ pos, url, img, caption: { year, text } }) => (
                            <Link key={pos} href={url}>
                                <a>
                                    <figure key={pos} className={styles.column__item}>
                                        <ImageWrapper pos={pos} img={img} />
                                        <figcaption className={styles.column__item_caption}>
                                            <span className={styles.name}>{text}</span>
                                            <span className={styles.job}>{year}</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={classNames(styles.column_wrap, styles.column_wrap_height)}>
                    <div className={styles.column}>
                        {c.map(({ pos, url, img, caption: { year, text } }) => (
                            <Link key={pos} href={url}>
                                <a>
                                    <figure key={pos} className={styles.column__item}>
                                        <ImageWrapper pos={pos} img={img} />
                                        <figcaption className={styles.column__item_caption}>
                                            <span className={styles.name}>{text}</span>
                                            <span className={styles.job}>{year}</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
