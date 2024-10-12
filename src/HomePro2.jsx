import React, { useEffect, useState } from "react";
import logo132 from "./assets/dash32.png";

  export default function HomePro2() {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  
    return (
      <div className={`relative isolate px-6 pt-0 overflow-hidden lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="pb-200 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Shipment Notifications
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Improve Customer Satisfaction. Receive crucial delivery updates to stay informed about delays and keep your customers updated.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-2">
                      <div className="grid  grid-cols-1 gap-y-0 lg:gap-y-8">
                        <div className="h-214 w-344 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-2xl">
                          <img alt="dsd" src={logo132} className="h-full w-full object-cover object-center" />
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