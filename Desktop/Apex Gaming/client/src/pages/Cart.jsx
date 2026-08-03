import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiTrash2 } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { useCartStore } from '../store';
import { formatCurrency } from '../utils/constants';
import './Store.css';

export default function Cart() {
  const { items, removeItem, updateQty, total, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="section cart-page">
        <Helmet><title>Cart | Team Apex Gaming</title></Helmet>
        <div className="glass-card" style={{ textAlign: 'center', padding: '4rem' }}>
          <h2>Your cart is empty</h2>
          <p style={{ color: 'var(--gray)', margin: '1rem 0 2rem' }}>Browse our official merchandise</p>
          <Button to="/store" variant="primary">Shop Now</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section cart-page">
      <Helmet><title>{`Cart (${items.length}) | Team Apex Gaming`}</title></Helmet>
      <h1 className="section-title" style={{ marginBottom: '2rem' }}>Shopping Cart</h1>

      {items.map((item) => (
        <div key={`${item.productId}-${item.variant}`} className="glass-card cart-item">
          <div className="cart-item-img">{item.image ? <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} /> : 'TAG'}</div>
          <div>
            <strong>{item.name}</strong>
            {item.variant && <div style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{item.variant}</div>}
          </div>
          <div className="qty-control">
            <button onClick={() => updateQty(item.productId, item.variant, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQty(item.productId, item.variant, item.quantity + 1)}>+</button>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{formatCurrency(item.price * item.quantity)}</div>
          <button className="remove-btn" onClick={() => removeItem(item.productId, item.variant)}><FiTrash2 /></button>
        </div>
      ))}

      <div className="glass-card cart-summary">
        <div className="cart-summary-row"><span>Subtotal</span><span>{formatCurrency(total())}</span></div>
        <div className="cart-summary-row"><span>Shipping</span><span>Calculated at checkout</span></div>
        <div className="cart-summary-row total"><span>Total</span><span>{formatCurrency(total())}</span></div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <Button to="/store/checkout" variant="primary" style={{ flex: 1, justifyContent: 'center' }}>Checkout</Button>
          <button className="btn btn-ghost" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}
