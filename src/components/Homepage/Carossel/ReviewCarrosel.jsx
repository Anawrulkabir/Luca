import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function ReviewCarrosel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 py-4">
            <div className="container flex flex-col w-full max-w-lg md:p-6 p-2 mx-auto divide-y divide-gray-300 bg-gray-50 text-gray-800 rounded-lg">
              <div className="flex justify-between md:p-4 p-2 ">
                <div className="flex space-x-1 lg:space-x-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="object-cover w-6 lg:w-12 h-6 lg:h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div className="">
                    <h4 className="font-bold text-xs md:text-base ">
                      Leroy Jenkins
                    </h4>
                    <div className="text-[8px] md:text-xs text-gray-600">
                      2 days ago
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2  text-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="md:w-5 w-3 md:h-5 h-3 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="md:text-xl text-sm font-bold">4.5</span>
                </div>
              </div>
              <div className="p-2 md:p-4 space-y-2 md:space-y-2 text-sm text-gray-600">
                <p className="text-xs md:text-base">
                  This guy is awsome. We had a great tour with his assistance.
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  )
}
