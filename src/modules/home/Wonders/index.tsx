import Stack from '@layouts/Stack';
import styles from './wonders.module.scss';
import classNames from 'classnames';
import Plugs from '@modules/home/Plugs';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { useContext, useEffect } from 'react';
import { breakpoints } from '@utils/breakpoints';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import { gsap } from 'gsap/dist/gsap';
import useTranslation from 'next-translate/useTranslation';

function Wonders() {
    const { isReady } = useContext(SmoothScrollContext);
    const { t } = useTranslation('homepage');
    const w = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#w`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: w > breakpoints.laptop ? 'top 50%' : 'top 80%',
                    end: '+=1000vh',
                    scrub: true,
                },
            }).to(
                document.querySelectorAll(`.${styles.wonders_text}`),
                {
                    ease: 'linear',
                    color: '#fff',
                    stagger: 1,
                },
                '<',
            );
        }, 1000);
    }, [w, isReady]);
    return (
        <section>
            <Stack direction={'column'} alignItems={'center'} gap={'10vw'}>
                <Stack direction={'column'} data-scroll={''} data-scroll-speed={'-1'}>
                    <p className={classNames('p-text-1', 'text-center', styles.max_width)}>{t('welcome')}</p>
                    <p className={classNames('p-text-1', 'text-center', styles.max_width)}>{t('home')}</p>
                </Stack>

                {/*<p className={classNames(styles.wonders_text)}>Wonders of light began with one single touch</p>*/}
                <Stack direction={'column'} id={'w'} style={{
                    padding: '0 2rem'
                }}>
                    <p className={classNames(styles.wonders_text)}>{t('wondersLine1')}</p>
                    <p className={classNames(styles.wonders_text)}>{t('wondersLine2')}</p>
                    <p className={classNames(styles.wonders_text)}>{t('wondersLine3')}</p>
                    <p className={classNames(styles.wonders_text)}>{t('wondersLine4')}</p>
                    <p className={classNames(styles.wonders_text)}>{t('wondersLine5')}</p>
                </Stack>

                <p
                    data-scroll={''}
                    data-scroll-speed={'1'}
                    className={classNames('p-text-2', 'text-center', styles.max_width)}
                >
                    {t('centerParagraph')}
                </p>
            </Stack>
            {w > breakpoints.laptop && <Plugs />}
        </section>
    );
}

export default Wonders;
