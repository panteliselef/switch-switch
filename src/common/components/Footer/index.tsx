import React, { useEffect } from 'react';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import img from '@assets/switch1.png';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

import styles from './footer.module.scss';

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
                        <Image src={img} objectFit={'cover'} layout={'fill'} />
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
                            {/*TODO: Use external link component*/}
                            <a>
                                Venizelosova 29G/4 <br /> Belgrade, 11000 <br /> Dorcol
                            </a>

                            <a>hello@switchswitch.rs</a>
                        </Stack>

                        <Stack direction={'column'}>
                            <a>Work</a>
                            <a>Products</a>
                            <a>Our Story</a>
                            <a>Schedule</a>
                        </Stack>

                        <Stack direction={'column'}>
                            <a>Instagram</a>
                            <a>Facebook</a>
                            <a>Linkedin</a>
                            <a>Twitter</a>
                        </Stack>
                    </Stack>

                    <Stack direction={'row'} alignItems={'flex-end'}>
                        <p className={'p-text-1'}>Go home</p>
                    </Stack>
                </Stack>
            </Stack>
        </footer>
    );
};

export default Footer;
