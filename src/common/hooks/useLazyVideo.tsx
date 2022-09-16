import { useInView } from 'react-intersection-observer';
import React from 'react';

export const useLazyVideo = ({ sources }: { sources: { path: string; type: string }[] }) => {
    const observer = useInView({
        threshold: 0,
        rootMargin: '0px 0px 100% 0px',
        triggerOnce: true,
    });

    return {
        ...observer,
        videoSources: sources.map((source) => (
            <source key={source.type + source.path} src={source.path} type={source.type} />
        )),
        videoProps: {
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
        },
    };
};
