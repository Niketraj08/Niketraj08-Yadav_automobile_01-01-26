import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchPlayer } from '../api';
import { DEMO_PLAYERS, getInitials, formatDate } from '../utils/constants';
import './PlayerProfile.css';

export default function PlayerProfile() {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['player', slug],
    queryFn: () => fetchPlayer(slug),
    retry: false,
  });

  const apiPlayer = data?.data;
  const demoPlayer = DEMO_PLAYERS.find((p) => p.slug === slug) || DEMO_PLAYERS[0];
  
  const player = apiPlayer ? {
    ...demoPlayer,
    ...apiPlayer,
    achievements: apiPlayer.achievements?.length > 0 ? apiPlayer.achievements : demoPlayer.achievements,
    awards: apiPlayer.awards?.length > 0 ? apiPlayer.awards : demoPlayer.awards,
  } : demoPlayer;

  if (isLoading) return <div className="loading-spinner" style={{ marginTop: '40vh' }} />;

  const stats = player.statistics || {};
  const socials = player.socialLinks || {};

  return (
    <>
      <Helmet><title>{`${player.ign} | Team Apex Gaming`}</title></Helmet>

      <div className="player-hero">
        <div className="player-hero-bg" />
        <div className="container player-hero-content">
          <div className="player-hero-photo">
            {player.photo ? <img src={player.photo} alt={player.ign} /> : <span>{getInitials(player.ign)}</span>}
          </div>
          <div className="player-hero-info">
            <span className="badge">{player.game?.name || 'Pro Player'}</span>
            <h1>{player.ign}</h1>
            <p className="real-name">{player.realName}</p>
            <div className="player-meta">
              <span>{player.role}</span>
              <span>•</span>
              <span>{player.country}</span>
              {player.joinDate && <><span>•</span><span>Since {formatDate(player.joinDate)}</span></>}
            </div>
            <div className="player-socials">
              {socials.twitter && <a href={socials.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
              {socials.instagram && <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
              {socials.youtube && <a href={socials.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>}
              {socials.twitch && <a href={socials.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch /></a>}
              {socials.discord && <a href={socials.discord} target="_blank" rel="noopener noreferrer"><FaDiscord /></a>}
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="player-grid">
            <div className="player-main">
              {player.biography && (
                <AnimatedSection>
                  <div className="glass-card player-section">
                    <h2>Biography</h2>
                    <p>{player.biography || `${player.ign} is a professional esports player representing Team Apex Gaming.`}</p>
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={0.1}>
                <div className="glass-card player-section">
                  <h2>Match Statistics</h2>
                  <div className="stats-row">
                    {stats.kd && <div className="stat-box"><div className="val">{stats.kd}</div><div className="lbl">K/D Ratio</div></div>}
                    {stats.winRate && <div className="stat-box"><div className="val">{stats.winRate}%</div><div className="lbl">Win Rate</div></div>}
                    {stats.matchesPlayed && <div className="stat-box"><div className="val">{stats.matchesPlayed}</div><div className="lbl">Matches</div></div>}
                    {stats.kills && <div className="stat-box"><div className="val">{stats.kills}</div><div className="lbl">Total Kills</div></div>}
                  </div>
                </div>
              </AnimatedSection>

              {player.achievements?.length > 0 && (
                <AnimatedSection delay={0.2}>
                  <div className="glass-card player-section" style={{ padding: '2rem 0' }}>
                    <h2 style={{ padding: '0 2rem' }}>Detailed Results</h2>
                    <div className="achievement-table-wrapper">
                      <table className="achievement-table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Tier</th>
                            <th>Tournament</th>
                            <th>Team</th>
                            <th>Prize</th>
                          </tr>
                        </thead>
                        <tbody>
                          {player.achievements.map((a, i) => (
                            <tr key={i} className="achievement-row">
                              <td className="ach-date">{a.date || a.year}</td>
                              <td className="ach-place">
                                <span className={`placement-badge place-${a.placement?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'default'}`}>
                                  {a.placement || '-'}
                                </span>
                              </td>
                              <td className="ach-tier">{a.tier || '-'}</td>
                              <td className="ach-tournament-name">{a.tournament || a.title}</td>
                              <td className="ach-team-logo">
                                {a.teamLogo ? <img src={a.teamLogo} alt="Team" /> : (a.team ? <span className="team-text-fallback">{a.team}</span> : <span className="no-logo">-</span>)}
                              </td>
                              <td className="ach-prize">{a.prizePool || a.prize || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {player.careerHistory?.length > 0 && (
                <AnimatedSection delay={0.3}>
                  <div className="glass-card player-section">
                    <h2>Career History</h2>
                    {player.careerHistory.map((c, i) => (
                      <div key={i} className="career-item">
                        <strong>{c.team}</strong> — {c.role} ({c.game})
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>

            <div className="player-sidebar">
              {player.awards && player.awards.filter(a => a.name || a.title).length > 0 && (
                <AnimatedSection>
                  <div className="glass-card player-section">
                    <h2>Awards</h2>
                    {player.awards.filter(a => a.name || a.title).map((a, i) => (
                      <div key={i} className="award-item">
                        <span className="icon">🏆</span>
                        <span>{a.name || a.title} {a.year ? `(${a.year})` : ''}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={0.1}>
                <div className="glass-card player-section">
                  <h2>Highlights</h2>
                  <div className="highlight-placeholder">
                    <p>Watch {player.ign}&apos;s best moments</p>
                    <Link to="/media" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-flex' }}>View Media</Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
