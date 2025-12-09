import React from 'react'

const ProductViewer = () => {
  return (
    <section id='produuct-viewer'>
        <h2>Take a closer look.</h2>

        <div className='controls'>
            <p className='info'>MAcbook 16" in Silver / Space Black</p>

            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div className="bg-neutral-300" />
                    <div className="bg-neutral-900" />
                </div>
            

                <div className="bg-neutral-300">
                    <div><p>14"</p></div>
                    <div><p>16"</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductViewer
