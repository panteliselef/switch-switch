import React from 'react';
import Stack from '@layouts/Stack';
import InnerScroll from '@components/InnerScroll';
import Image from 'next/image';

import sw from '@assets/switch1.png';
import st from '@assets/studio.png';

const Quality: React.FC = () => {
    return (
        <Stack
            direction={'column'}
            style={{
                padding: '10vw 5vw',
                paddingBottom: '0',
            }}
            gap={'1.4vw'}
            className={'uppercase'}
        >
            <h3 className={'heading-3'}>
                <span className={'font-extra-light'}>WE VALUE QUALITY</span>
            </h3>

            <Stack direction={'row'} alignItems={'center'} gap={'3vw'}>
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
                    <Image src={sw} layout={'fill'} objectFit={'cover'} />
                </InnerScroll>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} gap={'3vw'}>
                <InnerScroll
                    style={{
                        width: '100%',
                        height: '120px',
                    }}
                >
                    <Image src={st} layout={'fill'} objectFit={'cover'} />
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
