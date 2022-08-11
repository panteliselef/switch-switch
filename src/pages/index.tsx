import { NextPage } from 'next';
import Hero from '@modules/home/hero';
// import { gsap } from 'gsap/dist/gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
import GalleryCollection from '@modules/home/GalleryCollection';

const Home: NextPage = () => {
    const divRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        console.log('div', divRef.current);
        // gsap.from('.nice', {
        //     scrollTrigger: {
        //         trigger: '.nice',
        //         scroller: '.wow',
        //         start: 'top 0%',
        //         end: '+=500',
        //     },
        //     y: 100,
        //     duration: 1,
        // });
    }, []);

    return (
        <>
            <Hero />

            <GalleryCollection />

            <section data-scroll-section>
                <div
                    style={{
                        width: '100%',
                        height: '300px',
                        background: 'red',
                    }}
                >
                    wowwo
                </div>
            </section>
            <section data-scroll-section>
                <div
                    className={'nice'}
                    ref={divRef}
                    style={{
                        width: '100%',
                        height: '300px',
                        background: 'blue',
                    }}
                >
                    wowwo
                </div>
            </section>
            <section data-scroll-section>
                <div
                    style={{
                        width: '100%',
                        height: '300px',
                        background: 'green',
                    }}
                >
                    wowwo
                </div>
            </section>
        </>
    );
};

export default Home;
