import { createContext, useContext, useMemo, useState } from 'react';
import { servicesConfig } from '../services/serviceConfig';
import type { ReactNode } from 'react';

interface ServiceAvailabilityContextValue {
  availability: Record<string, boolean>;
  toggleService: (serviceId: string) => void;
  setServiceAvailability: (serviceId: string, enabled: boolean) => void;
}

const ServiceAvailabilityContext = createContext<ServiceAvailabilityContextValue | undefined>(undefined);

const defaultAvailability = servicesConfig.reduce<Record<string, boolean>>((acc, service) => {
  acc[service.id] = true;
  return acc;
}, {});

export function ServiceAvailabilityProvider({ children }: { children: ReactNode }) {
  const [availability, setAvailability] = useState(defaultAvailability);

  const value = useMemo(
    () => ({
      availability,
      toggleService: (serviceId: string) => {
        setAvailability(existing => ({
          ...existing,
          [serviceId]: !existing[serviceId],
        }));
      },
      setServiceAvailability: (serviceId: string, enabled: boolean) => {
        setAvailability(existing => ({ ...existing, [serviceId]: enabled }));
      },
    }),
    [availability],
  );

  return <ServiceAvailabilityContext.Provider value={value}>{children}</ServiceAvailabilityContext.Provider>;
}

export function useServiceAvailability() {
  const context = useContext(ServiceAvailabilityContext);
  if (!context) {
    throw new Error('useServiceAvailability must be used within ServiceAvailabilityProvider');
  }
  return context;
}
