import React, { FC } from 'react';

import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const SingleSwitchCanvas = dynamic(() => import('@modules/home/SingleSwitch/SingleSwitchCanvas'), {
    ssr: false,
    suspense: false,
});

const SingleSwitchInner: React.FC = () => {
    const { ref, inView } = useInView({
        /* Optional options */

        rootMargin: '-50% 0px 0px 0px',
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
    const w = useDebouncedWidth();
    if (w > breakpoints.laptop) {
        return <SingleSwitchInner />;
    } else return null;
};

export default SingleSwitch;
