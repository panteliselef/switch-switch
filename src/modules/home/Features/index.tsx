import Stack from '@layouts/Stack';
import React from 'react';
import styles from './features.module.scss';
import useTranslation from 'next-translate/useTranslation';

const Feature: React.FC<{ speed?: number; number: string; title: string; text: string }> = ({
    speed,
    number,
    title,
    text,
}) => {
    return (
        <div data-scroll={''} data-scroll-speed={speed || '1'} className={styles.feature}>
            <p className={styles.number}>{number}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

function Features() {
    const { t } = useTranslation('homepage');
    return (
        <Stack
            direction={'row'}
            justifyContent={'center'}
            style={{
                position: 'relative',
            }}
        >
            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '-5vw',
                    left: '20vw',
                }}
            >
                {t('hiddenText1')}
            </p>

            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '10vw',
                    left: '50vw',
                }}
            >
                {t('hiddenText2')}
            </p>

            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '30vw',
                    left: '10vw',
                }}
            >
                {t('hiddenText3')}
            </p>

            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '50vw',
                    right: '10vw',
                }}
            >
                {t('hiddenText4')}
            </p>

            <Stack className={styles.container} direction={'column'}>
                <Feature number={'01'} title={t('feature1Title')} text={t('feature1Desc')} />

                <Feature speed={2} number={'02'} title={t('feature2Title')} text={t('feature2Desc')} />

                <Feature number={'03'} title={t('feature3Title')} text={t('feature3Desc')} />

                <Feature speed={2} number={'04'} title={t('feature4Title')} text={t('feature4Desc')} />
            </Stack>
        </Stack>
    );
}

export default Features;
