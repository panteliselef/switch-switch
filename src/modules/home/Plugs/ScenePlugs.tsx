/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei';

export default function ScenePlugs(props) {
    const group = useRef();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { nodes, materials, animations } = useGLTF('/scenePlugs.glb');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions['All Animations']) {
            actions['All Animations'].timeScale = 1;

            actions['All Animations'].play();
            actions['All Animations'].loop = THREE.LoopPingPong;
        }
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group>
                <group name="camera1" position={[0, 0.01, -2.37]} rotation={[-0.01, 0, 0]} scale={6.86}>
                    <PerspectiveCamera name="camera1_2" makeDefault={true} far={10000} fov={37.85} />
                </group>
                <PerspectiveCamera
                    name="default_camera"
                    makeDefault={false}
                    far={1253.71}
                    near={0.01}
                    fov={45.84}
                    position={[0.51, 0.56, -3.19]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P3"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P3.geometry}
                    material={materials.aiStandardSurface1}
                    position={[-0.04, 0.94, -4.18]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P5"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P5.geometry}
                    material={materials.aiStandardSurface1}
                    position={[0.3, 0.94, -4.18]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P6"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P6.geometry}
                    material={materials.aiStandardSurface1}
                    position={[0.12, 0.93, -4.03]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P11"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P11.geometry}
                    material={materials.aiStandardSurface1}
                    position={[0.12, 0.93, -3.77]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P13"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P13.geometry}
                    material={materials.aiStandardSurface1}
                    position={[-0.04, 0.93, -3.77]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P15"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P15.geometry}
                    material={materials.aiStandardSurface1}
                    position={[-0.28, 0.93, -3.77]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P17"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P17.geometry}
                    material={materials.aiStandardSurface1}
                    position={[0.3, 0.83, -4.03]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P21"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P21.geometry}
                    material={materials.aiStandardSurface1}
                    position={[-0.28, 0.83, -4.01]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P25"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P25.geometry}
                    material={materials.aiStandardSurface1}
                    position={[0.12, 0.83, -3.93]}
                />
                <mesh
                    name="pasted__pUT_ULT_003_UV1_P28"
                    geometry={nodes.pasted__pUT_ULT_003_UV1_P28.geometry}
                    material={materials.aiStandardSurface1}
                    position={[0.3, 0.83, -3.77]}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/scenePlugs.glb');
