import Stack from '@layouts/Stack';
import { useContext, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import styles from './red.module.scss';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';

function Red() {
    const { isReady } = useContext(SmoothScrollContext);
    const { t } = useTranslation('homepage');
    const w = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#ele`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: w > breakpoints.laptop ? 'top top' : 'top 50%',
                    end: w > breakpoints.laptop ? '+=400vh' : '',
                    pin: w > breakpoints.laptop,
                    scrub: w > breakpoints.laptop,
                },
            })
                .to(
                    `#look`,
                    {
                        ease: 'linear',
                        y: '30vh',
                    },
                    'timeline',
                )
                .to(
                    `#for_you`,
                    {
                        ease: 'linear',
                        y: '-30vh',
                    },
                    '<',
                );
        }, 1000);
    }, [w, isReady]);

    if (w <= breakpoints.laptop) {
        return null;
    }

    return (
        <section
            style={{
                position: 'relative',
            }}
            id={'ele'}
        >
            <Stack direction={'column'} justifyContent={'space-between'} className={styles.container}>
                <p id={'look'}>{t('redDotAnimationLeft')}</p>

                <Stack direction={'row'} className={styles.red_container} justifyContent={'center'}>
                    <div className={styles.line} />

                    <Stack direction={'row'} className={styles.red_dot} justifyContent={'center'} alignItems={'center'}>
                        <p
                            className={'text-center'}
                            style={{
                                width: '11vw',
                            }}
                        >
                            {t('redDotAnimationText')}
                        </p>
                    </Stack>
                </Stack>
                <p
                    id={'for_you'}
                    style={{
                        alignSelf: 'flex-end',
                        textAlign: 'right',
                    }}
                >
                    {t('redDotAnimationRight')}
                </p>
            </Stack>
        </section>
    );
}

export default Red;
