import { NextPage } from 'next';
import Wonders from '@modules/home/Wonders';
// import Features from '@modules/home/Features';
import Clients from '@modules/home/Clients';
// import Products from '@modules/home/Products';
// import SingleSwitch from '@modules/home/SingleSwitch';
// import Stack from '@layouts/Stack';
// import classNames from 'classnames';
// import Red from '@modules/home/Red';
// import Reel from '@modules/home/Reel';

const Home: NextPage = () => {
    return (
        <>
            <Wonders />
            {/*<Features />*/}
            {/*<Reel />*/}
            {/*<div*/}
            {/*    style={{*/}
            {/*        height: '10vw',*/}
            {/*    }}*/}
            {/*></div>*/}
            {/*<Red />*/}
            {/*<Products />*/}
            {/*<section>*/}
            {/*    <Stack direction={'row'} justifyContent={'center'}>*/}
            {/*        <p*/}
            {/*            className={classNames('p-text-2', 'text-center')}*/}
            {/*            style={{*/}
            {/*                width: '50vw',*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            The architectural studios we work are prominent professionals who want to cultivate and seek*/}
            {/*            support elevating their designs and architecural endeavors — both visually and through physical*/}
            {/*            products.*/}
            {/*        </p>*/}
            {/*    </Stack>*/}
            {/*</section>*/}
            {/*<SingleSwitch />*/}
            <Clients />
        </>
    );
};

export default Home;
