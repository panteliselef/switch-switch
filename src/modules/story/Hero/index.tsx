import React, { useEffect } from 'react';
import styles from './hero.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';

import storyHeroBg from '@assets/story_bg.png';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';
import { useSplitText } from '@modules/history/hero';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';

const ScrollToExperience = () => {
    const { t } = useTranslation('story');
    const width = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            gsap.to('.scroll_experience_text', {
                scrollTrigger: {
                    trigger: '.scroll_experience_text',
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    scrub: 1,
                    start: 'top 80%',
                },
                y: 100,
                opacity: 0,
            });
        }, 1200);
    }, []);

    if (width <= breakpoints.laptop) return null;

    return (
        <Stack direction={'row'} justifyContent={'flex-end'} gap={'2vw'}>
            <p
                style={{
                    paddingTop: '6vw',
                }}
                className={classNames('p-text-3', 'scroll_experience_text')}
            >
                {t('scrollDown')}
            </p>
        </Stack>
    );
};

const Hero: React.FC = () => {
    // useSplitText('.hero-text', '.hero-trigger');
    useEffect(() => {
        setTimeout(() => {
            gsap.to('.story_bg', {
                scrollTrigger: {
                    trigger: `.${styles.story_hero_container}`,
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    scrub: 1,
                    start: 'top 0%',
                },
                ease: 'linear',
                yPercent: 15,
            });
        }, 1200);
    }, []);

    useSplitText('.gallery-text', `#trigger`);

    const { t } = useTranslation('story');

    return (
        <section>
            <div className={styles.story_hero_container}>
                <div
                    className={'story_bg'}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image alt={'story bg'} src={storyHeroBg} layout={'fill'} objectFit={'cover'} />
                </div>

                <Stack className={styles.stack_cont} direction={'column'}>
                    <Stack direction={'column'} id={'trigger'} className={styles.gallery_trigger} gap={'2vw'}>
                        <h3 className={'heading-3 split-line gallery-text'}>
                            <div>{t('heroTitleLine1')}</div>
                        </h3>

                        <h3 className={'heading-3 split-line gallery-text'}>
                            <div>{t('heroTitleLine2')}</div>
                        </h3>

                        <h3 className={'heading-3 split-line gallery-text'}>
                            <div>{t('heroTitleLine3')}</div>
                        </h3>
                    </Stack>

                    <ScrollToExperience />

                    <div className={styles.text_cont}>
                        <Stack
                            direction={'column'}
                            style={{
                                right: 0,
                            }}
                            gap={'2vw'}
                        >
                            <p className={classNames('p-text-3')}>{t('heroParagraph1')}</p>
                            <p className={classNames('p-text-3')}>{t('heroParagraph2')}</p>

                            <p className={classNames('p-text-3')}>{t('heroParagraph3')}</p>

                            <p className={classNames('p-text-3')}>{t('heroParagraph4')}</p>
                        </Stack>
                    </div>
                </Stack>
            </div>
        </section>
    );
};

export default Hero;
