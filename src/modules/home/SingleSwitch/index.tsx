import React, { FC, Suspense } from 'react';

import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const SingleSwitchCanvas = dynamic(() => import('@modules/home/SingleSwitch/SingleSwitchCanvas'), {
    ssr: false,
    suspense: true,
});

const SingleSwitchInner: React.FC = () => {
    const { ref, inView } = useInView({
        /* Optional options */

        rootMargin: '-25% 0px 0px 0px',
        threshold: 0,
    });

    return (
        <section
            ref={ref}
            style={{
                height: '100vh',
                position: 'relative',
            }}
        >
            <SingleSwitchCanvas shouldPlay={inView} />
        </section>
    );
};

const SingleSwitch: FC = () => {
    return (
        <Suspense
            fallback={
                <section
                    style={{
                        height: '100vh',
                        position: 'relative',
                    }}
                />
            }
        >
            <SingleSwitchInner />
        </Suspense>
    );
};

export default SingleSwitch;
