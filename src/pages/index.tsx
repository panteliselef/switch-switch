import { NextPage } from 'next';
import Wonders from '@modules/home/Wonders';
import Features from '@modules/home/Features';

const Home: NextPage = () => {
    return (
        <>
            <Wonders />
            <Features />
        </>
    );
};

export default Home;
