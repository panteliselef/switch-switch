import Stack from '@layouts/Stack';
import styles from './hero.module.scss';
import Image from 'next/image';

import homeHero from '@assets/homeHero.jpeg';
import { useEffect } from 'react';
import gsap from 'gsap/dist/gsap';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const Hero = () => {
    const { locale } = useRouter();
    const w = useDebouncedWidth();
    const { t } = useTranslation('homepage');
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
                delay: 2,
                duration: 2,
                width:
                    w > breakpoints.laptop
                        ? locale === 'en'
                            ? '15vw'
                            : '13vw'
                        : locale === 'en'
                        ? '4.6rem'
                        : '4.1rem',
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
        return () => {
            tl.kill();
        };
    }, [locale, w]);
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
                        {t('heroTitle1')}
                    </h3>

                    <h3
                        className={'heading-3'}
                        style={{
                            width: '100%',
                        }}
                    >
                        {t('heroTitle2')}
                    </h3>

                    <Stack direction={'row'} gap={'1vw'}>
                        <h3
                            className={'heading-3'}
                            style={{
                                width: 'fit-content',
                            }}
                        >
                            {t('heroTitle3')}
                        </h3>
                        <Stack direction={'column'} gap={'1rem'}>
                            <p className={styles.small_text}>{t('heroSmallText1')}</p>
                            <p className={styles.small_text}>{t('heroSmallText2')}</p>
                        </Stack>
                    </Stack>

                    <Stack direction={'row'}>
                        <h3 className={'heading-3'}>{t('heroTitle4')}</h3>
                        <h3
                            className={'heading-3 r anim-typewriter'}
                            style={{
                                borderRight: '2px solid rgba(255,255,255,.75)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                            }}
                        >
                            {t('heroTitle4Extension')}
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
                    <p
                        className={'p-text-3'}
                        style={{
                            paddingBottom: '.5rem',
                            fontSize: 'calc(0.5vh + 0.5vw)',
                        }}
                    >
                        {t('heroImageLabel')}
                    </p>
                    <div className={styles.image_cont}>
                        <Image
                            loading={'eager'}
                            quality={100}
                            objectFit={'cover'}
                            alt={'the ceo in the studio'}
                            src={homeHero}
                            layout={'fill'}
                        />
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
