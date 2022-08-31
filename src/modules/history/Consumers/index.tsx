import React from 'react';
import Stack from '@layouts/Stack';
import Link from 'next/link';

import whatWeDo from '@assets/what_we_do.svg';

import styles from './consumers.module.scss';
import Image from 'next/image';

const links = [
    {
        text: 'Consumers',
        link: '/',
    },

    {
        text: 'Architects',
        link: '/',
    },

    {
        text: 'Investors',
        link: '/',
    },
];

const Consumers: React.FC = () => {
    return (
        <section>
            <Stack
                direction={'row'}
                style={{
                    overflow: 'hidden',
                    height: '50vw',
                    borderTop: '1px solid var(--text-color)',
                    borderBottom: '1px solid var(--text-color)',
                    background: 'var(--bg-color)',
                }}
            >
                {links.map((d) => (
                    <div
                        key={d.text}
                        style={{
                            height: '100%',
                        }}
                    >
                        <Link href={d.link}>
                            <a className={styles.link}>
                                <Stack
                                    style={{
                                        width: '100%',
                                    }}
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <p className={styles.text}>{d.text}</p>

                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 35.4476C8.36394 35.4476 0.552373 27.6361 0.552373 18C0.552373 8.36394 8.36394 0.552373 18 0.552373C27.6361 0.552373 35.4476 8.36394 35.4476 18C35.4476 27.6361 27.6361 35.4476 18 35.4476Z"
                                            fill="black"
                                            stroke="white"
                                            strokeWidth="1.10475"
                                        />
                                        <path
                                            d="M16.7471 12.5167L21.5999 17.4009H11.3359L11.3359 18.688H21.5999L16.7471 23.5721L17.6498 24.4796L24.052 18.0444L17.6498 11.6094L16.7471 12.5167Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Stack>

                                <div className={styles.bg} />
                            </a>
                        </Link>
                    </div>
                ))}

                <Stack
                    direction={'row'}
                    style={{
                        position: 'relative',
                        width: '25vw',
                    }}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <div className={styles.rounderSvg}>
                        <Image alt={'what we do'} src={whatWeDo} objectFit={'contain'} layout={'responsive'} />
                    </div>

                    <div className={styles.dot} />
                </Stack>
            </Stack>
        </section>
    );
};

export default Consumers;
