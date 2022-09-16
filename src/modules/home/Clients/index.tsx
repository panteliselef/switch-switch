import styles from './clients.module.scss';
import Stack from '@layouts/Stack';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { clients } from '@modules/home/Clients/data';
import ExternalLink from '@helpers/ExternalLink';
import useTranslation from 'next-translate/useTranslation';

const Client: React.FC<{ url: string; imageSrc: string | StaticImageData; name: string; text: string }> = ({
    url,
    imageSrc,
    name,
    text,
}) => {
    return (
        <ExternalLink to={url}>
            <Stack className={styles.client} direction={'column'}>
                {imageSrc && (
                    <div className={styles.logo_container}>
                        <Image layout={'fill'} objectFit={'contain'} alt={name} src={imageSrc} />
                    </div>
                )}

                <p className={styles.client_name}>{name}</p>
                <p className={styles.client_desc}>{text}</p>
            </Stack>
        </ExternalLink>
    );
};

function Clients() {
    const { t } = useTranslation('homepage');
    return (
        <section
            id={'before-footer'}
            style={{
                background: 'var(--text-color)',
                position: 'relative',
            }}
        >
            <Stack
                direction={'row'}
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: 0,
                    top: 0,
                }}
            >
                <div className={styles.infinite_scrolling_text}>
                    <div className={styles.infinite_scrolling_text__title}>
                        <div>
                            {Array(4)
                                .fill(t('legendsTitle'))
                                .map((t, index) => (
                                    <p key={index} className={'heading-2'}>
                                        {t}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </Stack>

            <div className={styles.grid}>
                {clients
                    // .sort((a) => {
                    //     if (a.text) return -1;
                    //     return 1;
                    // })
                    .map(({ name, text, url, logo }) => (
                        <Client key={name} imageSrc={logo} url={url} name={name} text={text} />
                    ))}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>{' '}*/}
                {/*<Client*/}
                {/*    imageSrc={svg}*/}
                {/*    name={`1102 Design Space`}*/}
                {/*    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}*/}
                {/*/>*/}
            </div>
        </section>
    );
}

export default Clients;
