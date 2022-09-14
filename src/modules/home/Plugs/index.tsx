import { Suspense, FC } from 'react';
import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from '@modules/home/Wonders/wonders.module.scss';
import { useInView } from 'react-intersection-observer';

import plugStyles from './plugs.module.scss';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

const PlugsCanvas = dynamic(() => import('@modules/home/Plugs/PlugsCanvas'), {
    ssr: false,
    suspense: true,
});

const PlugsInner: FC = () => {
    const { t } = useTranslation('homepage');
    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '-25% 0px 0px 0px',
        threshold: 0,
    });

    return (
        <section ref={ref} className={plugStyles.glb_container}>
            <Stack
                direction={'row'}
                style={{
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <p
                    data-scroll={''}
                    data-scroll-speed={'1'}
                    className={classNames('p-text-2', styles.max_width, plugStyles.desc)}
                >
                    {t('leftParagraph')}
                </p>
            </Stack>

            <PlugsCanvas shouldPlay={inView} />
        </section>
    );
};

const Plugs: FC = () => {
    return (
        <Suspense fallback={<section className={plugStyles.glb_container}></section>}>
            <PlugsInner />
        </Suspense>
    );
};

export default Plugs;
