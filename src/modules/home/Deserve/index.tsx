import React from 'react';
import Stack from '@layouts/Stack';

const Deserve: React.FC = () => {
    return (
        <section
            style={{
                transform: 'translateY(-23vh)',
            }}
        >
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} gap={100}>
                <p
                    className={'heading-2'}
                    style={{
                        textAlign: 'center',
                        maxWidth: '60vw',
                    }}
                >
                    <span className={'font-light'}>Be where</span> <span className={'font-normal'}>you deserve</span>{' '}
                    <span className={'font-medium'}>to be.</span>
                </p>

                <p
                    data-scroll=""
                    data-scroll-speed="1"
                    className={'p-text-1'}
                    style={{
                        textAlign: 'center',
                        margin: 'auto',
                        maxWidth: '350px',
                    }}
                >
                    We have crafted our company with the main focus to embrace
                </p>
            </Stack>
        </section>
    );
};

export default Deserve;
