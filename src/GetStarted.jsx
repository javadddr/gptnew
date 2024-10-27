import React from 'react';
import { Card, Button } from "@nextui-org/react";
const subheading="How to start?"
const heading="Get Started in 3 Easy Steps."

const text=" Follow these simple steps to begin tracking shipments quickly."

export default function GetStarted({ steps }) {
  return (
    <section className="py-12 md:py-20 bg-gray-50 mx-auto px-6 lg:px-24 ">
     
     <section className="py-6 md:py-8 lg:py-12 xl:py-20" >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          {subheading && (
            <p className="text-primary uppercase m-0">
              {subheading}
            </p>
          )}
          {heading && (
            <h1 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">
              {heading}
            </h1>
          )}
          {text && (
            <p className="mt-2 text-lg pl-52 pr-52">
              {text}
            </p>
          )}
    
        </div>
      </div>
   
    </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {steps.map((step, index) => (
          <Feature key={index} {...step} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
      <Button color="danger" variant="flat" href="https://ant.design" target="_blank" style={{width:"400px"}}>
              Get Started
            </Button>
      </div>
    </section>
  );
}

function Feature({ stepNumber, heading, text }) {
  return (
    <Card className="flex flex-col items-center p-6 shadow-lg border rounded-lg bg-white">
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-indigo-600 text-white mb-6">
        <span className="text-xl font-bold">{stepNumber}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{`Step ${stepNumber}: ${heading}`}</h3>
      <p className="text-gray-500 text-base text-center">{text}</p>
    </Card>
  );
}

