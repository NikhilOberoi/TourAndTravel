import { Route, Routes, NavLink } from 'react-router-dom';
import { useCart } from './context/CartContext';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import ChatBotPage from './pages/ChatBotPage';
import ServicePage from './pages/ServicePage';
import ChatBubble from './components/ChatBubble';

export default function App() {
  const { itemCount } = useCart();

  const routes = [
    { path: '/', label: 'Home', element: <HomePage /> },
    { path: '/flights', label: 'Flights', element: <FlightsPage /> },
    { path: '/hotels', label: 'Hotels', element: <HotelsPage /> },
    { path: '/chatbot', label: 'AI Chat', element: <ChatBotPage /> },
    { path: '/admin', label: 'Admin', element: <AdminPage /> },
    {
      path: '/cart',
      label: itemCount > 0 ? `Cart (${itemCount})` : 'Cart',
      element: <CartPage />,
    },
  ];

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">TRVL</span>
          <div>
            <h1>Travel Portal</h1>
            <p>Standalone services for flights, hotels, and travel options</p>
          </div>
        </div>
        <nav className="site-nav">
          {routes.map(route => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </main>
      <ChatBubble />
    </div>
  );
}
