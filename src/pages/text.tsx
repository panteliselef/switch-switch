import { NextPage } from 'next';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

import styles from '@modules/test.module.scss';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';

const Home: NextPage = () => {
    useIsomorphicLayoutEffect(() => {
        // console.log('div', divRef.current);
        setTimeout(() => {
            gsap.from('.h2', {
                scrollTrigger: {
                    trigger: `.${styles.mainS}`,
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    start: 'top top',
                    end: '+=400',
                    pin: `.${styles.mainS}`,
                    scrub: 2,
                },
                opacity: 1,
                y: 200,
            });
        }, 1000);
    }, []);

    return (
        <>
            <header className={styles.header}></header>
            <main className={styles.main}>
                <aside />
                <aside className={styles.right}></aside>
            </main>
            <section className={styles.mainS}>
                <h2 className={'h2'}>Woo!</h2>
            </section>
            <section className={styles.another}></section>
        </>
    );
};

export default Home;
