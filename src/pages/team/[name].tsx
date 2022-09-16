import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import TeamMember from '@modules/team';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import Footer from '@components/Footer';
import getT from 'next-translate/getT';

export type TeamMemberType = {
    urlPath: string;
    name: string;
    bio: string;
    role: string;
    next: string;
};

const teamPaths = [
    {
        urlPath: 'alex',
    },
    {
        urlPath: 'dusan',
    },

    {
        urlPath: 'milos',
    },

    {
        urlPath: 'nikola',
    },
];

// const useTeamMembers = () => {
//     const { t } = useTranslation('team-members');
//     return useMemo(
//         () => [
//             {
//                 urlPath: 'alex',
//                 name: 'Alex Tselekidis',
//                 role: t('teamMember1Role'),
//                 bio: t('teamMember1Bio'),
//                 next: 'nikola',
//             },
//             {
//                 urlPath: 'dusan',
//                 name: 'Dušan Nešić',
//                 role: t('teamMember2Role'),
//                 bio: t('teamMember2Bio'),
//                 next: 'milos',
//             },
//
//             {
//                 urlPath: 'milos',
//                 name: 'Miloš Petrović',
//                 next: 'alex',
//                 role: t('teamMember3Role'),
//                 bio: t('teamMember3Bio'),
//             },
//
//             {
//                 urlPath: 'nikola',
//                 name: 'Nikola Jovanović',
//                 next: 'dusan',
//                 role: t('teamMember4Role'),
//                 bio: t('teamMember4Bio'),
//             },
//         ],
//         [t],
//     );
// };

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    if (locales) {
        return {
            paths: locales
                .map((locale) => {
                    return teamPaths.map((a) => ({
                        params: {
                            name: a.urlPath,
                        },
                        locale,
                    }));
                })
                .flat(),
            fallback: false, // can also be true or 'blocking'
        };
    }

    return {
        paths: teamPaths.map((a) => ({
            params: {
                name: a.urlPath,
            },
        })),
        fallback: false, // can also be true or 'blocking'
    };
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
    const t = await getT(locale, 'team-members');

    const team = [
        {
            urlPath: 'alex',
            name: 'Alex Tselekidis',
            role: t('teamMember1Role'),
            bio: t('teamMember1Bio'),
            next: 'nikola',
        },
        {
            urlPath: 'dusan',
            name: 'Dušan Nešić',
            role: t('teamMember2Role'),
            bio: t('teamMember2Bio'),
            next: 'milos',
        },

        {
            urlPath: 'milos',
            name: 'Miloš Petrović',
            next: 'alex',
            role: t('teamMember3Role'),
            bio: t('teamMember3Bio'),
        },

        {
            urlPath: 'nikola',
            name: 'Nikola Jovanović',
            next: 'dusan',
            role: t('teamMember4Role'),
            bio: t('teamMember4Bio'),
        },
    ];

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const teamMember = team.find((t) => t.urlPath === params?.name)!;

    return {
        // Passed to the page component as props
        props: { teamMember },
    };
}

const TeamPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ teamMember }) => {
    return (
        <LocomotiveLayout>
            <TeamMember {...teamMember} />
            <Footer />
        </LocomotiveLayout>
    );
};

export default TeamPage;
