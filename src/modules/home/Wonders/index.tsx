import Stack from '@layouts/Stack';
import styles from './wonders.module.scss';
import classNames from 'classnames';
import Plugs from '@modules/home/Plugs';

function Wonders() {
    return (
        <section>
            <Stack direction={'column'} alignItems={'center'} gap={'10vw'}>
                <Stack direction={'column'} data-scroll={''} data-scroll-speed={'-1'}>
                    <p className={classNames('p-text-1', 'text-center', styles.max_width)}>Welcome</p>

                    <p className={classNames('p-text-1', 'text-center', styles.max_width)}>Home</p>
                </Stack>

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
            <Plugs />
        </section>
    );
}

export default Wonders;
