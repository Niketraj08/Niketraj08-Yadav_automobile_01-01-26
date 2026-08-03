import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import AnimatedSection from '../components/ui/AnimatedSection';
import PlayerCard from '../components/ui/PlayerCard';
import { fetchGames, fetchPlayersByGame } from '../api';
import { GAMES, DEMO_PLAYERS } from '../utils/constants';
import './Rosters.css';

export default function Rosters() {
  const [activeGame, setActiveGame] = useState('bgmi');

  const { data: gamesData } = useQuery({ queryKey: ['games'], queryFn: fetchGames, retry: false });
  const { data: rosterData, isLoading } = useQuery({
    queryKey: ['roster', activeGame],
    queryFn: () => fetchPlayersByGame(activeGame),
    retry: false,
  });

  const games = gamesData?.data?.length ? gamesData.data : GAMES;
  const players = rosterData?.data?.length ? rosterData.data : DEMO_PLAYERS.filter((p) => !p.game?.slug || p.game.slug === activeGame);

  return (
    <>
      <Helmet><title>Rosters | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>Active <span className="text-gradient">Rosters</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Meet the warriors representing Team Apex across every title</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="roster-tabs">
            {games.map((game) => (
              <button
                key={game.slug}
                className={`roster-tab ${activeGame === game.slug ? 'active' : ''}`}
                onClick={() => setActiveGame(game.slug)}
              >
                {game.name}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="loading-spinner" />
          ) : players.length === 0 ? (
            <div className="empty-roster glass-card">
              <h3>Roster Coming Soon</h3>
              <p>We&apos;re building our {games.find((g) => g.slug === activeGame)?.name || activeGame} roster. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-3">
              {players.map((player, i) => (
                <AnimatedSection key={player._id} delay={i * 0.08}>
                  <PlayerCard player={player} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
