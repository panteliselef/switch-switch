import React, { MutableRefObject, useCallback, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';

import styles from './appMenu.module.scss';
import classNames from 'classnames';

const overlayPath = '.overlay__path';

const openMenu = (a: MutableRefObject<boolean>) => {
    const menuItems = document.querySelectorAll(`.${styles.menu__item}`);

    a.current = true;

    gsap.timeline({
        onStart() {
            window.locomotive.stop();
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
                duration: 0.1,
                ease: 'power4.in',
                attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
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
            window.locomotive.start();
            a.current = false;
        },
    })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        })
        .to(
            overlayPath,
            {
                duration: 0.8,
                ease: 'power4.in',
                attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' },
            },
            0,
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

    return (
        <>
            <button className={styles.button_close} onClick={click}>
                toggle
            </button>
            <div id={'nice'} className={classNames([styles.menu_wrap])}>
                <div className={styles.tiles}>
                    <div className={styles.tiles__line}>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>

                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                    </div>

                    <div className={styles.tiles__line}>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>

                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                    </div>

                    <div className={styles.tiles__line}>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={classNames([styles.tiles__line_img, styles.tiles__line_img__large])}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>

                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                        <div
                            className={styles.tiles__line_img}
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80)',
                            }}
                        ></div>
                    </div>
                </div>
                <nav className={styles.menu}>
                    <a className={styles.menu__item}>
                        <span className={styles.menu__item_tiny}>always</span>
                        <span className={styles.menu__item_text}>bold</span>
                    </a>

                    <a className={styles.menu__item}>
                        <span className={styles.menu__item_tiny}>always</span>
                        <span className={styles.menu__item_text}>bold</span>
                    </a>

                    <a className={styles.menu__item}>
                        <span className={styles.menu__item_tiny}>always</span>
                        <span className={styles.menu__item_text}>bold</span>
                    </a>

                    <a className={styles.menu__item}>
                        <span className={styles.menu__item_tiny}>always</span>
                        <span className={styles.menu__item_text}>bold</span>
                    </a>
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
