import { CheckIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import RegisterM from "./RegisterM";
const includedFeatures = [
  'Microsoft Excel Add-in.',
  'Google Spreadsheets Add-on.',
  'Webapplication Access.',
  'Comprehensive Dashboard.',
  'Shipment Alerts.',
  'Notify your customers.',
  'Observe shipping costs.',
  'Manage your vendors.',
  'Manage your hubs.',

];

const shipmentPlans = [
  { shipments: 50, price: 24, billing: 'Month' },
  { shipments: 100, price: 39, billing: 'Month' },
  { shipments: 250, price: 79, billing: 'Month' },
  { shipments: 500, price: 119, billing: 'Month' },
  { shipments: 1000, price: 169, billing: 'Month' },
  { shipments: 2500, price: 239, billing: 'Month' },
  { shipments: 5000, price: 424, billing: 'Month' },
  { shipments: 10000, price: 649, billing: 'Month' },
];

const shipmentPlans2 = [
  { shipments: 600, price: 228, billing: 'Year' },
  { shipments: 1200, price: 408, billing: 'Year' },
  { shipments: 3000, price: 828, billing: 'Year' },
  { shipments: 6000, price: 1188, billing: 'Year' },
  { shipments: 12000, price: 1668, billing: 'Year' },
  { shipments: 30000, price: 2388, billing: 'Year' },
  { shipments: 60000, price: 4428, billing: 'Year' },
  { shipments: 120000, price: 6588, billing: 'Year' },
];

const onetime = [
  { shipments: 600, price: 0.45, billing: 'onetime' },
  { shipments: 1200, price: 0.40, billing: 'onetime' },
  { shipments: 3000, price: 0.35, billing: 'onetime' },
  { shipments: 6000, price: 0.30, billing: 'onetime' },
  { shipments: 12000, price: 0.25, billing: 'onetime' },
  { shipments: 30000, price: 0.20, billing: 'onetime' },
  { shipments: 60000, price: 0.15, billing: 'onetime' },
  { shipments: 120000, price: 0.10, billing: 'onetime' },
];

export default function Pricing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedKey, setSelectedKey] = useState("annually");
  const [selectedPlan, setSelectedPlan] = useState(30000); 
  const [shipmentsInput, setShipmentsInput] = useState('');
  const [matchedPrice, setMatchedPrice] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const colori="danger"
    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const title="Register for free"
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTabChange = (key) => {
    setSelectedKey(key);
  };

  const handleSelectPlan = (planShipments) => {
    setSelectedPlan(planShipments);
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
      if (!response.ok) {
        console.error('Failed to track action');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Dynamically switch between shipmentPlans (monthly) and shipmentPlans2 (annually)
  const activePlans = selectedKey === "annually" ? shipmentPlans2 : shipmentPlans;

  const handleShipmentsInputChange = (event) => {
    const value = event.target.value;
    setShipmentsInput(value);

    // Find the appropriate plan based on the user input
    const matchingPlan = onetime.find(plan => plan.shipments >= value);
    if (matchingPlan) {
      setMatchedPrice(matchingPlan.price);
    } else {
      setMatchedPrice(null);
    }
  };

  return (
    <div className={`relative isolate px-6 pt-6 overflow-hidden lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-7 text-gray-900 sm:text-4xl">Simple Pricing and Full Access</h2>
            <div class="text-center"><strong>All</strong> plans include <strong>complete</strong> access
                                to our platform.<br></br> The only difference in pricing depends on how many shipments you
                                would like to track.</div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
        

            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">For purchasing shipment capacity, you have three options:</h3>
              <div class="bg-gray-50 p-4 rounded-md shadow-sm ">

  
  <div class="space-y-2">
    <div class="flex items-start">
      <span class="bg-gray-300 text-gray-600 font-medium rounded-full w-6 h-6 flex justify-center items-center mr-2 text-xs">1</span>
      <p class="text-gray-600 text-sm">
        <span class="font-medium text-gray-800">Monthly Subscription:</span> Subscribe and pay on a monthly basis.
      </p>
    </div>

    <div class="flex items-start">
      <span class="bg-gray-300 text-gray-600 font-medium rounded-full w-6 h-6 flex justify-center items-center mr-2 text-xs">2</span>
      <p class="text-gray-600 text-sm">
        <span class="font-medium text-gray-800">Yearly Subscription:</span> Choose a yearly plan and pay annually.
      </p>
    </div>

    <div class="flex items-start">
      <span class="bg-gray-300 text-gray-600 font-medium rounded-full w-7 h-6 flex justify-center items-center mr-2 text-xs">3</span>
      <p class="text-gray-600 text-sm">
        <span class="font-medium text-gray-800">One-Time Purchase:</span> No subscription required—you can buy any number of shipments and only pay for what you use.
      </p>
    </div>
  </div>
</div>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Input Section for One-time Plan */}
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl shadow-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-sm px-8">
                  <Tabs
                    aria-label="Options"
                    color="primary"
                    variant="bordered"
                    className="flex justify-center m-3"
                    selectedKey={selectedKey}
                    onSelectionChange={handleTabChange}
                  >
                    <Tab key="monthly" title="Monthly" />
                    <Tab key="annually" title="Annually" />
                    <Tab key="ontime" title="On Time" />
                  </Tabs>

                 { (selectedKey === "monthly" || selectedKey === "annually") && "Choose Your Plan:"}
                  {(selectedKey === "monthly" || selectedKey === "annually") && (
                    <div className="grid grid-cols-2 gap-2 mt-5 ">
                   
                      {activePlans.map((plan) => (
                        <Button
                          key={plan.shipments}
                          radius="sm"
                          variant="flat"
                          color={selectedPlan === plan.shipments ? "primary" : "default"}
                          className="pt-5 pb-5"
                          size="sm"
                          style={{ fontSize: 12, width: 120 }}
                          onClick={() => handleSelectPlan(plan.shipments)}
                        >
                          {plan.shipments} Shipments<br />{plan.price}$ /{plan.billing}
                        </Button>
                      ))}


                    </div>
                  )}

                  {/* Input for Shipments and Price Display for One-time Plan */}
                  {selectedKey === "ontime" && (
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-gray-700">
                        How many shipments do you want to track?
                        Minimum amount is 600 shipments.
                      </label>
                      <input
                          type="number"
                          value={shipmentsInput}
                          onChange={handleShipmentsInputChange}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter number of shipments"

                        />

                      {matchedPrice ? (
                        <p className="mt-3 text-sm text-indigo-600">
                          One Time Purchase: {shipmentsInput!==""&& shipmentsInput>599?`$${(matchedPrice*shipmentsInput).toFixed(0)}`:"Minimum amount is 600"}
                         <br></br> <br></br><span className="mt-7 pt-6 text-sm text-gray-400">You have one year to use these shipments. After that, any unused shipments will expire.</span>
                        </p>
                      ) : (
                        <Button color='success' variant='flat' radius="sm" className={`mt-3 text-md text-gray-800 ${shipmentsInput>1000?"":"hidden"}`}>
                        {shipmentsInput>1000?"Contact us!":""} 
                        </Button>
                      )}
                    </div>
                  )}
        
             <div className='mt-10'>
        <RegisterM isOpen={isSignUpModalOpen} onClose={closeSignUpModal} title={title} borderi={false} colori={colori}/>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
