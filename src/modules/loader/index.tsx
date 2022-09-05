import SwitchLogo from '@components/AppMenu/SwitchLogo';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './loader.module.scss';

const Loader = () => {
    const [isReady, setReady] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => {
            setReady(true);
        }, 1000);

        return () => {
            clearTimeout(t);
        };
    }, []);

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
