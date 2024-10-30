import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import HomeTop from "./HomeTop";
import HomeB from "./HomeB";
import ChagePass from "./ChagePass";
import Hero2 from "./Hero2";
import Pricing from "./Pricing";
import HomePro from "./HomePro";
import HomePro2 from "./HomePro2";
import Sectionthree from "./Sectionthree";
import GetStarted from "./GetStarted";
import PricingNew from "./PricingNew";
import Ups from "./Ups";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);



  useEffect(() => {
    const trackHomeVisit = async () => {
      try {
        // Check if the visit has already been logged
        const isVisitLogged = localStorage.getItem('homeVisitLogged');
        if (!isVisitLogged) {
          const response = await fetch('https://api.dynamofleet.com/dywebsite/trackAction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ actionName: 'HomePage' }),
          });
          if (response.ok) {
          
            localStorage.setItem('homeVisitLogged', true);
          } else {
           
          }
        } else {
         
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    // Call the trackHomeVisit function when the Home component mounts
    trackHomeVisit();
  }, [1]);
  return (
    <div>
     
      <HomeTop/>
  
<Hero2/>

<HomePro/>
<HomePro2/>
<PricingNew/>

      {/* <div className={`flex justify-center relative ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className=" max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 pt-6 pb-6 flex justify-center items-center">
        <Card className="col-span-12 sm:col-span-4 h-[300px] shadow-2xl ">
          <CardHeader className="absolute z-10 bottom-0 flex-col !items-start">
            <p className="text-tiny text-black uppercase font-bold">Manage Drivers</p>
            <h4 className="text-white font-medium text-large">Streamline your operations. </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={logo11}
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px] shadow-2xl">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black uppercase font-bold">Manage Vehicles</p>
            <h4 className="text-white font-medium text-large">Monitor vehicle efficiency. </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={logo12}
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px] shadow-2xl">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Fleet health</p>
            <h4 className="text-white font-medium text-large">Driver licenses and Vehicle inspections.</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={logo13}
          />
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 shadow-2xl">
         
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-180 -translate-y-0 object-cover"
            src={logo14}
          />
          <CardFooter className="absolute p-1 bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-tiny text-black/60 uppercase font-bold">Manage costs </p>
              <p className="text-white font-medium text-large">All fines and invoices.</p>
            </div>
           
          </CardFooter>
        </Card>
        <Card  className="w-full h-[300px] col-span-12 sm:col-span-7 shadow-2xl">
        
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={logo16}
          />
          <CardFooter className="absolute p-1  top-0 z-10  border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
             
              <div className="flex flex-col">
                <p className="text-tiny text-white/30 uppercase font-bold">Manage Tools</p>
                <p className="text-white font-medium text-large">Work equipment and driver clothes.</p>
              </div>
            </div>
           
          </CardFooter>
        </Card>
        </div>
      </div> */}

      <HomeB/>
      {/* <HomeB1/> */}
{/*     
      <HomeB3/> */}
      {/* <HomeB4/> */}
      <GetStarted
      steps={[
        {
          stepNumber: 1,
          heading: "Register for Free",
          text: "Create an account with your email and password to test 10 free trackings.",
          
        },
        {
          stepNumber: 2,
          heading: "Visit our Web-App",
          text: "Go to our Web Application and log in to your account.",
         
        },
        {
          stepNumber: 3,
          heading: "Start Tracking",
          text: "Begin tracking shipments directly in your sheets using our formulas.",
         
        },
      ]}
    />
    <ChagePass/>
    <Sectionthree/>
      <Pricing/>
     
      
   </div>
  );
}
