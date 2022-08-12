import React, { useEffect } from 'react';
import styles from './galleryCollection.module.scss';
import Image from 'next/image';

import img1 from '@assets/bw1.png';
import img2 from '@assets/bw2.png';
import img3 from '@assets/bw3.png';
import img4 from '@assets/bw4.png';
import img5 from '@assets/bw4.png';

import mapImage from '@assets/map.png';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';

const scrollTrigger = {
    trigger: `.${styles.media}`,
    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
    start: 'top 100%',
    end: '150%',
    scrub: true,
};

const GalleryCollection: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger,
            })
                .to(`.${styles.media}`, {
                    y: `${window.innerWidth - (window.innerWidth * 80) / 100}px`,
                })
                .to(`.${styles.media}:nth-child(2)`, {
                    x: `-${(window.innerWidth - (window.innerWidth * 80) / 100) / 2}px`,
                    scrollTrigger,
                })
                .to(`.${styles.media}:nth-child(3)`, {
                    x: `${(window.innerWidth - (window.innerWidth * 80) / 100) / 2}px`,
                    scrollTrigger,
                })
                .to(`.${styles.media}:nth-child(4)`, {
                    x: `-${window.innerWidth - (window.innerWidth * 80) / 100}px`,
                    scrollTrigger,
                })
                .to(`.${styles.media}:nth-child(5)`, {
                    x: `${window.innerWidth - (window.innerWidth * 80) / 100}px`,
                    scrollTrigger,
                });
        }, 1000);
    }, []);

    return (
        <section className={styles.gallery}>
            <ul className={styles.mediaWrapper}>
                <li className={styles.media}>
                    <Image objectFit={'cover'} src={img1} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image objectFit={'cover'} src={img2} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image objectFit={'cover'} src={img3} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image objectFit={'cover'} src={img4} alt={'image 1'} layout={'fill'} />
                </li>

                <li className={styles.media}>
                    <Image objectFit={'cover'} src={img5} alt={'image 1'} layout={'fill'} />
                </li>
            </ul>

            <Stack direction={'column'} className={styles.text}>
                <h1>Located in the historical heart of Belgrade </h1>

                <p data-scroll="" data-scroll-speed="1">
                    We chose Dorcol for it’s class, the perfect mix of history and avangarde.
                </p>

                <p data-scroll="">
                    Right in the center, Novi Dorcol, and yet totally set back from the world, in a place that embodies
                    serenity: a former cloister. The crossing of the tree-lined courtyard marks the beginning of your
                    journey, the vast spaces of the place then welcome you for this unique journey.
                </p>

                <div
                    data-scroll=""
                    data-scroll-speed="-1.5"
                    style={{
                        position: 'absolute',
                        width: 500,
                        height: 500,
                        bottom: 0,
                        right: 'calc(0% - 250px)',
                    }}
                >
                    <Image src={mapImage} alt={'map location'} objectFit={'cover'} layout={'responsive'} />
                </div>
            </Stack>
        </section>
    );
};

export default GalleryCollection;
