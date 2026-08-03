import { Link } from 'react-router-dom';
import { getInitials } from '../../utils/constants';
import './PlayerCard.css';

export default function PlayerCard({ player }) {
  const stats = player.statistics || {};

  return (
    <Link to={`/players/${player.slug}`} className="player-card">
      <div className="player-card-inner">
        <div className="player-card-photo">
          {player.photo ? (
            <img src={player.photo} alt={player.ign} loading="lazy" />
          ) : (
            <span className="initials">{getInitials(player.ign)}</span>
          )}
        </div>
        <div className="player-card-info">
          <div className="ign">{player.ign}</div>
          <div className="real-name">{player.realName}</div>
          <div className="player-card-meta">
            <span className="badge">{player.role}</span>
            {player.game?.name && <span className="badge">{player.game.name}</span>}
          </div>
          {(stats.kd || stats.winRate) && (
            <div className="player-card-stats">
              {stats.kd && <div className="stat"><div className="stat-value">{stats.kd}</div><div className="stat-label">K/D</div></div>}
              {stats.winRate && <div className="stat"><div className="stat-value">{stats.winRate}%</div><div className="stat-label">Win Rate</div></div>}
              {stats.matchesPlayed && <div className="stat"><div className="stat-value">{stats.matchesPlayed}</div><div className="stat-label">Matches</div></div>}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
