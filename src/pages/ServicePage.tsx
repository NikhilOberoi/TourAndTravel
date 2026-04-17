import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { servicesConfig } from '../services/serviceConfig';
import { useServiceAvailability } from '../context/ServiceAvailabilityContext';

export default function ServicePage() {
  const { serviceId } = useParams();
  const { availability } = useServiceAvailability();

  const service = useMemo(
    () => servicesConfig.find(item => item.id === serviceId),
    [serviceId],
  );

  if (!service) {
    return (
      <section>
        <h1 className="page-title">Service not found</h1>
        <p className="lead">The requested service does not exist in this portal.</p>
        <Link className="button" to="/">
          Back to home
        </Link>
      </section>
    );
  }

  const enabled = availability[service.id];

  return (
    <section>
      <h1 className="page-title">{service.label}</h1>
      <p className="lead">{service.description}</p>
      {enabled ? (
        <div className="card-grid single-card">
          <article className="card">
            <h2>{service.label} Service</h2>
            <p>This service is currently enabled and available for bookings.</p>
            <p>Use the admin panel to disable this option if needed.</p>
            <div className="service-status">Status: Enabled</div>
          </article>
        </div>
      ) : (
        <div className="card-grid single-card">
          <article className="card">
            <h2>{service.label} is disabled</h2>
            <p>The admin has disabled this service. You can ask the administrator to enable it to make it available again.</p>
            <div className="service-status">Status: Disabled</div>
          </article>
        </div>
      )}
      <Link className="button" to="/">
        Back to home
      </Link>
    </section>
  );
}
