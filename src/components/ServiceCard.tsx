import type { ServiceOffer } from '../types';

interface ServiceCardProps {
  offer: ServiceOffer;
  actionLabel?: string;
  onAction?: (offer: ServiceOffer) => void;
}

export default function ServiceCard({ offer, actionLabel, onAction }: ServiceCardProps) {
  return (
    <article className="card">
      <h2>{offer.title}</h2>
      <p>{offer.description}</p>
      <div className="service-status">{offer.availability}</div>
      <ul className="meta-list">
        <li><strong>Price:</strong> {offer.price}</li>
        <li><strong>Service:</strong> {offer.tag}</li>
      </ul>
      {onAction && actionLabel && (
        <button className="button" type="button" onClick={() => onAction(offer)}>
          {actionLabel}
        </button>
      )}
    </article>
  );
}
