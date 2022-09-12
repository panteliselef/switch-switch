import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import styles from './cursor.module.scss';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

const CustomCursor = () => {
    const width = useDebouncedWidth();

    // Run only once
    useEffect(() => {
        if (width < breakpoints.laptop) {
            document.body.style.cursor = 'auto';
            return;
        }

        document.body.style.cursor = 'none';

        const $bigBall = document.querySelector(`.${styles.cursor}`);
        const $smallBall = document.querySelector(`.${styles.dot}`);
        // const $hoverables = document.querySelectorAll('.hoverable');

        // Listeners
        document.body.addEventListener('mousemove', onMouseMove);

        // Move the cursor
        function onMouseMove(e: globalThis.MouseEvent) {
            gsap.to($bigBall, { duration: 0.4, x: e.clientX - 15, y: e.clientY - 15 });
            gsap.to($smallBall, { duration: 0.1, x: e.clientX - 5, y: e.clientY - 7 });
        }

        return () => {
            document.body.removeEventListener('mousemove', onMouseMove);
        };
    }, [width]);

    return width > breakpoints.laptop ? (
        <div className="cursor">
            <div className={styles.cursor} />
            <div className={styles.dot} />
        </div>
    ) : (
        <div className="cursor"></div>
    );
};

export default CustomCursor;
