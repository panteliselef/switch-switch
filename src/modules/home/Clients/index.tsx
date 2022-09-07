import styles from './clients.module.scss';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import React from 'react';

import { clients } from '@modules/home/Clients/data';
import ExternalLink from '@helpers/ExternalLink';

const Client: React.FC<{ url: string; imageSrc: string; name: string; text: string }> = ({
    url,
    imageSrc,
    name,
    text,
}) => {
    return (
        <ExternalLink to={url}>
            <Stack className={styles.client} direction={'column'}>
                <div className={styles.logo_container}>
                    <Image alt={name} src={imageSrc} />
                </div>

                <p className={styles.client_name}>{name}</p>
                <p className={styles.client_desc}>{text}</p>
            </Stack>
        </ExternalLink>
    );
};

function Clients() {
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
                            {['Meet the legends', 'Meet the legends'].map((t, index) => (
                                <p key={index} className={'heading-2'}>
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </Stack>

            <div className={styles.grid}>
                {clients.map(({ name, text, url, logo }) => (
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
