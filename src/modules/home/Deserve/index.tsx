import React from 'react';
import Stack from '@layouts/Stack';

const Deserve: React.FC = () => {
    return (
        <section>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} gap={100}>
                <p
                    className={'heading-3'}
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                    }}
                >
                    Be where <b>you deserve to be.</b>
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
