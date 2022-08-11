import React from 'react';
import Stack from '@layouts/Stack';
import InfinityIcon from '@design/icons/InfinityIcon';

import styles from './infiniteScroll.module.scss';

const InfiniteScrollText: React.FC = () => {
    return (
        <section data-scroll-section={''}>
            <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={50}>
                <InfinityIcon width={'300'} />
                <div className={styles.infinite_scrolling_text}>
                    <div className={styles.infinite_scrolling_text__title}>
                        <div>
                            <p>A place for creativity</p>
                            <p>A place for creativity</p>
                        </div>
                    </div>
                </div>
            </Stack>
        </section>
    );
};

export default InfiniteScrollText;
