import React from 'react'
import useMacBookStore from '../store'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/modelSwitcher.jsx';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacBookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <section id='product-viewer'>
            <h2>Take a closer look.</h2>

            <div className='controls'>
                <p className='info text-center' >Macbook Pro | Available in 14" & 16" in Sky Gray & Space Black</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#C0C0C0')}
                            className={clsx('bg-neutral-300', color === '#C0C0C0' && 'active')}
                        />
                        <div
                            onClick={() => setColor('2e2e2e')}
                            className={clsx('bg-gray-900', color === '2e2e2e' && 'active')}
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

            <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                {/* Add ambient light so you can see the color! */}
                <StudioLights />

                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} color={color} isMobile={isMobile} />
            </Canvas>

        </section>
    )
}

export default ProductViewer
