import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { ServiceOffer } from '../types';

interface CartContextValue {
  items: ServiceOffer[];
  addItem: (offer: ServiceOffer) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ServiceOffer[]>([]);

  const value = useMemo(
    () => ({
      items,
      addItem: (offer: ServiceOffer) => {
        setItems(existing => {
          if (existing.some(item => item.id === offer.id)) {
            return existing;
          }
          return [...existing, offer];
        });
      },
      removeItem: (id: string) => {
        setItems(existing => existing.filter(item => item.id !== id));
      },
      clearCart: () => setItems([]),
      itemCount: items.length,
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
