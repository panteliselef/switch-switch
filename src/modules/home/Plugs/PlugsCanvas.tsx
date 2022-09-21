import { ContactShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
// import ScenePlugs2 from '@modules/home/Plugs/Scene2';
// import { BlenderScene } from '@modules/home/Plugs/BlenderScene';
import { BlenderScene60 } from '@modules/home/Plugs/BlenderScene60';

const PlugsCanvas: React.FC<{ shouldPlay: boolean }> = ({ shouldPlay }) => {
    return (
        <Canvas shadows dpr={[1, 2]}>
            {/*<OrbitControls />*/}
            {/* <Test2 /> */}
            {/* <Anim /> */}
            {/*<ScenePlugs shouldPlay={shouldPlay} />*/}
            {/*<ScenePlugs2 shouldPlay={shouldPlay} />*/}
            {/*<BlenderScene shouldPlay={shouldPlay} />*/}
            <BlenderScene60 shouldPlay={shouldPlay} />
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
        </Canvas>
    );
};
export default PlugsCanvas;
