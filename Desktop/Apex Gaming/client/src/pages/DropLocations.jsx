import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiMapPin, FiChevronLeft } from 'react-icons/fi';
import { BGMI_DROP_LOCATIONS, MAP_IMAGES } from '../utils/dropLocationsData';
import './DropLocations.css';

export default function DropLocations() {
  const { mapName } = useParams();
  const [activeTeam, setActiveTeam] = useState(null);

  // Validate mapName
  if (!mapName || !BGMI_DROP_LOCATIONS[mapName.toLowerCase()]) {
    return <Navigate to="/" />;
  }

  const mapKey = mapName.toLowerCase();
  const teams = BGMI_DROP_LOCATIONS[mapKey];
  const mapImage = MAP_IMAGES[mapKey];

  return (
    <>
      <Helmet>
        <title>{`${mapName.toUpperCase()} Drop Locations | Team Apex Gaming`}</title>
      </Helmet>

      <div className="drop-locations-page">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/" className="btn btn-ghost" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            <FiChevronLeft /> RETURN TO MAIN
          </Link>
        </div>

        <div className="map-viewer-container">
          <div className="map-image-wrapper">
            <img src={mapImage} alt={`${mapName} map`} />
            <div className="map-grid-overlay" />
            
            {/* Render drop locations */}
            {teams.map((item, index) => (
              <div 
                key={index} 
                className="map-marker"
                style={{ 
                  left: `${item.coords.x}%`, 
                  top: `${item.coords.y}%`,
                  zIndex: activeTeam === item.team ? 50 : 10,
                  transform: activeTeam === item.team ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setActiveTeam(item.team)}
                onMouseLeave={() => setActiveTeam(null)}
              >
                <div className="marker-tooltip">
                  <strong>{item.team}</strong><br/>
                  {item.location}
                </div>
              </div>
            ))}
          </div>

          <div className="teams-sidebar">
            <div className="teams-sidebar-header">
              <h2>{mapName.toUpperCase()}</h2>
              <p>INDIAN TEAMS DROP ZONES</p>
            </div>
            
            <div className="teams-list">
              {teams.map((item, index) => (
                <div 
                  key={index} 
                  className={`team-drop-item ${activeTeam === item.team ? 'active' : ''}`}
                  onMouseEnter={() => setActiveTeam(item.team)}
                  onMouseLeave={() => setActiveTeam(null)}
                >
                  <div className="team-name">{item.team}</div>
                  <div className="drop-spot"><FiMapPin style={{ display: 'inline', marginRight: '4px' }}/> {item.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
