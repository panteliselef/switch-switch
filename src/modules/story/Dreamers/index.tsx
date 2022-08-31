import Stack from '@layouts/Stack';
import React from 'react';
import { useSplitText } from '@modules/history/hero';
import Image from 'next/image';

import dreamersImg from '@assets/dreamers.png';
import classNames from 'classnames';
import styles from '@modules/history/Showroom/showRoom.module.scss';

const Dreamers = () => {
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
                    <div>The story</div>
                </h3>

                <h3 className={'heading-3 split-line dreamer-text'}>
                    <div>of dreamers</div>
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
                        Dreamers
                    </p>
                </div>
                <div data-scroll={''} data-scroll-speed={'1'}>
                    <Image alt={'dreamers'} src={dreamersImg} layout={'fixed'} objectFit={'contain'} width={400} />
                </div>
            </Stack>

            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <p
                    className={classNames('p-text-1', 'text-center')}
                    style={{
                        paddingTop: '7vw',
                    }}
                >
                    Switch Swtich was born <br /> from a grand vision
                </p>
            </Stack>

            <section
                style={{
                    width: '100%',
                    paddingTop: '5vw',
                    maxWidth: '1140px',
                    margin: 'auto',
                }}
            >
                <Stack
                    direction={'column'}
                    gap={50}
                    style={{
                        maxWidth: '30vw',
                        marginBottom: '8vw',
                    }}
                >
                    <p className={classNames(styles.plain, 'p-text-2')} data-scroll={''}>
                        We decided to change the way that we see the light.
                    </p>
                    <p className={classNames(styles.plain, 'p-text-2')} data-scroll={''}>
                        Light is the key part of our lives, from the moment we wake up to the moment we go to sleep.
                    </p>
                </Stack>
                <Stack direction={'column'} gap={50} alignItems={'flex-end'} justifyContent={'flex-end'}>
                    <p
                        className={classNames(styles.plain, 'p-text-2')}
                        style={{
                            textAlign: 'right',
                            maxWidth: '30vw',
                        }}
                        data-scroll={''}
                        data-scroll-speed={'1'}
                    >
                        {`That's why we decided to redefine the way you see and feel it.`}
                    </p>
                </Stack>
            </section>
        </Stack>
    );
};

export default Dreamers;
