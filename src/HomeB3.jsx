import { WrenchScrewdriverIcon, TrophyIcon,CurrencyDollarIcon } from '@heroicons/react/20/solid'
import logob4 from "./assets/hd6.png"
const features = [
  {
    name: 'Driver Activity Records:',
    description:
      `Keep detailed records of each driver's activities, including assigned vehicles and previous assignments. Track their working days, sick days, and vacations to ensure comprehensive management.`,
    icon: TrophyIcon,
  },
  {
    name: 'Expense Management and Invoice Tracking',
    description: 'Effectively manage expenses by reviewing all invoices assigned to each driver. This includes invoices related to fuel, fines, and business expenses.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Monitor Equipment Assigned to Drivers',
    description: 'Keep track of all equipment assigned to each driver, including work clothing and tools.',
    icon: WrenchScrewdriverIcon,
  },
]

export default function HomeB3() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Down to the Hour</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Closely monitor each step and every change.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Enhance your oversight by meticulously measuring all steps and changes. Monitor your drivers' status and analyze your fleet's performance to make informed decisions. Allocate workloads based on driver performance to optimize efficiency.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={logob4}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
