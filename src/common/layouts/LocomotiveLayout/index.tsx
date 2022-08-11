import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap/dist/gsap';
import useLocoScroll from '@hooks/useLocomotive';

export const LOCOMOTIVE_CONTAINER_CLASS = 'loco_container';

const LocomotiveLayout: React.FC<{ children: React.ReactNode }> = (props) => {
    const containerRef = useRef(null);
    useLocoScroll(true, `.${LOCOMOTIVE_CONTAINER_CLASS}`);

    useEffect(() => {
        setTimeout(() => {
            if (window.locomotive) {
                window.locomotive.start();
                window.locomotive.update();
            }
            gsap.set('.nice', {
                y: 100,
            });
            gsap.to('.nice', {
                opacity: 1,
                y: -100,
                duration: 2.5,
                ease: 'slow(0.7, 0.7, false)',
                scrollTrigger: {
                    trigger: '.nice',
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    start: 'top 100%',
                    end: 'bottom 0%',
                    scrub: true,
                },
            });
        }, 1000);
    }, []);

    return (
        <div
            className={LOCOMOTIVE_CONTAINER_CLASS}
            style={
                {
                    // overflow: 'hidden hidden',
                    // overflowY: 'hidden !important',
                }
            }
            data-scroll-container=""
            ref={containerRef}
        >
            {props.children}
        </div>
    );
};

export default LocomotiveLayout;
