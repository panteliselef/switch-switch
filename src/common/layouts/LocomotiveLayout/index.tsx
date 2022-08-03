import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';

const LocomotiveLayout: React.FC<{ children: React.ReactNode }> = (props) => {
    const containerRef = useRef(null);
    const { pathname } = useRouter();
    const path = pathname.split('?')[0];
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            watch={[path]}
            location={path}
            containerRef={containerRef}
            onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
            onUpdate={() => console.log('Updated, but not on location change!')}
        >
            <div data-scroll-container ref={containerRef}>
                {props.children}
            </div>
        </LocomotiveScrollProvider>
    );
};

export default LocomotiveLayout;
