import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';
import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from './visit.module.scss';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import useTranslation from 'next-translate/useTranslation';

const VisitUs: React.FC = () => {
    const { t } = useTranslation('history');
    const { isReady } = useContext(SmoothScrollContext);
    const w = useDebouncedWidth();
    useEffect(() => {
        if (!isReady) return;
        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `#visit`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: 'top top',
                    end: '+=3000px',
                    pin: true,
                    scrub: true,
                },
                onUpdate: () => {
                    gsap.to('#progress', {
                        scaleX: tl.progress(),
                        transformOrigin: '0px 0px',
                    });
                },
            });

            tl.fromTo(
                '.l1',
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                },
                'start',
            )
                .to(
                    '.l1',
                    {
                        y: -200,
                        opacity: 0,
                    },
                    '>',
                )
                .fromTo(
                    '.l2',
                    {
                        y: 200,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                    },
                    '>',
                )
                .to(
                    '.l2',
                    {
                        y: -200,
                        opacity: 0,
                    },
                    '>',
                )
                .fromTo(
                    '.l3',
                    {
                        y: 200,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                    },
                    '>',
                )
                .to(
                    '.l3',
                    {
                        y: -200,
                        opacity: 0,
                    },
                    '>',
                )
                .fromTo(
                    '.l4',
                    {
                        y: 200,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                    },
                    '>',
                );
        }, 1000);
    }, [w, isReady]);
    return (
        <section>
            <div id={'visit'} className={styles.grid}>
                <Stack
                    direction={'column'}
                    style={{
                        width: 'auto',
                    }}
                >
                    <p className={'p-text-1'}>Come visit us to</p>
                    <div
                        style={{
                            width: '100%',
                            height: '2px',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            id={'progress'}
                            style={{
                                transform: 'scaleX(0)',
                                width: '100%',
                                height: '100%',
                                background: 'white',
                            }}
                        ></div>
                    </div>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} className={styles.cont}>
                    <div className={styles.cl}>
                        <p className={classNames('l1', styles.l, 'heading-3')}>{t('visitUsText1')}</p>
                    </div>
                    <div className={styles.cl}>
                        <p className={classNames('l2', styles.l, 'heading-3')}>{t('visitUsText2')}</p>
                    </div>

                    <div className={styles.cl}>
                        <p className={classNames('l3', styles.l, 'heading-3')}>{t('visitUsText3')}</p>
                    </div>

                    <div className={styles.cl}>
                        <p className={classNames('l4', styles.l, 'heading-3')}>{t('visitUsText4')}</p>
                    </div>
                </Stack>
            </div>
        </section>
    );
};

export default VisitUs;
