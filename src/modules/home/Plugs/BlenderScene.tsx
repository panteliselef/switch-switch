import React, { useEffect, useRef } from 'react';
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei';
import { Group } from 'three';
import * as THREE from 'three';

export function BlenderScene({ shouldPlay }: { shouldPlay: boolean }) {
    const group = useRef<Group>(null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { nodes, materials, animations } = useGLTF('/Blend-sim004-fixed-compressed.glb');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (shouldPlay) {
            Object.values(actions).forEach((animation) => {
                if (animation) {
                    animation.timeScale = 1;
                    animation.loop = THREE.LoopPingPong;
                    animation.play();
                }
            });
        } else {
            Object.values(actions).forEach((animation) => {
                if (animation) {
                    animation.stop();
                }
            });
        }
    }, [actions, shouldPlay]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <PerspectiveCamera
                    name="V2_bake_fbxcamera1"
                    makeDefault={true}
                    far={100}
                    near={1}
                    fov={100}
                    position={[0, 2, 3.08]}
                    rotation={[0.07, 0, 0]}
                    scale={0.11}
                />
                <mesh
                    name="box01"
                    geometry={nodes.box01.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1']}
                    position={[0, 3.18, 0.83]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box02"
                    geometry={nodes.box02.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.005']}
                    position={[0, 3.09, 0.71]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box03"
                    geometry={nodes.box03.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.006']}
                    position={[0, 3.13, 0.75]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box04"
                    geometry={nodes.box04.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.007']}
                    position={[0, 2.95, 0.75]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box05"
                    geometry={nodes.box05.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.008']}
                    position={[0, 2.95, 0.75]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box06"
                    geometry={nodes.box06.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.009']}
                    position={[0, 2.95, 0.75]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box07a"
                    geometry={nodes.box07a.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.010']}
                    position={[0, 2.95, 0.75]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="box08a"
                    geometry={nodes.box08a.geometry}
                    material={materials['V2_bake_fbx:aiStandardSurface1.011']}
                    position={[0, 2.95, 0.75]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/Blend-sim004-fixed-compressed.glb');
