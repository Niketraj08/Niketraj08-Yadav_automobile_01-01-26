import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { FiShoppingCart } from 'react-icons/fi';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { fetchProducts } from '../api';
import { useCartStore } from '../store';
import { DEMO_PRODUCTS, PRODUCT_CATEGORIES, formatCurrency } from '../utils/constants';
import './Store.css';

export default function Store() {
  const addItem = useCartStore((s) => s.addItem);
  const { data } = useQuery({ queryKey: ['products'], queryFn: fetchProducts, retry: false });
  const products = data?.data?.length ? data.data : DEMO_PRODUCTS;

  return (
    <>
      <Helmet><title>Merchandise Store | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>Official <span className="text-gradient">Merch</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Wear the legacy. Rep Team Apex.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="product-grid">
            {products.map((product, i) => (
              <AnimatedSection key={product._id} delay={i * 0.08}>
                <div className="glass-card product-card">
                  <div className="product-image">
                    {product.images?.[0] ? <img src={product.images[0]} alt={product.name} /> : <span>TAG</span>}
                    {product.isFeatured && <span className="product-badge">Featured</span>}
                  </div>
                  <div className="product-info">
                    <span className="badge">{PRODUCT_CATEGORIES[product.category] || product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="product-price">
                      <span className="price">{formatCurrency(product.price)}</span>
                      {product.comparePrice && <span className="compare">{formatCurrency(product.comparePrice)}</span>}
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }} onClick={() => addItem(product, 'Default', 1)}>
                      <FiShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
