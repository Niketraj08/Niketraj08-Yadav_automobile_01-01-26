import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchMatches, fetchLiveMatches } from '../api';
import { DEMO_MATCHES, formatDate } from '../utils/constants';
import './MatchCenter.css';

export default function MatchCenter() {
  const { data: liveData } = useQuery({ queryKey: ['live-matches'], queryFn: fetchLiveMatches, retry: false, refetchInterval: 30000 });
  const { data: matchesData } = useQuery({ queryKey: ['all-matches'], queryFn: () => fetchMatches({ limit: 20 }), retry: false });

  const liveMatches = liveData?.data || [];
  const matches = matchesData?.data?.length ? matchesData.data : DEMO_MATCHES;
  const upcoming = matches.filter((m) => m.status === 'scheduled');
  const completed = matches.filter((m) => m.status === 'completed');

  return (
    <>
      <Helmet><title>Match Center | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>Match <span className="text-gradient">Center</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Live scores, schedules, and match results</p>
        </div>
      </div>

      {liveMatches.length > 0 && (
        <section className="section live-section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">🔴 Live Now</h2>
            </AnimatedSection>
            {liveMatches.map((match) => (
              <div key={match._id} className="glass-card live-match-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge badge-live">LIVE</span>
                <div className="live-teams" style={{ flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', fontSize: '1.2rem' }}>
                    {match.round || 'Current Match'}
                  </span>
                  <div className="live-team" style={{ marginLeft: 'auto' }}>
                    <span style={{ color: 'var(--primary)' }}>{match.team1?.name || 'Apex Gaming'}</span>
                    <span className="live-score" style={{ marginLeft: '1rem' }}>{match.team1?.score || 0} PTS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Upcoming <span className="text-primary">Schedule</span></h2>
          </AnimatedSection>
          <div className="match-list">
            {(upcoming.length ? upcoming : matches).map((match, i) => (
              <AnimatedSection key={match._id} delay={i * 0.05}>
                <div className="glass-card match-row">
                  <div className="match-date">{formatDate(match.scheduledAt)}</div>
                  <div className="match-teams-row">
                    <span className="team-name" style={{ color: 'var(--primary)' }}>{match.team1?.name || 'Apex Gaming'}</span>
                  </div>
                  <div className="match-round">{match.round || 'TBD'}</div>
                  <span className={`badge ${match.status === 'live' ? 'badge-live' : ''}`}>{match.status}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {completed.length > 0 && (
        <section className="section" style={{ background: 'var(--dark-2)' }}>
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">Recent <span className="text-primary">Results</span></h2>
            </AnimatedSection>
            <div className="match-list">
              {completed.map((match, i) => (
                <AnimatedSection key={match._id} delay={i * 0.05}>
                  <div className="glass-card match-row">
                    <div className="match-date">{formatDate(match.scheduledAt)}</div>
                    <div className="match-teams-row">
                      <span className="team-name winner">{match.team1?.name || 'Apex Gaming'}</span>
                      <span className="match-vs">-</span>
                      <span className="team-name" style={{ color: 'var(--primary)' }}>{match.team1?.score || 0} PTS</span>
                    </div>
                    <div className="match-round">{match.round}</div>
                    <span className="badge">Completed</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
