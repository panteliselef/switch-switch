import { NextPage } from 'next';
import Hero from '@modules/home/hero';

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <section data-scroll-section>
                <div
                    style={{
                        width: '100%',
                        height: '300px',
                        background: 'red',
                    }}
                >
                    wowwo
                </div>
            </section>
            <section data-scroll-section>
                <div
                    style={{
                        width: '100%',
                        height: '300px',
                        background: 'blue',
                    }}
                >
                    wowwo
                </div>
            </section>
            <section data-scroll-section>
                <div
                    style={{
                        width: '100%',
                        height: '300px',
                        background: 'green',
                    }}
                >
                    wowwo
                </div>
            </section>
        </>
    );
};

export default Home;
