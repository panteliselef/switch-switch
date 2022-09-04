import React from 'react';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import styles from './team.module.scss';

import team from '@assets/2018_1.png';
import Link from 'next/link';
import type { TeamMemberType } from '../../pages/team/[name]';

const TeamMember: React.FC<TeamMemberType> = ({ bio, name, role }) => {
    return (
        <section
            id={'before-footer'}
            style={{
                position: 'relative',
                height: '100vh',
            }}
        >
            <Stack direction={'row'} className={styles.title_cont} justifyContent={'center'}>
                <p className={'text-center'}>{name}</p>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                style={{
                    position: 'absolute',
                    zIndex: '2',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                }}
            >
                <div className={styles.infinite_scrolling_text}>
                    <div className={styles.infinite_scrolling_text__title}>
                        <div>
                            {[name, name].map((t, index) => (
                                <p key={index} className={'heading-2'}>
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </Stack>
            <Stack direction={'row'} className={styles.job_cont} alignItems={'center'} justifyContent={'center'}>
                <p className={'p-text-3'}>{role}</p>
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={'center'}
                gap={'3vw'}
                style={{
                    zIndex: 9,
                    position: 'relative',
                    padding: '8vw 6vw',
                    height: '100%',
                    width: '100%',
                }}
            >
                <Stack direction={'row'} className={styles.back_cont} alignItems={'flex-end'}>
                    <Link href={'/story'}>
                        <a
                            style={{
                                textDecoration: 'underline',
                                fontSize: '1.5vw',
                            }}
                        >
                            Go Back
                        </a>
                    </Link>
                </Stack>

                <div className={styles.img_cont}>
                    <Image src={team} objectFit={'cover'} layout={'fill'} />
                </div>

                <p
                    className={'p-text-3'}
                    style={{
                        width: '25vw',
                        paddingTop: '5vw',
                        flex: '0 0 auto',
                    }}
                >
                    {bio}
                </p>
            </Stack>
        </section>
    );
};

export default TeamMember;
