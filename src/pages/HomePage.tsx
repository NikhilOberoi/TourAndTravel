import { Link } from 'react-router-dom';
import { servicesConfig } from '../services/serviceConfig';
import { useServiceAvailability } from '../context/ServiceAvailabilityContext';

export default function HomePage() {
  const { availability } = useServiceAvailability();

  const visibleServices = servicesConfig.filter(service => availability[service.id]);

  return (
    <section>
      <h1 className="page-title">Travel services with booking power</h1>
      <p className="lead">
        A modern booking experience for flights, hotels, and travel options. Admins can enable or disable any service from the admin panel.
      </p>
      <div className="service-nav">
        {visibleServices.map(service => (
          <Link
            key={service.id}
            to={service.route ?? '/'}
            className="service-pill"
          >
            <span className="service-icon">{service.icon}</span>
            <span>{service.label}</span>
          </Link>
        ))}
      </div>
      <div className="card-grid home-grid">
        {availability.flights && (
          <article className="card card-highlight">
            <h2>Flights</h2>
            <p>Search, compare, and book the best airline fares with real-time availability.</p>
            <Link className="button" to="/flights">
              Explore Flights
            </Link>
          </article>
        )}
        {availability.hotels && (
          <article className="card card-highlight">
            <h2>Hotels</h2>
            <p>Find hotels with flexible cancellation, guest ratings, and smart filters.</p>
            <Link className="button" to="/hotels">
              Explore Hotels
            </Link>
          </article>
        )}
      </div>
    </section>
  );
}
