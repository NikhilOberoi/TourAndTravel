import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();
  const [confirmation, setConfirmation] = useState('');
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    setConfirmation('Your booking request has been submitted successfully!');
  };

  return (
    <section>
      <h1 className="page-title">Booking Cart</h1>
      <p className="lead">Review your selected services and confirm your booking.</p>

      {items.length === 0 ? (
        <div className="card">
          <p>Your cart is empty.</p>
          <button className="button" type="button" onClick={() => navigate('/')}>Explore services</button>
        </div>
      ) : (
        <div className="card-grid">
          {items.map(item => (
            <article key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Service:</strong> {item.tag}</p>
              <button className="button secondary" type="button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="card" style={{ marginTop: '1.5rem' }}>
          <p><strong>Total items:</strong> {items.length}</p>
          <button className="button" type="button" onClick={handleCheckout}>
            Confirm Booking
          </button>
        </div>
      )}

      {confirmation && <div className="service-status">{confirmation}</div>}
    </section>
  );
}
