import React from 'react';
import Stack from '@layouts/Stack';
import Image from 'next/image';
import styles from './team.module.scss';
import Link from 'next/link';
import type { TeamMemberType } from '../../pages/team/[name]';
import classNames from 'classnames';
import alexPic from '@assets/team/alex.png';
import dusan from '@assets/team/dusan.png';
import milos from '@assets/team/milos.png';
import nikola from '@assets/team/nikola.png';

const a = {
    alex: alexPic,
    dusan,
    milos,
    nikola,
};

const TeamMember: React.FC<TeamMemberType> = ({ next, urlPath, bio, name, role }) => {
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
                className={styles.front}
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
                    <Link href={`/team/${next}`}>
                        <a
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            Go Next
                        </a>
                    </Link>
                </Stack>

                <div className={styles.img_cont}>
                    <Image
                        objectPosition={'top center'}
                        src={a[urlPath]}
                        quality={100}
                        alt={`team member ${name}`}
                        objectFit={'cover'}
                        layout={'fill'}
                    />
                </div>

                <p className={classNames('p-text-3', styles.bio)}>{bio}</p>
            </Stack>
        </section>
    );
};

export default TeamMember;
