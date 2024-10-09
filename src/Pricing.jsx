import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

const includedFeatures = [
  'Comprehensive Dashboard.',
  'Active Vehicle and Driver Monitoring.',
  'Comprehensive Expense Tracking.',
  'Team Communication and Notes.',
  'Task Management and Responsibilities.',
  'Equipment Management and Allocation.',
  'Geographic Zoning.',
  'Fine Management.',
  'Comprehensive Reports.',
  'Driver License Management.',
  'Vehicle Inspection Management.',
];

export default function Pricing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedKey, setSelectedKey] = useState("annually");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTabChange = (key) => {
    setSelectedKey(key);
  };
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
  const pricePerVehicle = selectedKey === "annually" ? 4 : 5;

  return (
    <div className={`relative isolate px-6 pt-6 overflow-hidden lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple Pricing and Full Access</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enjoy full access to our platform and only pay for the number of vehicles you plan to manage. It’s $5 per vehicle per month with a monthly plan, or $4 per vehicle per month with an annual plan. Regardless of the plan, you can create up to 3 driver profiles per vehicle.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Comprehensive Customer Support</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Every plan provides full access. The only difference in pricing is the duration of the billing cycle, whether it is annually or monthly.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl shadow-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <div className="flex justify-center w-full flex-col">
                    <Tabs
                      aria-label="Options"
                      color="primary"
                      variant="bordered"
                      className="flex justify-center m-3"
                      selectedKey={selectedKey}
                      onSelectionChange={handleTabChange}
                    >
                      <Tab
                        key="monthly"
                        title={
                          <div className="flex items-center space-x-2">
                            <span>Monthly</span>
                          </div>
                        }
                      />
                      <Tab
                        key="annually"
                        title={
                          <div className="flex items-center space-x-2">
                            <span>Annually</span>
                          </div>
                        }
                      />
                    </Tabs>
                  </div>
                  <p className="text-base font-semibold text-gray-600">Per Vehicle / Month</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${pricePerVehicle}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                  </p>
                  <a
                    href="https://www.app.dynamofleet.com/register"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => { trackAction(' Register here!')}}
                  >
                    Register here!
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company reimbursement
                  </p>
                  <p className="mt-6 text-xs leading-5 text-gray-600 font-bold">
                    Please note, these prices do not include 19% VAT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
