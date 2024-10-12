import React, { useEffect, useState } from "react";
import logo23 from "./assets/hd.png"
import logo24 from "./assets/hd1.png"
import logo25 from "./assets/hd2.png"
import logo26 from "./assets/hd3.png"
import logo27 from "./assets/hd4.png"
import logo28 from "./assets/hd5.png"
import logo131 from "./assets/dash22.png";
export default function HomeB() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative isolate px-6 pt-0 overflow-hidden lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
      <div className="pb-100 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Shipping Calendar
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Identify delays at a glance. Stay organized with our shipping calendar, offering a clear overview of all your shipments in one place.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-2">
                    <div className="grid  grid-cols-1 gap-y-0 lg:gap-y-8">
                      <div className="h-214 w-344 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-2xl">
                        <img alt="dsd" src={logo131} className="h-full w-full object-cover object-center" />
                      </div>
                    
                    </div>
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
