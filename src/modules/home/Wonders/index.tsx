import Stack from '@layouts/Stack';
import styles from './wonders.module.scss';
import classNames from 'classnames';

function Wonders() {
    return (
        <section>
            <Stack direction={'column'} alignItems={'center'} gap={'10vw'}>
                <p className={classNames(styles.wonders_text, 'text-center')}>
                    Wonders of light began with one single touch
                </p>

                <p
                    data-scroll={''}
                    data-scroll-speed={'1'}
                    className={classNames('p-text-2', 'text-center', styles.max_width)}
                >
                    The story behind our name is one of exploration, creativity and curiosity
                </p>
            </Stack>
            <Stack direction={'row'}>
                <p
                    data-scroll={''}
                    data-scroll-speed={'1'}
                    style={{
                        padding: '4vw',
                    }}
                    className={classNames('p-text-2', styles.max_width)}
                >
                    The Switch Switch aesthetic aims for harmony between space and mind with a personal touch.
                </p>
            </Stack>
        </section>
    );
}

export default Wonders;
