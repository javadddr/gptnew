import React from 'react';
import { Card, Button } from "@nextui-org/react";

export default function GetStarted({ steps }) {
  return (
    <section className="py-12 md:py-20 bg-gray-50 mx-auto px-6 lg:px-24 ">
      <div className="text-center mb-12 m-10">
        <h2 className="text-4xl font-bold mb-4">Get Started in 3 Easy Steps</h2>
        <p className="text-lg text-gray-600">
          Follow these simple steps to begin tracking shipments quickly.
        </p>
      </div>

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

