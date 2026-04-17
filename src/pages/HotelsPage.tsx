import { useEffect, useMemo, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import type { ServiceOffer } from '../types';
import { fetchTravelOffers } from '../services/travelService';
import { useCart } from '../context/CartContext';

export default function HotelsPage() {
  const [offers, setOffers] = useState<ServiceOffer[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    fetchTravelOffers().then(data => {
      setOffers(data.filter(item => item.tag === 'Hotels'));
      setLoading(false);
    });
  }, []);

  const filteredOffers = useMemo(
    () =>
      offers.filter(offer =>
        [offer.title, offer.description].some(text =>
          text.toLowerCase().includes(query.trim().toLowerCase()),
        ),
      ),
    [offers, query],
  );

  return (
    <section>
      <h1 className="page-title">Hotel Booking Service</h1>
      <p className="lead">A standalone hotel service built for checkout flows and inventory integration.</p>
      <input
        className="search-field"
        type="search"
        placeholder="Search hotels, locations, or offers"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {loading ? (
        <div className="card">Loading hotel deals...</div>
      ) : filteredOffers.length > 0 ? (
        <div className="card-grid">
          {filteredOffers.map(offer => (
            <ServiceCard
              key={offer.id}
              offer={offer}
              actionLabel="Add to cart"
              onAction={addItem}
            />
          ))}
        </div>
      ) : (
        <div className="card">No hotel deals matched your search.</div>
      )}
    </section>
  );
}
