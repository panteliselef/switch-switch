import { NextPage } from 'next';
import Hero from '@modules/history/hero';
import GalleryCollection from '@modules/history/GalleryCollection';
import InfiniteScrollText from '@modules/history/InfiniteScrollText';
import Office from '@modules/history/Office';
import Showroom from '@modules/history/Showroom';
import Deserve from '@modules/history/Deserve';
import VisitUs from '@modules/history/VisitUs';
import Coffee from '@modules/history/Coffee';
import Consumers from '@modules/history/Consumers';
import Quality from '@modules/history/Quality';
import Footer from '@components/Footer';
import LocomotiveLayout from '@layouts/LocomotiveLayout';

const History: NextPage = () => {
    return (
        <LocomotiveLayout>
            <Hero />

            <GalleryCollection />

            <Office />

            <InfiniteScrollText texts={['A place for creativity', 'A place for creativity']} />

            <Showroom />

            <Deserve />

            <Consumers />

            <Quality />

            <VisitUs />

            <Coffee />
            <Footer />
        </LocomotiveLayout>
    );
};

export default History;
