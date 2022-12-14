import { NextPage } from 'next';
import Hero from '@modules/story/Hero';
import Dreamers from '@modules/story/Dreamers';
import Timeline from '@modules/story/Timeline';
import Light from '@modules/story/Light';
import Team from '@modules/story/Team/Team';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import Footer from '@components/Footer';

const Story: NextPage = () => {
    return (
        <LocomotiveLayout>
            <Hero />
            <Dreamers />
            <Timeline />
            <Light />
            <Team />
            <Footer />
        </LocomotiveLayout>
    );
};

export default Story;
