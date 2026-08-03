import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/ui/AnimatedSection';
import { formatDate } from '../utils/constants';
import './Tournaments.css';

const DEMO = {
  name: 'BGIS 2024', prizePool: '₹1 Crore', location: 'Mumbai, India', status: 'completed',
  startDate: '2024-08-01', endDate: '2024-08-15', teamRanking: 1, game: { name: 'BGMI' },
  standings: [
    { rank: 1, team: 'Team Apex Gaming', points: 156, wins: 4, losses: 1 },
    { rank: 2, team: 'Team Soul', points: 142, wins: 3, losses: 2 },
    { rank: 3, team: 'GodLike Esports', points: 128, wins: 3, losses: 2 },
  ],
};

export default function TournamentDetail() {
  const { slug } = useParams();
  const tournament = DEMO;

  return (
    <>
      <Helmet><title>{`${tournament.name} | Team Apex Gaming`}</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <Link to="/tournaments" style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'inline-block' }}>← Back to Tournaments</Link>
          <h1>{tournament.name}</h1>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'center' }}>
            <span className="badge">{tournament.status}</span>
            <span className="badge">{tournament.game?.name}</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            <AnimatedSection>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Details</h2>
                <div className="tournament-details">
                  <div><strong>Prize Pool</strong><span>{tournament.prizePool}</span></div>
                  <div><strong>Location</strong><span>{tournament.location}</span></div>
                  <div><strong>Start</strong><span>{formatDate(tournament.startDate)}</span></div>
                  <div><strong>End</strong><span>{formatDate(tournament.endDate)}</span></div>
                  <div><strong>Our Ranking</strong><span className="text-primary">#{tournament.teamRanking}</span></div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Standings</h2>
                <table className="standings-table">
                  <thead><tr><th>Rank</th><th>Team</th><th>Points</th><th>W</th><th>L</th></tr></thead>
                  <tbody>
                    {tournament.standings.map((s) => (
                      <tr key={s.rank}><td>{s.rank}</td><td>{s.team}</td><td>{s.points}</td><td>{s.wins}</td><td>{s.losses}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
