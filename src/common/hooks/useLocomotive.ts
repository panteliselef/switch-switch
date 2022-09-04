import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCallback, useEffect, useRef } from 'react';
import { LocomotiveScrollInterface } from '../../../types';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';
import { useDebounce } from 'usehooks-ts';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function useLocoScroll(canStart: boolean, elementAsScroller = 'element_to_add') {
    const { width } = useWindowDimensions();

    const debouncedWidth = useDebounce(width, 100);

    const locoScroll = useRef<LocomotiveScrollInterface>();

    const updateLoco = useCallback(() => {
        if (locoScroll.current) {
            locoScroll.current.update();
        }
    }, []);

    useEffect(() => {
        if (!canStart) return;

        async function dynamicImportModule() {
            const { default: LocomotiveScroll } = await import('locomotive-scroll');

            locoScroll.current = new LocomotiveScroll({
                el: document.querySelector(elementAsScroller),
                smooth: true,
                tablet: {
                    smooth: false,
                },
                smartphone: {
                    smooth: false,
                },
                lerp: 0.04,
            });

            if (typeof locoScroll.current === 'undefined') return;

            locoScroll.current.stop();

            // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            ScrollTrigger.scrollerProxy(elementAsScroller, {
                scrollTop(value) {
                    if (!locoScroll.current) return 0;

                    return arguments.length
                        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          locoScroll.current.scrollTo(value, 0, 0)
                        : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          locoScroll.current.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
                pinType: (document.querySelector(elementAsScroller) as HTMLElement)?.style.transform
                    ? 'transform'
                    : 'fixed',
            });

            // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
            locoScroll.current.on('scroll', ScrollTrigger.update);

            window.locomotive = locoScroll.current;

            // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
            ScrollTrigger.addEventListener('refresh', updateLoco);

            // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
            ScrollTrigger.refresh();

            updateLoco();
        }

        if (debouncedWidth > breakpoints.laptop && !locoScroll.current) {
            dynamicImportModule().then();
        }
    }, [canStart, elementAsScroller, updateLoco, debouncedWidth]);

    useEffect(() => {
        return () => {
            ScrollTrigger.removeEventListener('refresh', updateLoco);
            if (locoScroll.current) {
                locoScroll.current.destroy();
                const root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
                root.classList.add('has-scroll-smooth', 'has-scroll-init');
            }
        };
    }, [updateLoco]);

    return [
        () => {
            ScrollTrigger.removeEventListener('refresh', updateLoco);
        },
    ];
}
