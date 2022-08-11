import { useEffect, useState } from 'react';

export const isBrowser = typeof window !== 'undefined';

function getWindowDimensions() {
    if (!isBrowser)
        return {
            width: 0,
            height: 0,
        };
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimensions(): { width: number; height: number } {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        setWindowDimensions(getWindowDimensions());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}
