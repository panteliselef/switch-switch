import React from 'react';
import Stack from '@layouts/Stack';
import InfinityIcon from '@design/icons/InfinityIcon';

import styles from './infiniteScroll.module.scss';
import useTranslation from "next-translate/useTranslation";

const InfiniteScrollText: React.FC = () => {

    const {t} = useTranslation('history');
    return (
        <section>
            <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={50}>
                <InfinityIcon width={'300'} />
                <div className={styles.infinite_scrolling_text}>
                    <div className={styles.infinite_scrolling_text__title}>
                        <div>
                            {Array(3).fill(t('verticalScrollText')).map((t, index) => (
                                <p key={index} className={'heading-2'}>
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </Stack>
        </section>
    );
};

export default InfiniteScrollText;
