import { TruckIcon,PencilSquareIcon,GlobeAmericasIcon, CurrencyDollarIcon,UserGroupIcon, FingerPrintIcon, UserCircleIcon,PresentationChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Extremely User-Friendly:',
    description:
      'It is incredibly easy to use, requiring minimal manual work. Simply drag and drop to change the status of vehicles, tasks, and leave comments or notes that everyone can see.',
    icon: UserCircleIcon,
  },
  {
    name: 'Active Vehicle and Driver Monitoring:',
    description:
      'Monitor the status of your vehicles to see how many are active, out of service, or in the garage. Similarly, track your drivers to know who is working, on leave, or sick.',
    icon: TruckIcon,
  },
  {
    name: 'Comprehensive Expense Tracking:',
    description:
      'Assign costs related to fuel, insurance, and maintenance to each vehicle for accurate budgeting.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Team Communication:',
    description:
      'Write notes specific to each vehicle or driver to keep your team well-informed.',
    icon: UserGroupIcon,
  },
  {
    name: 'Task Management:',
    description:
      'Create and assign tasks to your team for each vehicle or driver to enhance operational efficiency.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Equipment Allocation:',
    description:
      'Assign work equipment to vehicle to ensure proper resource distribution. Additionally, you can assign and monitor clothing for your drivers.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Geographic Zoning:',
    description:
      'Designate operational areas to your vehicles to optimize routing and deployment.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Dashboard Visualization:',
    description:
      'Enjoy a user-friendly dashboard that provides a comprehensive view of your entire fleet.',
    icon: PresentationChartBarIcon,
  },
]

export default function HomeB1() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">An all-in-one tool</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to manage your fleet effortlessly.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Dynamofleet offers a comprehensive suite of tools that allow you to manage invoices, equipment, and vehicle status seamlessly. You can monitor driver productivity, fleet health, including driver licenses and vehicle inspections, all from one platform. With Dynamofleet, you have everything you need to oversee every aspect of your fleet's operations efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
