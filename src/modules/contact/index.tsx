import React from 'react';
import Stack from '@layouts/Stack';
import teamStyles from '@modules/team/team.module.scss';
import styles from './contact.module.scss';
import Image from 'next/image';

import meeting from '@assets/2018_1.png';
import ExternalLink from '../../common/helpers/ExternalLink';
import classNames from 'classnames';

const Contact: React.FC = () => {
    return (
        <section
            id={'before-footer'}
            style={{
                background: '#EDECE7',
                position: 'relative',
                height: '100vh',
                color: 'var(--bg-color)',
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                style={{
                    position: 'absolute',
                    zIndex: '2',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                }}
            >
                <div
                    className={teamStyles.infinite_scrolling_text}
                    style={{
                        transform: 'translateY(-50%)',
                    }}
                >
                    <div className={teamStyles.infinite_scrolling_text__title}>
                        <div>
                            {['Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·'].map((t, index) => (
                                <p
                                    key={index}
                                    className={'heading-2'}
                                    style={{
                                        color: 'var(--bg-color)',
                                    }}
                                >
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </Stack>
            <div className={styles.grid}>
                <Stack direction={'column'} justifyContent={'flex-end'} gap={'10vw'}>
                    <p className={classNames('p-text-3', styles.cont)}>
                        Ready for lights-off? Ping, tweet, message or poke — and we will get back as soon as possible.
                    </p>

                    <Stack direction={'column'}>
                        <ExternalLink
                            className={'p-text-3'}
                            to={'hello@switchswitch.rs'}
                            type={'email'}
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            <Stack direction={'row'} alignItems={'center'} gap={'0.5vw'}>
                                <svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.640625 0.439941V11.0959H15.6683V0.439941H0.640625ZM14.1143 1.62394L8.15447 6.19003L2.19474 1.62394H14.1143ZM1.89294 9.91194V2.91628L8.15447 7.71384L14.4161 2.91628V9.91194H1.89294Z"
                                        fill="black"
                                    />
                                </svg>

                                <p>hello@switchswitch.rs</p>
                            </Stack>
                        </ExternalLink>

                        <ExternalLink
                            className={'p-text-3'}
                            to={'+381 62 456 234'}
                            type={'phone'}
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            <Stack direction={'row'} alignItems={'center'} gap={'0.5vw'}>
                                <svg
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.44454 1.66115L2.8781 0.474121L6.32463 4.46998L4.96234 5.65042C4.83673 6.46188 7.10296 8.99154 7.76489 8.87257C7.80792 8.8256 9.09878 7.70748 9.09878 7.70748L12.5908 11.7176C12.5908 11.7176 11.2075 12.9115 11.1622 12.9492C7.19003 16.1936 -2.38303 5.13575 1.44454 1.66115ZM2.73011 2.11874L2.21856 2.56229C-0.406519 4.94708 7.66125 14.2722 10.4254 12.0143L10.9115 11.5958L8.982 9.37997L8.46816 9.82162C6.88487 11.1864 2.56336 6.25476 4.14697 4.78343L4.65039 4.34632L2.73011 2.11874Z"
                                        fill="black"
                                    />
                                </svg>

                                <p>+381 62 456 234</p>
                            </Stack>
                        </ExternalLink>
                    </Stack>
                </Stack>

                <div className={styles.image_cont}>
                    <Image layout={'fill'} src={meeting} objectFit={'cover'} />
                </div>

                <Stack direction={'column'} justifyContent={'flex-end'} gap={'4vw'} alignItems={'center'}>
                    <p className={classNames('p-text-3', styles.cont)}>
                        Venizelosova 29G/4 <br />
                        11000 Belgrade, Dorcol <br />
                        Serbia
                    </p>

                    <Stack
                        direction={'column'}
                        style={{
                            width: '80%',
                        }}
                    >
                        <ExternalLink
                            className={'p-text-3'}
                            to={'+381 62 456 234'}
                            type={'phone'}
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            <Stack direction={'row'} alignItems={'center'} gap={'0.9vw'}>
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="13" cy="13" r="13" fill="black" />
                                    <g clipPath="url(#clip0_330_274)">
                                        <path
                                            d="M12.997 18.2857C12.997 18.2857 16.6637 14.6304 16.6637 11.8571C16.6637 10.8342 16.2773 9.85308 15.5897 9.12973C14.9021 8.40638 13.9695 8 12.997 8C12.0245 8 11.0919 8.40638 10.4043 9.12973C9.71663 9.85308 9.33032 10.8342 9.33032 11.8571C9.33032 14.6304 12.997 18.2857 12.997 18.2857ZM12.997 13.7857C12.5108 13.7857 12.0444 13.5825 11.7006 13.2209C11.3568 12.8592 11.1637 12.3686 11.1637 11.8571C11.1637 11.3457 11.3568 10.8551 11.7006 10.4934C12.0444 10.1318 12.5108 9.92857 12.997 9.92857C13.4832 9.92857 13.9495 10.1318 14.2934 10.4934C14.6372 10.8551 14.8303 11.3457 14.8303 11.8571C14.8303 12.3686 14.6372 12.8592 14.2934 13.2209C13.9495 13.5825 13.4832 13.7857 12.997 13.7857Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_330_274">
                                            <rect width="8" height="10.2857" fill="white" transform="translate(9 8)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p>View on maps</p>
                            </Stack>
                        </ExternalLink>
                    </Stack>
                </Stack>
            </div>
        </section>
    );
};

export default Contact;
