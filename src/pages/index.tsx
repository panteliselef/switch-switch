import { NextPage } from 'next';
import Wonders from '@modules/home/Wonders';
import Features from '@modules/home/Features';
import Clients from '@modules/home/Clients';
import Products from '@modules/home/Products';
import SingleSwitch from '@modules/home/SingleSwitch';
import Red from '@modules/home/Red';
import Reel from '@modules/home/Reel';
import RandomP from '@modules/home/RandomP';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import Footer from '@components/Footer';
import Hero from '@modules/home/Hero';
import Carousel from '@modules/home/Carousel';

const Home: NextPage = () => {
    return (
        <>
            <LocomotiveLayout>
                <Hero />
                <Wonders />
                <Features />
                <Reel />
                <div
                    style={{
                        height: '10vw',
                    }}
                ></div>
                <Red />
                <Products />
                <Carousel />
                <RandomP />
                <SingleSwitch />
                <Clients />
                <Footer />
            </LocomotiveLayout>
        </>
    );
};

export default Home;
