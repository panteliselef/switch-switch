import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import TeamMember from '@modules/team';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import Footer from '@components/Footer';

export type TeamMemberType = {
    urlPath: string;
    name: string;
    bio: string;
    role: string;
};

const team: TeamMemberType[] = [
    {
        urlPath: 'alex',
        name: 'Alex Tselekidis',
        bio:
            'Alex is an experienced Art Director, filmmaker, UI/UX designer with over 750 commercials, short films, feature films and music videos, passionate about the digital presence of his clients. He supports Switch Switch in all the aspects of  brand, working on implementing superior marketing strategies, and inventing new approaches when it\n' +
            'comes to social media, tech and marketing platforms. He’s worked as an Art director for several renowned startups in San Francisco, California.',
        role: 'ART DIRECTOR',
    },
    {
        urlPath: 'dusan',
        name: 'Dušan Nešić',
        role: 'CEO & FOUNDER',
        bio: 'During the birth of our company our key moto was for you to experience the unseen. There comes our co-founder Dusan, that brings light into the darkness. Bringing immense energy and fire that brings pure drive to our brand resulting in an extremely personal approach, since this is one of the finest touches of your home, Dusan wants you to expereince every single touch that will bring back memories of the unseen. One touch is one experience. This is your home. This is SwitchSwtich.',
    },

    {
        urlPath: 'milos',
        name: 'Miloš Petrović',
        role: 'CEO & FOUNDER',
        bio: 'Creating a company requires vision and hope. The culmination of two energies have brought us to this day. Let us introduce you to our co-founder Milos. Since Milos was a child he was always fascinated by electricity and innovation resulting in extreme perfectionism that leads the ideology of our brand.',
    },

    {
        urlPath: 'nikola',
        name: 'Nikola Jovanović',
        role: 'SALES & TECH SUPPORT',
        bio:
            'Nikola comes from a familly in which hard work, perfectionism, production, resourcefulness, entrepreneurship is the key mentorship from his familly. In the field of electrical engineering\n' +
            'he sucks energy and transmits it to you. He doesn’t sell advice, emotions and feelings, he gifts them to you.',
    },
];

export async function getStaticPaths() {
    return {
        paths: team.map((a) => ({
            params: {
                name: a.urlPath,
            },
        })),
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const teamMember = team.find((t) => t.urlPath === context.params?.name)!;

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
