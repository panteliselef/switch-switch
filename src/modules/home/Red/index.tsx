import Stack from '@layouts/Stack';
import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { LOCOMOTIVE_CONTAINER_CLASS } from '@layouts/LocomotiveLayout';
import styles from './red.module.scss';
import { useDebouncedWidth } from '@hooks/useWindowDimensions';
import { breakpoints } from '@utils/breakpoints';

function Red() {
    const w = useDebouncedWidth();
    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: `#ele`,
                    scroller: w > breakpoints.laptop ? `.${LOCOMOTIVE_CONTAINER_CLASS}` : '',
                    start: 'top top',
                    end: '+=400vh',
                    pin: true,
                    scrub: true,
                },
            })
                .to(
                    `#look`,
                    {
                        ease: 'linear',
                        y: '30vh',
                    },
                    'timeline',
                )
                .to(
                    `#for_you`,
                    {
                        ease: 'linear',
                        y: '-30vh',
                    },
                    '<',
                );
        }, 1000);
    }, [w]);
    return (
        <section
            style={{
                position: 'relative',
            }}
            id={'ele'}
        >
            <Stack direction={'column'} justifyContent={'space-between'} className={styles.container}>
                <p id={'look'}>Take a look at what</p>

                <Stack direction={'row'} className={styles.red_container} justifyContent={'center'}>
                    <div className={styles.line} />

                    <Stack direction={'row'} className={styles.red_dot} justifyContent={'center'} alignItems={'center'}>
                        <p
                            className={'text-center'}
                            style={{
                                width: '10vw',
                            }}
                        >
                            Our Products
                        </p>
                    </Stack>
                </Stack>
                <p
                    id={'for_you'}
                    style={{
                        alignSelf: 'flex-end',
                        textAlign: 'right',
                    }}
                >
                    we can do for you
                </p>
            </Stack>
        </section>
    );
}

export default Red;
