import { React, useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 1;
    }, []);

    return (
        <section id='hero'>
            <div>
                <h1 className='pt-12'>MacBook Pro</h1>
                <img src="/title.png" alt="Macbook Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" alt="Macbook Video" autoPlay muted playsInline />

            <button>Buy</button>

            <p>From $1599.99 or $133/mo for 12 months</p>

        </section>
    )
}

export default Hero
