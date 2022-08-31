import React from 'react';
import Stack from '@layouts/Stack';

import styles from './office.module.scss';
import classNames from 'classnames';

const Office: React.FC = () => {
    return (
        <section>
            <Stack direction={'column'} gap={20} className={styles.container}>
                <span className={styles.small}>Design & Architecture Office</span>
                <p className={classNames(styles.plain, 'p-text-2')}>
                    We dreamed of an architectural house, with its well-designed furniture and its spaces that mark the
                    spirit. We made it a reality, which celebrates inspiration and independence of choice.
                </p>
            </Stack>
        </section>
    );
};

export default Office;
