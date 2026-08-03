import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchTournaments } from '../api';
import { formatDate, formatCurrency } from '../utils/constants';
import './Tournaments.css';

const DEMO_TOURNAMENTS = [
  { _id: '1', name: 'BGIS 2024', slug: 'bgis-2024', prizePool: '₹1 Crore', location: 'Mumbai, India', status: 'completed', startDate: '2024-08-01', teamRanking: 1, game: { name: 'BGMI' } },
  { _id: '2', name: 'VCT India 2025', slug: 'vct-india-2025', prizePool: '₹25 Lakhs', location: 'Delhi, India', status: 'ongoing', startDate: '2025-06-01', game: { name: 'VALORANT' } },
  { _id: '3', name: 'Skyesports Grand Slam', slug: 'skyesports-gs', prizePool: '₹10 Lakhs', location: 'Bangalore, India', status: 'upcoming', startDate: '2025-08-01', game: { name: 'BGMI' } },
];

const TABS = ['all', 'upcoming', 'ongoing', 'completed'];

export default function Tournaments() {
  const [tab, setTab] = useState('all');

  const { data } = useQuery({
    queryKey: ['tournaments', tab],
    queryFn: () => fetchTournaments(tab !== 'all' ? { status: tab } : {}),
    retry: false,
  });

  const tournaments = data?.data?.length ? data.data : DEMO_TOURNAMENTS;
  const filtered = tab === 'all' ? tournaments : tournaments.filter((t) => t.status === tab);

  return (
    <>
      <Helmet><title>Tournaments | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1><span className="text-gradient">Tournaments</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Track our journey through India&apos;s biggest esports events</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="tournament-tabs">
            {TABS.map((t) => (
              <button key={t} className={`tournament-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                {t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-2">
            {filtered.map((t, i) => (
              <AnimatedSection key={t._id} delay={i * 0.1}>
                <Link to={`/tournaments/${t.slug || t._id}`} className="glass-card tournament-card">
                  <div className="tournament-header">
                    <span className={`badge ${t.status === 'ongoing' ? 'badge-live' : ''}`}>{t.status}</span>
                    {t.game?.name && <span className="badge">{t.game.name}</span>}
                  </div>
                  <h3>{t.name}</h3>
                  <div className="tournament-details">
                    <div><strong>Prize Pool</strong><span>{t.prizePool}</span></div>
                    <div><strong>Location</strong><span>{t.location}</span></div>
                    <div><strong>Date</strong><span>{formatDate(t.startDate)}</span></div>
                    {t.teamRanking && <div><strong>Our Rank</strong><span className="text-primary">#{t.teamRanking}</span></div>}
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
