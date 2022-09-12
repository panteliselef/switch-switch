import Stack from '@layouts/Stack';
import styles from './wonders.module.scss';
import classNames from 'classnames';
// import Plugs from '@modules/home/Plugs';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { useEffect } from 'react';
import { breakpoints } from '@utils/breakpoints';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import { gsap } from 'gsap/dist/gsap';
import SwitchAnimation from "@modules/home/SwitchAnimation";

function Wonders() {
    const w = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#w`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: w > breakpoints.laptop ? 'top 50%' : 'top 80%',
                    end: '+=1000vh',
                    scrub: true,
                },
            }).to(
                document.querySelectorAll(`.${styles.wonders_text}`),
                {
                    ease: 'linear',
                    color: '#fff',
                    stagger: 1,
                },
                '<',
            );
        }, 1000);
    }, [w]);
    return (
        <section>
            <Stack direction={'column'} alignItems={'center'} gap={'10vw'}>
                <Stack direction={'column'} data-scroll={''} data-scroll-speed={'-1'}>
                    <p className={classNames('p-text-1', 'text-center', styles.max_width)}>Welcome</p>

                    <p className={classNames('p-text-1', 'text-center', styles.max_width)}>Home</p>
                </Stack>

                {/*<p className={classNames(styles.wonders_text)}>Wonders of light began with one single touch</p>*/}
                <Stack direction={'column'} id={'w'}>
                    <p className={classNames(styles.wonders_text)}>Wonders</p>
                    <p className={classNames(styles.wonders_text)}>of light</p>
                    <p className={classNames(styles.wonders_text)}>began with</p>
                    <p className={classNames(styles.wonders_text)}>one single</p>
                    <p className={classNames(styles.wonders_text)}>touch</p>
                </Stack>

                <p
                    data-scroll={''}
                    data-scroll-speed={'1'}
                    className={classNames('p-text-2', 'text-center', styles.max_width)}
                >
                    The story behind our name is one of exploration, creativity and curiosity
                </p>
            </Stack>
            <SwitchAnimation />
            {/*<Plugs />*/}
        </section>
    );
}

export default Wonders;
