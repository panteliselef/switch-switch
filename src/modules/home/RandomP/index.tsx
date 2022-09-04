import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from './randomP.module.scss';

const RandomP = () => {
    return (
        <section>
            <Stack direction={'row'} justifyContent={'center'}>
                <p className={classNames('p-text-2', 'text-center', styles.lel)}>
                    The architectural studios we work are prominent professionals who want to cultivate and seek support
                    elevating their designs and architecural endeavors — both visually and through physical products.
                </p>
            </Stack>
        </section>
    );
};

export default RandomP;
