'use client'
import { Carousel } from '~/src'

const page = () => {
  return (
    <main>
      <div className="container py-5">
        <h1 className="text-center text-heading-4 font-medium">Button Component Re-Structure</h1>
        <hr className="my-10 block" />
        <div className="">
          <Carousel slideInterval={5000} showControls={true} indicators={true}>
            <div className="h-full w-full bg-metal-900 text-white">
              <div className="mx-auto max-w-md text-center">
                <h1>Slider</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tenetur.</p>
              </div>
            </div>
            <div className="h-full w-full bg-metal-900 text-white">
              <div className="mx-auto max-w-md text-center">
                <h1>Slider</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tenetur.</p>
              </div>
            </div>
            <div className="h-full w-full bg-metal-900 text-white">
              <div className="mx-auto max-w-md text-center">
                <h1>Slider</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tenetur.</p>
              </div>
            </div>
            <div className="h-full w-full bg-metal-900 text-white">
              <div className="mx-auto max-w-md text-center">
                <h1>Slider</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tenetur.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </main>
  )
}

export default page
