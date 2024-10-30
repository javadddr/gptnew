
import { Tabs, Tab, Button } from "@nextui-org/react";
const tiers = [
  {
    name: 'Billed Monthly',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "Select the number of shipments to track each month.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Billed Yearly',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Select the number of shipments to track each year.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
  {
    name: 'Custom Pricing',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "Select the number of shipments to track in total.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingNew() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-2 lg:px-2">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Simple Pricing and Full Access
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
      All plans include complete access to our platform.
The only difference in pricing depends on how many shipments you would like to track.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
          
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 mb-3 text-base/7')}>
              {tier.description}
            </p>
            <div className="flex  justify-between">
            <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          50 shipments
          </Button>
          
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          100 shipments
          </Button>
          </div>
          <div className="flex  justify-between">
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          250 shipments
          </Button>
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          500 shipments
          </Button>
          </div>
          <div className="flex  justify-between">
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          1000 shipments
          </Button>
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          2500 shipments
          </Button>
          </div>
          <div className="flex  justify-between">
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          5000 shipments
          </Button>
          <Button
            radius="sm"
            variant="flat"
            className="p-4 mb-2 mx-4 w-[170px]"
            size="md">
          10000 shipments
          </Button>
          </div>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}