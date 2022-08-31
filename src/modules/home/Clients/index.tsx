import styles from './clients.module.scss';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import React from 'react';

import svg from '@assets/AleksandarVujinovic.svg';

const Client: React.FC<{ imageSrc: string; name: string; text: string }> = ({ imageSrc, name, text }) => {
    return (
        <Stack className={styles.client} direction={'column'}>
            <div className={styles.logo_container}>
                <Image src={imageSrc} />
            </div>

            <p className={styles.client_name}>{name}</p>
            <p className={styles.client_desc}>{text}</p>
        </Stack>
    );
};

function Clients() {
    return (
        <section
            id={'before-footer'}
            style={{
                background: 'var(--text-color)',
            }}
        >
            <div className={styles.grid}>
                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />

                <Client
                    imageSrc={svg}
                    name={`1102 Design Space`}
                    text={`Belgrade-based architectural and interior design visualisation studio founded by architects Kristina Milanović and Branko Milanović with backgrounds in the architectural and interior design, which helps us greatly while producing visualisations.`}
                />
            </div>
        </section>
    );
}

export default Clients;
