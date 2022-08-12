import React from 'react';
import Stack from '@layouts/Stack';

const Coffee: React.FC = () => {
    return (
        <section>
            <Stack
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={100}
                style={{
                    height: '100vh',
                }}
            >
                <p
                    data-scroll
                    data-scroll-speed="1"
                    className={'heading-3'}
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                    }}
                >
                    Or just <br />
                    <b>for a coffee.</b>
                </p>

                <svg width="199" height="183" viewBox="0 0 199 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M82.9168 178.562C51.4085 178.562 23.6314 157.003 16.1689 126.324L4.146 79.0615H161.688L150.079 126.324C142.202 157.003 114.425 178.562 82.9168 178.562Z"
                        stroke="#EDECE7"
                        strokeWidth="8.29167"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M161.688 79.0615H169.979C183.661 79.0615 194.854 90.2553 194.854 103.937C194.854 117.618 183.661 128.812 169.979 128.812H149.25"
                        stroke="#EDECE7"
                        strokeWidth="8.29167"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M62.1877 58.3327V41.7494C62.1877 34.7014 67.5773 29.3119 74.6252 29.3119C81.6732 29.3119 87.0627 23.9223 87.0627 16.8743V0.291016"
                        stroke="#EDECE7"
                        strokeWidth="8.29167"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M103.646 58.3327V41.7494C103.646 34.7014 109.036 29.3119 116.083 29.3119C123.131 29.3119 128.521 23.9223 128.521 16.8743V0.291016"
                        stroke="#EDECE7"
                        strokeWidth="8.29167"
                        strokeMiterlimit="10"
                    />
                </svg>
            </Stack>
        </section>
    );
};

export default Coffee;
