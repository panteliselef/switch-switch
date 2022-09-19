import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';

import styles from './appMenu.module.scss';
import classNames from 'classnames';
import { AnimatedLogo } from '@components/AppMenu/SwitchLogo';
import Link from 'next/link';

import bg1L from '@assets/switch-78.jpeg';
import bg2L from '@assets/switch-61.jpeg';
import bg1S from '@assets/switch-63.jpeg';
import bg2S from '@assets/switch-82.jpeg';
import Image from 'next/image';
import ExternalLink from '@helpers/ExternalLink';
import useTranslation from 'next-translate/useTranslation';
import Stack from '@layouts/Stack';
import { useRouter } from 'next/router';

const overlayPath = '.overlay__path';

const openMenu = (a: MutableRefObject<boolean>) => {
    const menuItems = document.querySelectorAll(`.${styles.menu__item}`);

    a.current = true;

    gsap.timeline({
        onStart() {
            if (window.locomotive) window.locomotive.stop();
        },
        onComplete() {
            a.current = false;
        },
    })
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
        })
        .to(
            overlayPath,
            {
                duration: 0.8,
                ease: 'power4.in',
                attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
            },
            0,
        )
        .to(
            document.querySelectorAll(`.${styles.icon_burger}`),
            {
                alpha: 0,
            },
            0,
        )
        .to(
            document.querySelectorAll(`.${styles.icon_close}`),
            {
                alpha: 1,
            },
            0,
        )
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
                // frame.classList.add('frame--menu-open');

                document.querySelector(`.${styles.menu_wrap}`)?.classList.add(styles.menu_wrap__open);
            },
        })
        // now reveal
        .set(menuItems, {
            opacity: 0,
        })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        })
        // menu items translate animation
        .to(
            menuItems,
            {
                duration: 1.1,
                ease: 'power4',
                startAt: { y: 150 },
                y: 0,
                opacity: 1,
                stagger: 0.05,
            },
            '-=50%',
        );
};

const closeMenu = (a: MutableRefObject<boolean>) => {
    a.current = true;

    const menuItems = document.querySelectorAll(`.${styles.menu__item}`);

    gsap.timeline({
        onComplete() {
            if (window.locomotive) window.locomotive.start();
            a.current = false;
        },
    })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        })
        .to(
            document.querySelectorAll(`.${styles.icon_burger}`),
            {
                alpha: 1,
            },
            '<',
        )
        .to(
            document.querySelectorAll(`.${styles.icon_close}`),
            {
                alpha: 0,
            },
            '<',
        )
        .to(
            overlayPath,
            {
                duration: 0.8,
                ease: 'power4.in',
                attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' },
            },
            '<',
        )
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
                // frame.classList.remove('frame--menu-open');
                // menuWrap.classList.remove('menu-wrap--open');

                document.querySelector(`.${styles.menu_wrap}`)?.classList.remove(styles.menu_wrap__open);
            },
        })
        // now reveal
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' },
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
        })
        // menu items translate animation
        .to(
            menuItems,
            {
                duration: 0.3,
                ease: 'power2.in',
                y: 100,
                opacity: 0,
                stagger: -0.05,
            },
            0,
        );
};

