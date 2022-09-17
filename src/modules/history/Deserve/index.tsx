import React from 'react';
import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from './deserve.module.scss';
import useTranslation from 'next-translate/useTranslation';

const Deserve: React.FC = () => {
    const { t } = useTranslation('history');
    return (
        <section
            style={{
                transform: 'translateY(-23vh)',
            }}
        >
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} gap={100}>
                <p className={classNames('heading-2', styles.deserve_cont)}>
                    <span className={'font-light'}>{t('deserveHeadingLine1')}</span>
                    <span className={'font-normal'}>{t('deserveHeadingLine2')}</span>
                    <span className={'font-medium'}>{t('deserveHeadingLine3')}</span>
                </p>

                <p
                    data-scroll=""
                    data-scroll-speed="1"
                    className={'p-text-1'}
                    style={{
                        textAlign: 'center',
                        margin: 'auto',
                        maxWidth: '35vw',
                    }}
                >
                    {t('deserveParagraph')}
                </p>
            </Stack>
        </section>
    );
};

export default Deserve;
