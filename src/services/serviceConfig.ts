export interface ServiceOption {
  id: string;
  label: string;
  icon: string;
  description: string;
  route?: string;
}

export const servicesConfig: ServiceOption[] = [
  {
    id: 'flights',
    label: 'Flights',
    icon: '✈️',
    description: 'Search flights, compare fares, and book quickly.',
    route: '/flights',
  },
  {
    id: 'hotels',
    label: 'Hotels',
    icon: '🏨',
    description: 'Find rooms with flexible cancellation and top ratings.',
    route: '/hotels',
  },
  {
    id: 'villas',
    label: 'Villas & Homestays',
    icon: '🏡',
    description: 'Browse villas and homestay stays for local experiences.',
    route: '/service/villas',
  },
  {
    id: 'trains',
    label: 'Trains',
    icon: '🚆',
    description: 'Book train travel with fast scheduling options.',
    route: '/service/trains',
  },
  {
    id: 'buses',
    label: 'Buses',
    icon: '🚌',
    description: 'Choose bus routes for easy regional travel.',
    route: '/service/buses',
  },
  {
    id: 'cabs',
    label: 'Cabs',
    icon: '🚕',
    description: 'Reserve a private cab for airport and city travel.',
    route: '/service/cabs',
  },
  {
    id: 'tours',
    label: 'Tours & Attractions',
    icon: '🎡',
    description: 'Explore tours, tickets, and attractions in one place.',
    route: '/service/tours',
  },
  {
    id: 'forex',
    label: 'Forex Card & Currency',
    icon: '💱',
    description: 'Get travel currency and forex card support.',
    route: '/service/forex',
  },
  {
    id: 'insurance',
    label: 'Travel Insurance',
    icon: '🛡️',
    description: 'Protect your journey with travel insurance plans.',
    route: '/service/insurance',
  },
];
