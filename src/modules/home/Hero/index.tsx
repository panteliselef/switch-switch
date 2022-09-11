import Stack from '@layouts/Stack';
import styles from './hero.module.scss';
import Image from 'next/image';

import homeHero from '@assets/homeHero.png';
import { useEffect } from 'react';
import gsap from 'gsap/dist/gsap';

const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            paused: true,
        });

        tl.fromTo(
            '.anim-typewriter',
            {
                width: '0',
            },
            {
                delay: 3,
                duration: 4,
                width: '15vw',
                ease: 'steps(2)',
                repeat: -1,
            },
            0,
        ).fromTo(
            '.anim-typewriter',
            {
                'border-right-color': 'rgba(255,255,255,0.75)',
            },
            {
                'border-right-color': 'rgba(255,255,255,0)',
                repeat: -1,
                duration: 0.7,
                ease: 'linear',
            },
            0,
        );

        tl.play();
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
                        <h3
                            className={'heading-3 r anim-typewriter'}
                            style={{
                                borderRight: '2px solid rgba(255,255,255,.75)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                            }}
                        >
                            rr
                        </h3>
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
                        <Image alt={'the ceo in the studio'} src={homeHero} layout={'responsive'} />
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
