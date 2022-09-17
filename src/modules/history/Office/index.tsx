import React from 'react';
import Stack from '@layouts/Stack';

import styles from './office.module.scss';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

const Office: React.FC = () => {
    const { t } = useTranslation('history');
    return (
        <section>
            <Stack direction={'column'} gap={20} className={styles.container}>
                <span className={styles.small}>{t('officeHeading')}</span>
                <p className={classNames(styles.plain, 'p-text-2')}>{t('officeParagraph')} </p>
            </Stack>
        </section>
    );
};

export default Office;
