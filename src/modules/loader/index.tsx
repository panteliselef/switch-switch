import SwitchLogo from '@components/AppMenu/SwitchLogo';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './loader.module.scss';

const Loader: React.FC<{ isScrollReady: boolean }> = ({ isScrollReady }) => {
    const [isReady, setReady] = useState(false);

    console.log(isReady, isScrollReady);
    useEffect(() => {
        const t = setTimeout(() => {
            if (isScrollReady) setReady(true);
        }, 1000);

        return () => {
            clearTimeout(t);
        };
    }, [isScrollReady]);

    return (
        <div
            className={classNames({
                [styles.loading_modal]: true,
                [styles.loading_modal__hidden]: isReady,
            })}
        >
            <div className={styles.logo}>
                <SwitchLogo />
            </div>
        </div>
    );
};

export default Loader;
