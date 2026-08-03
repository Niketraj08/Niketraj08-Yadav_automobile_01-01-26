import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiChevronDown, FiArrowRight, FiShield, FiCpu, FiCompass, FiTarget, FiZap, FiActivity } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchNews, fetchPlayers, fetchMatches, fetchSponsors, fetchAchievements } from '../api';
import { DEMO_NEWS, DEMO_PLAYERS, DEMO_MATCHES, DEMO_SPONSORS, DEMO_STATS, GAMES, formatDate, DEMO_ACHIEVEMENTS } from '../utils/constants';
import logoImg from '../assets/team_apex_logo-removebg-preview.png';
import './Home.css';

const TIMELINE_MILESTONES = [
  { year: '2026', title: 'THE GENESIS', desc: 'Team Apex Gaming founded in Mumbai. Our mission: establish India\'s premier competitive powerhouse.' },
  { year: '2026', title: 'BATTLEFIELD EXPANSION', desc: 'Assembled elite rosters in BGMI and Valorant, making deep runs in national tournaments.' },
  { year: '2026', title: 'ARENA DOMINANCE', desc: 'Champion title at BGIS 2026. Expanded corporate sponsors and built the Mumbai Esports hub.' },
  { year: '2026', title: 'THE FUTURE UNBOUND', desc: 'Overhauling logistics, launching regional esports academies, and competing internationally.' }
];

