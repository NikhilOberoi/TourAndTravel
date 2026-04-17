import type { ServiceOffer } from './types';

export const offers: ServiceOffer[] = [
  {
    id: 'flights-001',
    title: 'Round-trip to Goa',
    description: 'Non-stop flights from Delhi to Goa with flexible cancellation.',
    price: '₹9,499',
    tag: 'Flights',
    availability: 'Available for March - June',
  },
  {
    id: 'hotels-001',
    title: 'Beachfront Hotel Stay',
    description: 'Luxury ocean-view rooms with breakfast included.',
    price: '₹5,299/night',
    tag: 'Hotels',
    availability: 'Limited rooms left',
  },
];
