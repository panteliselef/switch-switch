import SwitchLogo from '@components/AppMenu/SwitchLogo';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './loader.module.scss';
import gsap from 'gsap/dist/gsap';

const Loader: React.FC<{ isScrollReady: boolean }> = ({ isScrollReady }) => {
    const [hasRun, setHasRun] = React.useState(false);
    useEffect(() => {
        if (isScrollReady) {
            gsap.timeline({
                onComplete: () => {
                    setHasRun(true);
                },
            }).to('#loader', {
                alpha: 0,
                delay: 1,
            });
        }
    }, [isScrollReady]);

    if (hasRun) return null;

    return (
        <div
            id={'loader'}
            className={classNames({
                [styles.loading_modal]: true,
                // [styles.loading_modal__hidden]: isScrollReady,
            })}
        >
            <div className={styles.logo}>
                <SwitchLogo />
            </div>
        </div>
    );
};

export default Loader;
