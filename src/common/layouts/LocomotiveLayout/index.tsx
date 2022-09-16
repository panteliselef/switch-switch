import React, { useContext, useEffect } from 'react';

import useLocoScroll from '@hooks/useLocomotive';
import Loader from '@modules/loader';
import { SmoothScrollContext } from '@contexts/SmoothScrollContext';

export const LOCOMOTIVE_CONTAINER_CLASS = 'loco_container';

const LocomotiveLayout: React.FC<{ children: React.ReactNode }> = (props) => {
    const { isReady } = useContext(SmoothScrollContext);
    const [loco] = useLocoScroll(true, `.${LOCOMOTIVE_CONTAINER_CLASS}`);

    useEffect(() => {
        console.log(window.locomotive, isReady, loco);
        if (loco && isReady) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            loco.update();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            loco.start();
        }
        const t = setTimeout(() => {
            // gsap.set('.nice', {
            //     y: 100,
            // });
            // gsap.to('.nice', {
            //     opacity: 1,
            //     y: -100,
            //     duration: 2.5,
            //     ease: 'slow(0.7, 0.7, false)',
            //     scrollTrigger: {
            //         trigger: '.nice',
            //         scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
            //         start: 'top 100%',
            //         end: 'bottom 0%',
            //         scrub: true,
            //     },
            // });
        }, 1000);
        return () => clearTimeout(t);
    }, [isReady, loco]);

    return (
        <>
            <Loader isScrollReady={isReady} />
            <div className={LOCOMOTIVE_CONTAINER_CLASS} data-scroll-container="">
                {props.children}
            </div>
        </>
    );
};

export default LocomotiveLayout;
