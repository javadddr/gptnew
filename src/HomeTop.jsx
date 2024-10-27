import React, { useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import "./PrivacyPolicy.css"
import Typed from 'typed.js';
import RegisterM from "./RegisterM";
export default function HomeTop() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
const title="Sign Up Now"
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const trackAction = async (actionName) => {
    try {
      const response = await fetch('https://api.dynamofleet.com/dywebsite/trackAction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ actionName }),
      });
      if (response.ok) {
       
      } else {
      
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    const options = {
      strings: [' Web App', 'MS Excel', 'Google Sheet'],
      typeSpeed: 180,
      backSpeed: 180,
      loop: true,
    };

    const typed = new Typed('#typed', options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);
  return (
  
   
       <div className={`relative   isolate px-6 pt-14 lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div
          aria-hidden="true"
          className="absolute dark inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative  left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-10">
         
          <div className="text-center">
          <h1 className="mx-auto mt-2  text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
        Track and monitor all of your packages from +2000 carriers worldwide in one place in  <br></br> <span id="typed" className="text-blue-400 font-bold"></span>.
      </h1>

            <p className="mt-6 text-base leading-8 text-gray-600">
            Use our intuitive Webapp and Spreadsheet Add-Ins to
monitor shipments from over 2,000 couriers.
 Excel and Google Sheets Add-Ins

 Centralized Data Management

 Customized Dashboards

 Data Transfer to your Business Tools
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                   <RegisterM isOpen={isSignUpModalOpen} onClose={closeSignUpModal} title={title} borderi={true} colori={"primary"}/>
         

            
            <a href="https://calendly.com/globalpackagetracker/demo" className="text-sm font-semibold leading-6 text-gray-900"  onClick={() => { trackAction(' Learn more-Hero')}}>
              
            <Button
            color="warning"
            variant="flat"
            className="shadow-2xl font-bold border border-yellow-600"
            >
            Book a Demo / Meeting 
            </Button>
            </a>

            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
   
        
      </div>
  
  )
}
