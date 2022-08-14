import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';

const InnerScroll: React.FC<React.HTMLProps<HTMLDivElement>> = ({ style, children, ...props }) => {
    const outerRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: outerRef.current,
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    start: 'top 100%',
                    end: 'top -100%',
                    scrub: true,
                },
                yPercent: -50,
            });
        }, 1000);
    }, []);

    return (
        <div
            ref={outerRef}
            style={{
                overflow: 'hidden',
                ...style,
            }}
            {...props}
        >
            <div
                ref={ref}
                style={{
                    width: '100%',
                    height: '200%',
                    position: 'relative',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default InnerScroll;
