import React, { useMemo } from 'react';
import Stack from '@layouts/Stack';
import Link from 'next/link';

import whatWeDo from '@assets/what_we_do.svg';

import styles from './consumers.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

const Consumers: React.FC = () => {
    const { t } = useTranslation('history');
    const links = useMemo(
        () => [
            {
                text: t('whatWeDoItem1'),
                link: '/',
            },

            {
                text: t('whatWeDoItem2'),
                link: '/',
            },

            {
                text: t('whatWeDoItem3'),
                link: '/',
            },
        ],
        [t],
    );

    return (
        <section>
            <Stack className={styles.consumers_outer_cont}>
                {links.map((d) => (
                    <div
                        key={d.text}
                        style={{
                            height: '100%',
                        }}
                    >
                        <Link href={d.link}>
                            <a className={classNames(styles.link, styles.item)}>
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
                    className={classNames(styles.item)}
                    style={{
                        padding: '2rem 0',
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
