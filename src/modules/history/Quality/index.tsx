import React from 'react';
import Stack from '@layouts/Stack';
import InnerScroll from '@components/InnerScroll';
import Image from 'next/image';
import styles from './quality.module.scss';
import q1 from '@assets/q_1.png';
import q2 from '@assets/q_2.png';
import classNames from 'classnames';

const Quality: React.FC = () => {
    return (
        <Stack direction={'column'} gap={'1.4vw'} className={classNames('uppercase', styles.quality_cont)}>
            <h3 className={'heading-3'}>
                <span className={'font-extra-light'}>WE VALUE QUALITY</span>
            </h3>

            <Stack className={styles.image_cont1} gap={'3vw'}>
                <h3
                    style={{
                        flex: '0 0 auto',
                    }}
                    className={'heading-3'}
                >
                    <span className={'font-light'}>AND DESIGN</span>
                </h3>

                <InnerScroll
                    style={{
                        width: '100%',
                        height: '120px',
                    }}
                >
                    <Image src={q1} layout={'fill'} objectFit={'cover'} />
                </InnerScroll>
            </Stack>

            <Stack className={styles.image_cont1} gap={'3vw'}>
                <InnerScroll
                    style={{
                        width: '100%',
                        height: '120px',
                    }}
                >
                    <Image src={q2} layout={'fill'} objectFit={'cover'} />
                </InnerScroll>
                <h3
                    style={{
                        flex: '0 0 auto',
                    }}
                    className={'heading-3'}
                >
                    MAKING YOUR
                </h3>
            </Stack>

            <h3 className={'heading-3'}>
                <span className={'font-light'}>HOME SHINE</span>
            </h3>
        </Stack>
    );
};

export default Quality;
