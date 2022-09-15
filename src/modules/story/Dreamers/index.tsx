import Stack from '@layouts/Stack';
import React from 'react';
import { useSplitText } from '@modules/history/hero';
import Image from 'next/image';

import dreamersImg from '@assets/dreamers.png';
import classNames from 'classnames';
import showRoomStyles from '@modules/history/Showroom/showRoom.module.scss';
import styles from './dreamers.module.scss';
import useTranslation from 'next-translate/useTranslation';

const Dreamers = () => {
    const { t } = useTranslation('story');
    useSplitText('.dreamer-text', '.dreamer-trigger');
    return (
        <Stack direction={'column'} justifyContent={'center'}>
            <Stack
                direction={'column'}
                style={{
                    paddingBlock: '14vw',
                    textAlign: 'center',
                }}
                className={'dreamer-trigger'}
                gap={'2vw'}
            >
                <h3 className={'heading-3 split-line dreamer-text'}>
                    <div>{t('dreamersTitleLine1')}</div>
                </h3>

                <h3 className={'heading-3 split-line dreamer-text'}>
                    <div>{t('dreamersTitleLine2')}</div>
                </h3>
            </Stack>

            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <div
                    style={{
                        position: 'absolute',
                    }}
                >
                    <p
                        style={{
                            fontSize: '20vw',
                            opacity: '.2',
                        }}
                    >
                        {t('dreamersBgText')}
                    </p>
                </div>
                <div data-scroll={''} data-scroll-speed={'1'} className={styles.image_cont}>
                    <Image alt={'dreamers'} src={dreamersImg} layout={'responsive'} objectFit={'cover'} />
                </div>
            </Stack>

            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p
                    className={classNames('p-text-1', 'text-center')}
                    style={{
                        width: '35vw',
                        paddingTop: '7vw',
                    }}
                >
                    {t('dreamersCenterParagraph')}
                </p>
            </Stack>

            <section
                style={{
                    width: '100%',
                    padding: '1rem',
                    paddingTop: '5vw',
                    maxWidth: '1140px',
                    margin: 'auto',
                }}
            >
                <Stack direction={'column'} gap={50}>
                    <Stack direction={'column'} gap={50} className={styles.stack_cont}>
                        <p className={classNames(showRoomStyles.plain, 'p-text-2')} data-scroll={''}>
                            {t('dreamersLeftParagraph1')}
                        </p>
                        <p className={classNames(showRoomStyles.plain, 'p-text-2')} data-scroll={''}>
                            {t('dreamersLeftParagraph2')}
                        </p>
                    </Stack>
                    <Stack direction={'column'} gap={50} alignItems={'flex-end'} justifyContent={'flex-end'}>
                        <p
                            className={classNames(showRoomStyles.plain, 'p-text-2', styles.stack_cont)}
                            data-scroll={''}
                            data-scroll-speed={'1'}
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            {t('dreamersRightParagraph')}
                        </p>
                    </Stack>
                </Stack>
            </section>
        </Stack>
    );
};

export default Dreamers;
