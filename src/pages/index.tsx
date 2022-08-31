import { NextPage } from 'next';
import Wonders from '@modules/home/Wonders';
import Features from '@modules/home/Features';
import Clients from '@modules/home/Clients';

const Home: NextPage = () => {
    return (
        <>
            <Wonders />
            <Features />
            <Clients />
        </>
    );
};

export default Home;