const AppMenu: React.FC = () => {
    const { t } = useTranslation('menu');
    useEffect(() => {
        gsap.set(document.querySelectorAll(`.${styles.icon_close}`), {
            alpha: 0,
        });
    });

    const isOpen = useRef(false);

    const isAnimating = useRef(false);

    const click = useCallback(() => {
        if (isAnimating.current) return;
        console.log(isAnimating);
        if (!isOpen.current) {
            openMenu(isAnimating);
            isOpen.current = true;
        } else {
            closeMenu(isAnimating);
            isOpen.current = false;
        }
    }, []);

    const { asPath, locale } = useRouter();

    return (
        <>
            <Link href={'/'}>
                <a className={styles.logo_cont}>
                    <AnimatedLogo />
                </a>
            </Link>
            <Stack direction={'row'} gap={'2vw'} alignItems={'center'} className={styles.menu_cont}>
                <Link href={asPath} locale={locale === 'en' ? 'sr' : 'en'}>
                    {locale === 'en' ? <a>SRB</a> : <a>EN</a>}
                </Link>
                <button className={styles.button_close} onClick={click}>
                    <span
                        style={{
                            lineHeight: '1',
                            color: 'white',
                        }}
                    >
                        {t('burgerLabel')}
                    </span>
                    <div className={styles.icon_cont}>
                        <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.icon_close}
                        >
                            <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" strokeWidth="1.2"></line>
                            <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" strokeWidth="1.2"></line>
                        </svg>
                        <svg
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.icon_burger}
                        >
                            <line x1="18" y1="0.6" y2="0.6" strokeWidth="1.2"></line>
                            <line x1="18" y1="5.7167" y2="5.7167" strokeWidth="1.2"></line>
                            <line x1="18" y1="10.8334" y2="10.8334" strokeWidth="1.2"></line>
                        </svg>
                    </div>
                </button>
            </Stack>

            <div id={'nice'} className={classNames([styles.menu_wrap])}>
                <div className={styles.tiles}>
                    <div className={styles.tiles__line}>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1L} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1L} layout={'fill'} objectFit={'cover'} />
                        </div>

                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2S} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </div>

                    <div className={styles.tiles__line}>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2L} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2L} layout={'fill'} objectFit={'cover'} />
                        </div>

                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1S} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </div>

                    <div className={styles.tiles__line}>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1L} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1L} layout={'fill'} objectFit={'cover'} />
                        </div>

                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg1S} layout={'fill'} objectFit={'cover'} />
                        </div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        >
                            <Image src={bg2S} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </div>
                </div>
                <nav className={styles.menu}>
                    <Link href={'/'} prefetch={false}>
                        <a className={styles.menu__item} onClick={click}>
                            <span className={styles.menu__item_tiny}>{t('prefix')}</span>
                            <span className={styles.menu__item_text}>{t('homeLinkLabel')}</span>
                        </a>
                    </Link>

                    <Link href={'/story'} prefetch={false}>
                        <a className={styles.menu__item} onClick={click}>
                            <span className={styles.menu__item_tiny}>{t('prefix')}</span>
                            <span className={styles.menu__item_text}>{t('storyLinkLabel')}</span>
                        </a>
                    </Link>

                    <Link href={'/history'} prefetch={false}>
                        <a className={styles.menu__item} onClick={click}>
                            <span className={styles.menu__item_tiny}>{t('prefix')}</span>
                            <span className={styles.menu__item_text}>{t('historyLinkLabel')}</span>
                        </a>
                    </Link>

                    <Link href={'/#products'} prefetch={false}>
                        <a className={styles.menu__item} onClick={click}>
                            <span className={styles.menu__item_tiny}>{t('prefix')}</span>
                            <span className={styles.menu__item_text}>{t('productsLinkLabel')}</span>
                        </a>
                    </Link>

                    <Link href={'/contact'} prefetch={false}>
                        <a className={styles.menu__item} onClick={click}>
                            <span className={styles.menu__item_tiny}>{t('prefix')}</span>
                            <span className={styles.menu__item_text}>{t('contactLinkLabel')}</span>
                        </a>
                    </Link>
                    <ExternalLink to={'https://calendly.com/swsw'} className={styles.menu__item}>
                        <span className={styles.menu__item_tiny}>{t('prefix')}</span>
                        <span className={styles.menu__item_text}>{t('scheduleLinkLabel')}</span>
                    </ExternalLink>
                </nav>
            </div>
            <svg className={styles.overlay} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                    className="overlay__path"
                    vectorEffect="non-scaling-stroke"
                    d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                />
            </svg>
        </>
    );
};

export default AppMenu;
