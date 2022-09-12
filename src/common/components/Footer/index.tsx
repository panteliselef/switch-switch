import React, { useEffect } from 'react';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import img from '@assets/footer.jpeg';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

import styles from './footer.module.scss';
import ExternalLink from '@helpers/ExternalLink';
import Link from 'next/link';

const Footer: React.FC = () => {
    const w = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            const id = '#footer';
            gsap.set(id, { yPercent: -50 });

            const uncover = gsap.timeline();

            uncover.to(id, {
                yPercent: 0,
                ease: 'none',
                scrollTrigger: {
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    trigger: '#before-footer',
                    start: 'bottom bottom',
                    scrub: true,
                },
            });
        }, 1000);
    }, [w]);

    return (
        <footer className={styles.footer_outer}>
            <Stack className={styles.footer} id={'footer'} direction={'column'}>
                <Stack direction={'row'} className={styles.row_col}>
                    <Stack className={styles.headers_cont} direction={'column'} gap={'1.80556vw'}>
                        <h3 className={'heading-3'}>Our story</h3>
                        <p className={'p-text-2'}>
                            The story behind switch switch is one of the exploration, creativity and curiosity.{' '}
                        </p>
                    </Stack>

                    <div data-scroll={''} className={styles.img_cont}>
                        <Image
                            quality={90}
                            alt={'employee with client'}
                            src={img}
                            objectFit={'cover'}
                            layout={'fill'}
                        />
                    </div>
                </Stack>

                <div
                    style={{
                        height: '1px',
                        background: 'var(--text-color)',
                        margin: '4.16667vw 0',
                    }}
                ></div>

                <Stack
                    gap={'2rem'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    style={{
                        flexWrap: 'wrap',
                    }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        style={{
                            maxWidth: '700px',
                            flex: '1 1 auto',
                            fontSize: 'var(--font-s-p)',
                            lineHeight: 'var(--font-lh-p)',
                        }}
                    >
                        <Stack direction={'column'}>
                            <ExternalLink
                                to={
                                    'https://www.google.com/maps/place/Switch+Switch/@44.8198326,20.4716844,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7be9da66d6e3:0x85883af2149b288c!8m2!3d44.8198326!4d20.4738731'
                                }
                            >
                                Venizelosova 29G/4 <br /> Belgrade, 11000 <br /> Dorcol
                            </ExternalLink>

                            <ExternalLink to={'hello@switchswitch.rs'} type={'email'}>
                                hello@switchswitch.rs
                            </ExternalLink>
                        </Stack>

                        <Stack direction={'column'}>
                            <Link href={'/history'}>
                                <a>History</a>
                            </Link>
                            <Link href={'/#products'}>
                                <a>Products</a>
                            </Link>
                            <Link href={'/story'}>
                                <a>Our Story</a>
                            </Link>
                            <a>Schedule</a>
                        </Stack>

                        <Stack direction={'column'}>
                            <ExternalLink to={'https://www.instagram.com/switchswitch.rs/'}>Instagram</ExternalLink>
                            <ExternalLink to={'https://www.facebook.com/switchswitch.rs'}>Facebook</ExternalLink>
                        </Stack>
                    </Stack>

                    <Stack direction={'row'} alignItems={'flex-end'}>
                        <Link href={'/'}>
                            <a className={'p-text-1'}>Go home</a>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </footer>
    );
};

export default Footer;
