import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { fetchAchievements } from '../api';
import { DEMO_ACHIEVEMENTS, formatDate } from '../utils/constants';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('team');
  const { data: achievementsData, isLoading } = useQuery({ 
    queryKey: ['achievements'], 
    queryFn: fetchAchievements,
    retry: false
  });

  const achievements = achievementsData ? achievementsData.data : DEMO_ACHIEVEMENTS;

  // Filter achievements by type (default to 'team' if type is not specified)
  const filtered = achievements.filter((ach) => {
    const type = ach.type || 'team';
    return type === activeTab;
  });

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Achievements | Team Apex Gaming</title>
        <meta name="description" content="Explore the trophy cabinet and major achievements of Team Apex Gaming." />
      </Helmet>

      <section className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-meta">// TROPHY CABINET</span>
            <h1 className="section-title">ACHIEVEMENTS & <span className="text-primary">GLORY</span></h1>
            <p style={{ color: 'var(--gray-light)', maxWidth: '600px', margin: '1rem auto' }}>
              A legacy built on precision, dominance, and tactical superiority. Explore our history of conquest.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a 
                href="https://liquipedia.net/pubg/Special:Search?search=JONATHAN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Search on Liquipedia 🔍
              </a>
            </div>
          </div>

          <div className="game-tabs" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button 
              className={`game-tab ${activeTab === 'team' ? 'active' : ''}`} 
              onClick={() => setActiveTab('team')}
            >
              Team Achievements
            </button>
            <button 
              className={`game-tab ${activeTab === 'player' ? 'active' : ''}`} 
              onClick={() => setActiveTab('player')}
            >
              Player Achievements
            </button>
          </div>

          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading Achievements...</div>
          ) : (
            <>
              <div className="grid grid-3">
                {filtered.map((ach, index) => (
                  <AnimatedSection key={ach._id} delay={index * 0.05}>
                    <div className="glass-card achievement-card" style={{ overflow: 'hidden', padding: 0, height: '100%' }}>
                      <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                        <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                        <span className="badge" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--primary)' }}>{ach.placement}</span>
                      </div>
                      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase' }}>{ach.game}</span>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', margin: 0 }}>{ach.title}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gray)', fontSize: '0.85rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                          <span>{formatDate(ach.dateAchieved)}</span>
                          {ach.prizePool && <span style={{ color: '#00ff66', fontFamily: 'monospace', fontWeight: 'bold' }}>{ach.prizePool}</span>}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', color: 'var(--gray)', padding: '3rem 0' }}>
                  No achievements recorded under this category yet.
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
