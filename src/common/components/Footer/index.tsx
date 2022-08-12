import React from 'react';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import img from '@assets/switch1.png';

const Footer: React.FC = () => {
    return (
        <Stack
            direction={'column'}
            style={{
                padding: '13.88889vw 8.33333vw 5.55556vw',
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
                    <h1
                        style={{
                            fontWeight: '400',
                            fontSize: '130px',
                            lineHeight: 1.1,
                        }}
                    >
                        Our story
                    </h1>
                    <p className={'p-text-1'}>
                        The story behind switchswitch is one of the exploration, creativity and curiosity.{' '}
                    </p>
                </Stack>

                <div
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
    );
};

export default Footer;
