import React from 'react'
import { Environment, Lightformer } from '@react-three/drei';

const StudioLights = () => {
    return (
        <group name='lights'>
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form='rect'
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotate-y={Math.PI / 2}
                    />

                    <Lightformer
                        form='rect'
                        intensity={10}
                        position={[-10, 0, 1]}
                        scale={10}
                        rotate-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
                position={[-2, 10, 5]}
                castShadow
            />
            <spotLight
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
                position={[0, -25, 10]}
                castShadow
            />
            <spotLight
                angle={0.15}
                decay={0.1}
                intensity={Math.PI * 0.2}
                position={[0, 15, 5]}
                castShadow
            />
        </group>
    )
}

export default StudioLights;
