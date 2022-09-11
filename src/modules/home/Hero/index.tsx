import Stack from '@layouts/Stack';
import styles from './hero.module.scss';
import Image from 'next/image';

import homeHero from '@assets/homeHero.png';
import { useEffect } from 'react';
import gsap from 'gsap/dist/gsap';

const Hero = () => {
    useEffect(() => {
        gsap.fromTo(
            document.querySelectorAll('.r'),
            { opacity: 0, x: -100, y: 40, rotate: -45, color: '#fff' },
            { delay: 3, opacity: 1, x: 0, y: 0, rotate: 0, stagger: 0.5, color: '#e1493e' },
        );
    }, []);
    return (
        <section className={styles.outer_cont}>
            <Stack
                direction={'row'}
                className={styles.row_col}
                style={{
                    width: '100%',
                }}
            >
                <Stack
                    direction={'column'}
                    style={{
                        flex: '1 1 auto',
                    }}
                >
                    <h3
                        className={'heading-3 text-center'}
                        style={{
                            width: '100%',
                        }}
                    >
                        Endless
                    </h3>

                    <h3
                        className={'heading-3'}
                        style={{
                            width: '100%',
                        }}
                    >
                        exploration
                    </h3>

                    <Stack direction={'row'} gap={'1vw'}>
                        <h3
                            className={'heading-3'}
                            style={{
                                width: 'fit-content',
                            }}
                        >
                            Let there
                        </h3>
                        <Stack direction={'column'} gap={'1rem'}>
                            <p className={styles.small_text}>
                                at switchswitch we create future-inspired SWITCHES for people and businesses desiring
                                luxury and style.
                            </p>
                            <p className={styles.small_text}>Based in BELGRADE, serbia known worldwide.</p>
                        </Stack>
                    </Stack>

                    <Stack direction={'row'}>
                        <h3 className={'heading-3'}>be power</h3>

                        <h3 className={'heading-3 r'}>r</h3>

                        <h3 className={'heading-3 r'}>r</h3>
                    </Stack>
                </Stack>

                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    data-scroll={''}
                    data-scroll-speed={'-3'}
                    className={styles.switch_cont}
                >
                    <div className={styles.image_cont}>
                        <Image src={homeHero} layout={'responsive'} />
                    </div>

                    <div className={styles.switch}>
                        <div className={styles.red_cont}>
                            <div data-scroll={''} data-scroll-speed={'-3'} className={styles.red}></div>
                        </div>
                    </div>
                </Stack>
            </Stack>
        </section>
    );
};

export default Hero;
