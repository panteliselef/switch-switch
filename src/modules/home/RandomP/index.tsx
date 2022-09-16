import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from './randomP.module.scss';
import useTranslation from 'next-translate/useTranslation';

const RandomP = () => {
    const { t } = useTranslation('homepage');
    return (
        <section>
            <Stack direction={'row'} justifyContent={'center'}>
                <p className={classNames('p-text-2', 'text-center', styles.lel)}>{t('centerParagraph2')}</p>
            </Stack>
        </section>
    );
};

export default RandomP;
