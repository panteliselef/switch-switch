import React, { useEffect } from 'react';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import img from '@assets/switch1.png';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';

const Footer: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            const id = '#footer';
            gsap.set(id, { yPercent: -50 });

            const uncover = gsap.timeline();

            uncover.to(id, {
                yPercent: 0,
                ease: 'none',
                scrollTrigger: {
                    scroller: `.${LOCOMOTIVE_CONTAINER_CLASS}`,
                    trigger: '#before-footer',
                    start: 'bottom bottom',
                    scrub: true,
                },
            });
        }, 1000);
    }, []);

    return (
        <footer
            style={{
                width: '100vw',
                overflow: 'hidden',
                padding: '13.88889vw 0 3.55556vw',
            }}
        >
            <Stack
                id={'footer'}
                direction={'column'}
                style={{
                    padding: '0 8.33333vw 0',
                }}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack
                        direction={'column'}
                        gap={'1.80556vw'}
                        style={{
                            flex: '0 0 500px',
                        }}
                    >
                        <h3 className={'heading-3'}>Our story</h3>
                        <p className={'p-text-2'}>
                            The story behind switch switch is one of the exploration, creativity and curiosity.{' '}
                        </p>
                    </Stack>

                    <div
                        data-scroll={''}
                        style={{
                            flex: '1 1 auto',
                            maxWidth: '600px',
                            aspectRatio: '3/2',
                            position: 'relative',
                        }}
                    >
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

                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        style={{
                            maxWidth: '700px',
                            flex: '1 1 auto',
                        }}
                    >
                        <Stack
                            direction={'column'}
                            style={{
                                lineHeight: '2.08333vw',
                                fontSize: 'var(--font-s-p)',
                            }}
                        >
                            {/*TODO: Use external link component*/}
                            <a>
                                Venizelosova 29G/4 <br /> Belgrade, 11000 <br /> Dorcol
                            </a>

                            <a>hello@switchswitch.rs</a>
                        </Stack>

                        <Stack
                            direction={'column'}
                            style={{
                                lineHeight: '2.08333vw',
                                fontSize: 'var(--font-s-p)',
                            }}
                        >
                            <a>Work</a>
                            <a>Products</a>
                            <a>Our Story</a>
                            <a>Schedule</a>
                        </Stack>

                        <Stack
                            direction={'column'}
                            style={{
                                lineHeight: '2.08333vw',
                                fontSize: 'var(--font-s-p)',
                            }}
                        >
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
