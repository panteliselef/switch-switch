import Stack from '@layouts/Stack';
import React from 'react';
import styles from './features.module.scss';

const Feature: React.FC<{ speed?: number; number: string; title: string; text: string }> = ({
    speed,
    number,
    title,
    text,
}) => {
    return (
        <div data-scroll={''} data-scroll-speed={speed || '1'} className={styles.feature}>
            <p className={styles.number}>{number}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

function Features() {
    return (
        <Stack
            direction={'row'}
            justifyContent={'center'}
            style={{
                position: 'relative',
            }}
        >
            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '-5vw',
                    left: '20vw',
                }}
            >
                Reveal the messages with light
            </p>

            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '10vw',
                    left: '50vw',
                }}
            >
                Feel the light
            </p>

            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '30vw',
                    left: '10vw',
                }}
            >
                Our products will light to your life
            </p>

            <p
                className={'p-text-2'}
                style={{
                    position: 'absolute',
                    color: 'black',
                    top: '50vw',
                    right: '10vw',
                }}
            >
                Come to our store
            </p>

            <Stack className={styles.container} direction={'column'}>
                <Feature
                    number={'01'}
                    title={'Design for Emotions'}
                    text={`We're passionate about doing the best digital innovation we can and pushing new technology to its limits. And we achieve results we're proud of.`}
                />

                <Feature
                    speed={2}
                    number={'02'}
                    title={'Practical Design'}
                    text={`Having a beautiful home is an extraordinary achievement in your lifetime, but having a beautiful and practical home is the key to a balanced life. At Switch Switch we provide the perfect balance between design and practicality.`}
                />

                <Feature
                    number={'03'}
                    title={'Elevate your Senses'}
                    text={`Choosing a swith is not easy, but the right choice is one that proves itself to be just that every day. That’s why with us, you’ll only find switches that excel time and time again in design, details, performance and technology. We offer the best in every category, our product range gets the space it needs and we’ll take ample time for a good conversation.`}
                />

                <Feature
                    speed={2}
                    number={'04'}
                    title={'For a holistic culture'}
                    text={`Our key component is a personal designated touch. You cannot take care of someone with a single discipline. 
We defend the idea that every approach is generalized and illuminate the paths.
 Our approach is global and does we do not hesitate to adapt to stictly your needs. 
We want you to be where you deserve to be. Home.`}
                />
            </Stack>
        </Stack>
    );
}

export default Features;
