import type { ServiceOffer } from '../types';
import { offers } from '../mockData';

const API_BASE = 'https://api.example.com/travel';

export async function fetchTravelOffers(): Promise<ServiceOffer[]> {
  try {
    const response = await fetch(`${API_BASE}/offers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('API unavailable, using local offers');
    }

    const data = (await response.json()) as ServiceOffer[];
    return data;
  } catch (error) {
    console.warn('Falling back to local travel offers:', error);
    return offers;
  }
}
