import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchNews } from '../api';
import { DEMO_NEWS, NEWS_CATEGORIES, formatDate } from '../utils/constants';
import './News.css';

export default function News() {
  const [category, setCategory] = useState('all');

  const { data } = useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchNews(category !== 'all' ? { category, limit: 20 } : { limit: 20 }),
    retry: false,
  });

  const articles = data ? data.data : DEMO_NEWS;
  const filtered = category === 'all' ? articles : articles.filter((a) => a.category === category);

  return (
    <>
      <Helmet><title>News & Blog | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>News & <span className="text-gradient">Blog</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Latest updates from Team Apex Gaming</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="game-tabs" style={{ marginBottom: '2rem' }}>
            <button className={`game-tab ${category === 'all' ? 'active' : ''}`} onClick={() => setCategory('all')}>All</button>
            {Object.entries(NEWS_CATEGORIES).map(([key, label]) => (
              <button key={key} className={`game-tab ${category === key ? 'active' : ''}`} onClick={() => setCategory(key)}>{label}</button>
            ))}
          </div>

          {/* BGMI Drop Locations Widget */}
          <div className="drop-locations-widget" style={{ marginBottom: '3rem', background: 'var(--dark-2)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,107,0,0.1)' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>BGMI <span className="text-primary">Combat Zones</span> (Drop Locations)</h2>
            <div className="grid grid-3" style={{ gap: '1.5rem' }}>
              <Link to="/drop-locations/erangel" className="glass-card" style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '150px', textDecoration: 'none' }}>
                <img src="https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=600&auto=format&fit=crop" alt="Erangel" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                <h3 style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'var(--white)', margin: 0, fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>ERANGEL</h3>
              </Link>
              <Link to="/drop-locations/miramar" className="glass-card" style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '150px', textDecoration: 'none' }}>
                <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=600&auto=format&fit=crop" alt="Miramar" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                <h3 style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'var(--white)', margin: 0, fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>MIRAMAR</h3>
              </Link>
              <Link to="/drop-locations/rondo" className="glass-card" style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '150px', textDecoration: 'none' }}>
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop" alt="Rondo" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                <h3 style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'var(--white)', margin: 0, fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>RONDO</h3>
              </Link>
            </div>
          </div>

          <div className="grid grid-3">
            {filtered.map((article, i) => (
              <AnimatedSection key={article._id} delay={i * 0.08}>
                <Link to={`/news/${article.slug}`} className="glass-card news-card">
                  <div className="news-card-image">
                    {article.featuredImage && <img src={article.featuredImage} alt={article.title} />}
                  </div>
                  <div className="news-card-body">
                    <span className="badge">{NEWS_CATEGORIES[article.category] || article.category}</span>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{formatDate(article.publishedAt)}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
