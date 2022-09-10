import React from 'react';
import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from './Deserve.module.scss';

const Deserve: React.FC = () => {
    return (
        <section
            style={{
                transform: 'translateY(-23vh)',
            }}
        >
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} gap={100}>
                <p className={classNames('heading-2', styles.deserve_cont)}>
                    <span className={'font-light'}>Be where</span>
                    <span className={'font-normal'}>you deserve</span>
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
