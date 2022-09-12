import styles from './switchAnimation.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { breakpoints } from '@utils/breakpoints';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';

const currentFrame = (index: number) => `/animation2/Comp 1_${index.toString().padStart(5, '0')}.png`;
const frameCount = 92;
const SwitchAnimation = () => {
    const w = useDebouncedWidth();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');
        if (!context) return;
        canvasRef.current.height = 3840;
        canvasRef.current.width = 1920;

        const image = new Image();

        image.src = currentFrame(1);
        image.onload = () => {
            context.drawImage(image, 0, 0);
        };

        const updateImage = (index: number) => {
            image.src = currentFrame(index);
            image.onload = () => {
                context.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
                context.drawImage(image, 0, 0);
            };
        };

        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `#switchanim`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: 'top top',
                    end: '+=5000vh',
                    pin: true,
                    scrub: true,
                },
                onUpdate: () => {
                    const frameIndex = Math.min(Math.floor(tl.progress() * frameCount), frameCount - 1);
                    requestAnimationFrame(() => updateImage(frameIndex + 1));
                },
            });

            tl.fromTo(
                'c',
                {
                    opacity: 0,
                },
                {
                    ease: 'linear',
                    opacity: 1,
                },
            );
        }, 1200);
    }, [w]);

    return (
        <section
            id={'switchanim'}
            style={{
                width: '100vw',
                aspectRatio: '1/2',
            }}
        >
            <canvas  id={'c'} ref={canvasRef} className={styles.canvas} />
        </section>
    );
};

export default SwitchAnimation;
