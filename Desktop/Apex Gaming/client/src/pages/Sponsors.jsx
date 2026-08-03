import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { fetchSponsors } from '../api';
import { DEMO_SPONSORS } from '../utils/constants';

const TIER_LABELS = { title: 'Title Partner', gold: 'Gold Partner', silver: 'Silver Partner', bronze: 'Bronze Partner', partner: 'Partner' };

export default function Sponsors() {
  const { data } = useQuery({ queryKey: ['sponsors'], queryFn: fetchSponsors, retry: false });
  const sponsors = data?.data?.length ? data.data : DEMO_SPONSORS;

  const grouped = sponsors.reduce((acc, s) => {
    const tier = s.tier || 'partner';
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(s);
    return acc;
  }, {});

  const tierOrder = ['title', 'gold', 'silver', 'bronze', 'partner'];

  return (
    <>
      <Helmet><title>Sponsors & Partners | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Partners</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Powered by brands that believe in Indian esports</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {tierOrder.filter((t) => grouped[t]).map((tier) => (
            <AnimatedSection key={tier}>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {TIER_LABELS[tier]}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                {grouped[tier].map((s) => (
                  <div key={s._id} className="glass-card" style={{ padding: '2rem 3rem', textAlign: 'center', minWidth: '200px' }}>
                    {s.logo ? <img src={s.logo} alt={s.name} style={{ height: 60, margin: '0 auto 1rem' }} /> : (
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{s.name}</div>
                    )}
                    {s.description && <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{s.description}</p>}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection>
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,107,0,0.1), transparent)' }}>
              <h2 className="section-title">Become a Partner</h2>
              <p style={{ color: 'var(--gray)', margin: '1rem 0 2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                Join forces with India&apos;s fastest-growing esports organization. Reach millions of passionate gamers.
              </p>
              <Button to="/contact" variant="primary">Get In Touch</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
