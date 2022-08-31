import { NextPage } from 'next';
import Wonders from '@modules/home/Wonders';
import Features from '@modules/home/Features';
import Clients from '@modules/home/Clients';
import Products from '@modules/home/Products';

const Home: NextPage = () => {
    return (
        <>
            <Wonders />
            <Features />
            <Products />
            <Clients />
        </>
    );
};

export default Home;
