import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from './visit.module.scss';

const VisitUs: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `#visit`,
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    start: 'top top',
                    end: '+=7000px',
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
    }, []);
    return (
        <section>
            <div
                id={'visit'}
                style={{
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: '270px 1fr',
                    maxWidth: '1280px',
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 50,
                }}
            >
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

                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    style={{
                        height: '100%',
                        position: 'relative',
                        maxWidth: '800px',
                    }}
                >
                    <div className={styles.cl}>
                        <p className={classNames('l1', styles.l)}>Vizualize your architectural project</p>
                    </div>
                    <div className={styles.cl}>
                        <p className={classNames('l2', styles.l)}>Bring light into your upcoming home</p>
                    </div>

                    <div className={styles.cl}>
                        <p className={classNames('l3', styles.l)}>Implement a smart home system.</p>
                    </div>

                    <div className={styles.cl}>
                        <p className={classNames('l4', styles.l)}> Purchase your dream switch</p>
                    </div>
                </Stack>
            </div>
        </section>
    );
};

export default VisitUs;
