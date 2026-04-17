import { useMemo } from 'react';
import { servicesConfig } from '../services/serviceConfig';
import { useServiceAvailability } from '../context/ServiceAvailabilityContext';

export default function AdminPage() {
  const { availability, toggleService } = useServiceAvailability();

  const adminServices = useMemo(
    () => servicesConfig.map(service => ({
      ...service,
      enabled: availability[service.id],
    })),
    [availability],
  );

  return (
    <section>
      <h1 className="page-title">Admin Service Control</h1>
      <p className="lead">
        Enable or disable any service in the portal. Disabled services are hidden from the landing page and cannot be accessed.
      </p>
      <div className="admin-grid">
        {adminServices.map(service => (
          <article key={service.id} className="admin-card">
            <div className="admin-icon">{service.icon}</div>
            <div>
              <h2>{service.label}</h2>
              <p>{service.description}</p>
            </div>
            <button
              type="button"
              className={service.enabled ? 'button secondary' : 'button'}
              onClick={() => toggleService(service.id)}
            >
              {service.enabled ? 'Disable' : 'Enable'}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
