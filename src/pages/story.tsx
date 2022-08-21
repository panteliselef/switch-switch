import { NextPage } from 'next';
import Hero from '@modules/story/Hero';
import Dreamers from '@modules/story/Dreamers';
import Timeline from '@modules/story/Timeline';
// import { gsap } from 'gsap/dist/gsap';
// import { useEffect, useLayoutEffect, useRef } from 'react';

// const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Story: NextPage = () => {
    return (
        <>
            <Hero />
            <Dreamers />
            <Timeline />
        </>
    );
};

export default Story;