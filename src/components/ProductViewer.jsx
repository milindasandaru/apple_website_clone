import React from 'react'
import useMacBookStore from '../store'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei';
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './StudioLights';

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacBookStore();

    return (
        <section id='product-viewer'>
            <h2>Take a closer look.</h2>

            <div className='controls'>
                <p className='info text-center' >Macbook {scale === 0.06 ? '14"' : '16"'} in {color === 'abd5bd' ? 'Silver' : 'Space Black'}</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('abd5bd')}
                            className={clsx('bg-neutral-300', color === 'abd5bd' && 'active')}
                        />
                        <div
                            onClick={() => setColor('2e2c2e')}
                            className={clsx('bg-gray-900', color === '2e2c2e' && 'active')}
                        />
                    </div>


                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx('size-option', scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx('size-option', scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id='canvas' camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                {/* Add ambient light so you can see the color! */}
                <StudioLights />

                {/* FIX: Add the '#' before the color variable 
                <Box
                    position={[0, 0, 0]}
                    scale={10 * scale}
                    material-color={`#${color}`}
                ></Box> */}

                <MacbookModel14 scale={0.06} position={[0, 0, 0]} />


                <OrbitControls enablePan={false} minDistance={3} maxDistance={10} enableZoom={false} />
            </Canvas>

        </section>
    )
}

export default ProductViewer