const CREATOR_ARMY = [
  { name: 'ApexVibe', subs: '1.2M+', platform: 'YouTube', role: 'Variety Streamer', img: null },
  { name: 'SavageApex', subs: '850K+', platform: 'YouTube', role: 'BGMI Analyst', img: null },
  { name: 'AstraGaming', subs: '450K+', platform: 'Twitch', role: 'Valorant Pro/Creator', img: null }
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState('bgmi');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // API Queries
  const { data: newsData } = useQuery({ queryKey: ['news'], queryFn: () => fetchNews({ limit: 3 }), retry: false });
  const { data: playersData } = useQuery({ queryKey: ['players'], queryFn: () => fetchPlayers({ isFeatured: true, limit: 12 }), retry: false });
  const { data: matchesData } = useQuery({ queryKey: ['matches'], queryFn: () => fetchMatches({ limit: 6 }), retry: false });
  const { data: sponsorsData } = useQuery({ queryKey: ['sponsors'], queryFn: fetchSponsors, retry: false });
  const { data: achievementsData } = useQuery({ queryKey: ['achievements'], queryFn: fetchAchievements, retry: false });

  const news = newsData ? newsData.data : DEMO_NEWS;
  const players = playersData ? playersData.data : DEMO_PLAYERS;
  const matches = matchesData ? matchesData.data : DEMO_MATCHES;
  const sponsors = sponsorsData ? sponsorsData.data : DEMO_SPONSORS;
  const achievements = achievementsData ? achievementsData.data : DEMO_ACHIEVEMENTS;

  // Filter players by selected game for Character Select
  const filteredPlayers = players.filter(p => !p.game?.slug || p.game.slug === selectedGame);
  
  // Set default selected player if none is active
  const activePlayer = selectedPlayer || filteredPlayers[0] || null;

  return (
    <>
      <Helmet>
        <title>{"Team Apex Gaming | India's Premier Esports Organization"}</title>
        <meta name="description" content="Team Apex Gaming - We start at the top and go beyond. India's premier esports organisation competing in BGMI, Valorant, CS2, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        {/* News Top Ticker */}
        <div className="hero-top-ticker">
          <div className="ticker-track">
            <span>UP NEXT: EWC 2026 // TEAM APEX READY FOR EWC 2026 • </span>
            <span>TAG ON TOP  • </span>
            <span>TAG ON TOP: STACKING TROPHIES IN ALL ARENAS • </span>
            <span>TAG ON TOP: BGMI ROSTER JONATHAN JELLY HARSH HYDRO KIOLMAO • </span>
            <span>UP NEXT: EWC 2026 // TEAM APEX READY FOR EWC 2026 • </span>
          </div>
        </div>

        <div className="hero-fallback-bg" />
        <div className="hero-grid-mesh" />
        <div className="hero-laser-lines" />

        <div className="hero-rotating-text">
          <span>APEX GAMING</span>
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-status-bar">
              <span className="pulse-dot"></span>
              <span className="status-lbl">TAG ON TOP</span>
            </div>
            
            <h1 className="hero-title-tactical">
              <img src={logoImg} alt="Team Apex Logo" className="hero-center-logo" />
            </h1>
            
            <p className="hero-slogan-sub">#1 INDIAN ESPORTS ORGANIZATION</p>

            {/* <div className="hero-diagnostics">
              <span>LATENCY: 5ms</span>
              <span>REGION: AS-IN.01</span>
              <span>GRID: 19.076 / 72.877</span>
            </div> */}

            <div className="hero-actions">
              <Button to="/recruitment" variant="primary">JOIN DISPATCH</Button>
              <Button to="/media" variant="outline"><FiPlay /> HYPE REEL</Button>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroller">
          <span>TAG ON TOP</span>
          <div className="scroller-line" />
          <FiChevronDown />
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="section manifesto-section">
        <div className="container">
          <div className="manifesto-grid">
            <div className="manifesto-graphics" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/assets/tag.jersy.jpg" alt="Team Apex Jersey" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
            <div className="manifesto-text">
              <h2 className="section-title text-left">BORN IN <span className="text-primary">MUMBAI</span></h2>
              <p className="lead">
                Forged in the heat of competition, Team Apex Gaming is not just an esports organization. 
                We are a relentless digital vanguard.
              </p>
              <p>
                From the bustling streets of Mumbai to the global server grids, we carry the fire of a billion gamers. 
                Our strategy is total tactical domination. We start at the top, and we go beyond.
              </p>
              <div className="stats-strip">
                {DEMO_STATS.map((stat) => ( 
                  <div key={stat.label} className="stat-unit">
                    <div className="val">{stat.value}</div>
                    <div className="lbl">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline: Born at the Apex */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">TAG ON TOP </span>
            <h2 className="section-title">BORN AT THE <span className="text-primary">APEX</span></h2>
          </div>

          <div className="timeline-flow">
            {TIMELINE_MILESTONES.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`timeline-node ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="node-marker-point">
                    <span>{item.year}</span>
                  </div>
                  <div className="node-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pick Your Fighter (Roster Character Select) */}
      <section className="section character-select-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">ELITE ROSTER </span>
            <h2 className="section-title">PICK YOUR <span className="text-primary">FIGHTER</span></h2>
          </div>

          {/* Game Selection Tabs */}
          <div className="tactical-tabs">
            {GAMES.map((game) => (
              <button
                key={game.slug}
                className={`tactical-tab-btn ${selectedGame === game.slug ? 'active' : ''}`}
                onClick={() => {
                  setSelectedGame(game.slug);
                  setSelectedPlayer(null); // Reset selected player when changing games
                }}
              >
                {game.name}
              </button>
            ))}
          </div>

          <div className="character-select-grid" style={{ gridTemplateColumns: '1fr' }}>
            {/* Grid of Players */}
            <div className="fighters-grid-cells" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <Link
                    to={`/players/${player.slug}`}
                    key={player._id}
                    className="fighter-grid-cell"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="cell-overlay" />
                    {player.photo && (
                      <img src={player.photo} alt={player.ign} className="cell-bg-photo" />
                    )}
                    <div className="fighter-cell-info">
                      <span className="cell-ign">{player.ign}</span>
                      <span className="cell-role">{player.role}</span>
                      {player.achievements && player.achievements.length > 0 && (
                        <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          <span style={{ fontSize: '0.6rem', color: 'var(--primary)', fontFamily: 'var(--font-tech)' }}>ACHIEVEMENTS:</span>
                          {player.achievements.slice(0, 2).map((ach, idx) => (
                            <span key={idx} style={{ fontSize: '0.65rem', color: 'var(--gray-light)', lineHeight: 1.1 }}>• {ach.title}</span>
                          ))}
                          {player.achievements.length > 2 && <span style={{ fontSize: '0.6rem', color: 'var(--gray)' }}>+{player.achievements.length - 2} MORE</span>}
                        </div>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="empty-fighters">NO RECRUITS DETECTED IN THIS GRID</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Armory: Official Merchandise showcase */}
      <section className="section armory-section">
        <div className="container">
          <div className="armory-box">
            <div className="armory-details">
              <span className="section-meta">TAG ON TOP</span>
              <h2 className="section-title text-left">THE <span className="text-primary">ARMORY</span></h2>
              <p>Gear up with the official Team Apex Gaming 2026 Pro Kit. Designed for high performance under fire. Engineered for the ultimate esports champions.</p>
              
              <ul className="spec-list">
                <li>
                  <FiShield className="spec-icon" />
                  <div className="spec-info">
                    <div className="h">TRIPLE-MESH TECH FABRIC</div>
                    <div className="d">Moisture-wicking, breathable grid mesh fibers.</div>
                  </div>
                </li>
                <li>
                  <FiCpu className="spec-icon" />
                  <div className="spec-info">
                    <div className="h">ERGONOMIC FLUID DESIGN</div>
                    <div className="d">Pre-curved cuts to maximize movement precision.</div>
                  </div>
                </li>
                <li>
                  <FiZap className="spec-icon" />
                  <div className="spec-info">
                    <div className="h">TACTICAL ORANGE HIGHLIGHTS</div>
                    <div className="d">Vibrant sunset glowing trims that represent our flag.</div>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: '2.5rem' }}>
                <Button to="/store" variant="primary">ACCESS MERCH DECK <FiArrowRight /></Button>
              </div>
            </div>
            
            <div className="armory-jersey-preview ">
              <img src="/assets/tag.jersy.jpg" alt="Jersey" className="armory-jersey-preview " />
              <div className="jersey-grid-circles"></div>
              <div className="hud-measurement top-hud">PRO JERSEY SYSTEM v2.6</div>
              
              <div className="hud-measurement bottom-hud">AVAILABILITY: PAN INDIA</div>
            </div>
          </div>
        </div>
      </section>

      {/* War Room: Matches Section */}
      <section className="section war-room-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">// COMBAT RECORDS</span>
            <h2 className="section-title">WAR <span className="text-primary">ROOM</span></h2>
          </div>

          <div className="war-room-table">
            <div className="table-header-tactical">
              <span>TEAM NAME </span>
              <span>MATCH </span>
              <span>SCORE</span>
              <span>STATUS</span>
            </div>

            <div className="table-rows">
              {matches.map((match) => (
                <div key={match._id} className="table-row-tactical">
                  <div className="cell-teams">
                    <span className="org">{match.team1?.name || 'TEAM APEX'}</span>
                  </div>
                  <div className="cell-arena">
                    <FiCompass className="arena-icon" />
                    <span>{match.round || 'Grand Finals'}</span>
                  </div>
                  <div className="cell-score">
                    {match.status === 'completed' ? (
                      <span className="score">{match.team1?.score || 0} PTS</span>
                    ) : match.status === 'live' ? (
                      <span className="score text-primary">{match.team1?.score || 0} PTS</span>
                    ) : (
                      <span className="scheduled-time">{formatDate(match.scheduledAt)}</span>
                    )}
                  </div>
                  <div className="cell-status">
                    <span className={`status-badge ${match.status}`}>
                      {match.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/match-center" variant="outline">ENTER COMBAT ARCHIVE <FiArrowRight /></Button>
          </div>
        </div>
      </section>

      {/* One TAG. Every Arena (Games Pipeline) */}
      <section className="section arenas-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">// OPERATIONAL FRONTS</span>
            <h2 className="section-title">ONE TAG. <span className="text-primary">EVERY ARENA.</span></h2>
          </div>

          <div className="arenas-grid">
            <div className="arena-card bgmi">
              <div className="card-hud">ARENA_01</div>
              <h3>BGMI</h3>
              <p>Our flagship squad. Tactical veterans of Indian mobile battlegrounds. Winners of BGIS 2024.</p>
              <div className="card-data">
                <span>ACTIVE FIGHTERS: 5</span>
                <span>STATUS: DOMINATING</span>
              </div>
            </div>
            
            <div className="arena-card valorant">
              <div className="card-hud">ARENA_02</div>
              <h3>VALORANT</h3>
              <p>Tactical sharpshooters. Revamped roster ready to lock down VCT Challengers South Asia.</p>
              <div className="card-data">
                <span>ACTIVE FIGHTERS: 6</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
            
            <div className="arena-card cs2">
              <div className="card-hud">ARENA_03</div>
              <h3>CS2</h3>
              <p>Precision executioners. Returning to the roots of tactical PC esports to dominate the server.</p>
              <div className="card-data">
                <span>ACTIVE FIGHTERS: 5</span>
                <span>STATUS: CALIBRATING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Trophy Cabinet */}
      <section className="section achievements-section" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-meta">// TROPHY CABINET</span>
            <h2 className="section-title">ACHIEVEMENTS & <span className="text-primary">GLORY</span></h2>
          </div>

          <div className="grid grid-3">
            {achievements.map((ach) => (
              <div key={ach._id} className="glass-card achievement-card" style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                  <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                  <span className="badge" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--primary)' }}>{ach.placement}</span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase' }}>{ach.game}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{ach.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gray)', fontSize: '0.85rem' }}>
                    <span>{formatDate(ach.dateAchieved)}</span>
                    {ach.prizePool && <span style={{ color: '#00ff66' }}>{ach.prizePool}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/achievements" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View All <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Hype Reel */}
      <section className="section hype-reel-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">// RECON FLYOVER VISUALS</span>
            <h2 className="section-title">THE <span className="text-primary">HYPE REEL</span></h2>
          </div>

          <div className="video-reel-showcase">
            <div className="main-reel-frame">
              <iframe
                src="https://www.youtube.com/embed/6gZRSpoQLjY?si=xGE6KqCG4ixQMH4a"
                title="Team Apex Highlights"
                allowFullScreen
                className="iframe-video"
              ></iframe>
              <div className="video-radar-lines" />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Army */}
      <section className="section creator-army-section">
        <div className="container">
          <div className="section-header">
            {/* <span className="section-meta">// PROPAGANDA DIVISION</span> */}
            <h2 className="section-title">CREATOR <span className="text-primary">ARMY</span></h2>
          </div>

          <div className="creator-grid">
            {CREATOR_ARMY.map((creator) => (
              <div key={creator.name} className="creator-card">
                <div className="hud-corner-top"></div>
                <div className="creator-avatar-placeholder">
                  <FiActivity className="pulse-wave" />
                </div>
                <div className="creator-info">
                  <h3>{creator.name}</h3>
                  <div className="meta">
                    <span>{creator.role}</span>
                    <span className="text-primary">{creator.subs} ({creator.platform})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intel / Latest News Section */}
      <section className="section news-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">// SECURED BROADCASTS</span>
            <h2 className="section-title">SECURED <span className="text-primary">BROADCASTS</span></h2>
          </div>

          <div className="grid grid-3">
            {news.slice(0, 3).map((article) => (
              <Link key={article._id} to={`/news/${article.slug}`} className="intel-card">
                <div className="intel-card-image">
                  {article.featuredImage ? (
                    <img src={article.featuredImage} alt={article.title} />
                  ) : (
                    <div className="intel-fallback-img"></div>
                   
                  )}
                  <span className="intel-badge">BROADCAST //</span>
                </div>
                <div className="intel-card-body">
                  <span className="intel-date">{formatDate(article.publishedAt)}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/news" variant="outline">VIEW ALL BROADCASTS <FiArrowRight /></Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section sponsors-section">
        <div className="container">
          <div className="section-header">
            <span className="section-meta">// INDUSTRIAL LOGISTIC PARTNERS</span>
            <h2 className="section-title">CO-OPERATIVE <span className="text-primary">NETWORKS</span></h2>
          </div>
          <div className="sponsor-marquee">
            <div className="marquee-track">
              {sponsors.map((s) => (
                <div key={s._id} className="sponsor-marquee-item">
                  {s.logo ? <img src={s.logo} alt={s.name} className="sponsor-logo" /> : s.name}
                </div>
              ))}
              {/* Duplicate for infinite loop effect */}
              {sponsors.map((s) => (
                <div key={`${s._id}-dup`} className="sponsor-marquee-item">
                  {s.logo ? <img src={s.logo} alt={s.name} className="sponsor-logo" /> : s.name}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button to="/sponsors" variant="outline">BECOME A NODE PARTNER</Button>
          </div>
        </div>
      </section>
    </>
  );
}
