import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, ContactShadows, Environment, Float, Lightformer } from '@react-three/drei';
import ScenePlugs from '@modules/home/Plugs/ScenePlugs';
import Stack from '@layouts/Stack';
import classNames from 'classnames';
import styles from '@modules/home/Wonders/wonders.module.scss';

const Plugs: React.FC = () => {
    return (
        <section
            style={{
                height: '100vh',
                transform: 'translateY(-38vh)',
                position: 'relative',
            }}
        >
            <Stack
                direction={'row'}
                style={{
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <p
                    data-scroll={''}
                    data-scroll-speed={'1'}
                    style={{
                        padding: '4vw',
                    }}
                    className={classNames('p-text-2', styles.max_width)}
                >
                    The Switch Switch aesthetic aims for harmony between space and mind with a personal touch.
                </p>
            </Stack>
            <Canvas shadows dpr={[1, 2]}>
                {/* <OrbitControls /> */}
                {/* <Test2 /> */}
                {/* <Anim /> */}
                <ScenePlugs />
                {/* <Model scale={20} position={[-0.5, -0.6, 0]} /> */}

                {/* <Porsche position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} /> */}
                <spotLight
                    position={[0, 15, 0]}
                    angle={0.3}
                    penumbra={1}
                    castShadow={true}
                    intensity={2}
                    shadow-bias={-0.0001}
                />
                <ambientLight intensity={0.2} />
                <ContactShadows
                    resolution={1024}
                    frames={1}
                    position={[0, -1.16, 0]}
                    scale={10}
                    blur={3}
                    opacity={1}
                    far={10}
                />

                {/* Renders contents "live" into a HDRI environment (scene.environment). */}
                <Environment frames={Infinity} resolution={256}>
                    {/* Ceiling */}
                    <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    {/* <MovingSpots /> */}
                    {/* Sides */}
                    <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                    <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                    <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
                    {/* Accent (red) */}
                    <Float speed={5} floatIntensity={2} rotationIntensity={2}>
                        <Lightformer
                            form="ring"
                            color="red"
                            intensity={1}
                            scale={10}
                            position={[-15, 4, -18]}
                            target={[0, 0, 0]}
                        />
                    </Float>
                    {/* Background */}
                    <mesh scale={100}>
                        <sphereGeometry args={[1, 64, 64]} />
                    </mesh>
                </Environment>

                <BakeShadows />
                {/* <CameraRig /> */}
            </Canvas>
        </section>
    );
};

export default Plugs;
