import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiX, FiCompass, FiTerminal, FiTarget, FiDatabase, FiRadio } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store';
import logoImg from '../../assets/team_apex_logo-removebg-preview.png';
import './Header.css';

const TACTICAL_NODES = [
  { to: '/', label: 'HOME', code: 'SYS_LOC_001', coord: '19.0760° N, 72.8777° E' },
  { to: '/about', label: 'ABOUT', code: 'SYS_LOC_002', coord: '18.9601° N, 72.8250° E' },
  { to: '/rosters', label: 'ROSTERS', code: 'SYS_LOC_003', coord: '19.1200° N, 72.9000° E' },
  { to: '/match-center', label: 'MATCH CENTER', code: 'SYS_LOC_004', coord: '19.2312° N, 72.8522° E' },
  { to: '/tournaments', label: 'TOURNAMENTS', code: 'SYS_LOC_005', coord: '19.0176° N, 72.8478° E' },
  { to: '/store', label: 'STORE', code: 'SYS_LOC_006', coord: '18.9261° N, 72.8330° E' },
  { to: '/news', label: 'NEWS', code: 'SYS_LOC_007', coord: '19.0522° N, 72.8911° E' },
  { to: '/media', label: 'MEDIA', code: 'SYS_LOC_008', coord: '19.1678° N, 72.9324° E' },
  { to: '/recruitment', label: 'RECRUITMENT', code: 'SYS_LOC_009', coord: '18.9850° N, 72.8120° E' },
  { to: '/contact', label: 'CONTACT', code: 'SYS_LOC_010', coord: '19.1102° N, 72.8643° E' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const location = useLocation();
  const cartItems = useCartStore((s) => s.items);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <div className="header-left">
            <Link to="/" className="logo">
              <img src={logoImg} alt="Team Apex Gaming Logo" className="logo-img" />
            </Link>
            <div className="logo-divider" />
            <div className="org-badge">
              <span className="est">EST. 2026</span>
              <span className="location">MUMBAI</span>
            </div>
          </div>

          <div className="header-right">
            <Link to="/store/cart" className="cart-btn" aria-label="View Cart">
              <FiShoppingBag />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Link>

            <button
              className={`menu-trigger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Drop Location"
            >
              <span className="menu-text">DROP LOCATION</span>
              <div className="menu-icon-wrapper">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Drop Location Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="tactical-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Grid background lines */}
            <div className="grid-overlay" />
            
            {/* Radar scanner sweep visual */}
            <div className="radar-sweep" />

            {/* Futuristic design flourishes */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>

            <div className="tactical-layout-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '2rem', zIndex: 5, maxHeight: '90vh', overflowY: 'auto', padding: '2rem 0' }}>
              <div className="tactical-container" style={{ height: 'auto', minHeight: '60vh', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem' }}>

                {/* Center Map Navigation Nodes */}
                <div className="tactical-map-center">
                  <div className="map-radar-circle">
                    <div className="radar-ring r1"></div>
                    <div className="radar-ring r2"></div>
                    <div className="radar-ring r3"></div>
                    <div className="radar-crosshair-h"></div>
                    <div className="radar-crosshair-v"></div>
                  </div>

                  <div className="nodes-grid">
                    {TACTICAL_NODES.map((node, i) => (
                      <motion.div
                        key={node.to}
                        className="tactical-node-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={node.to}
                          className="tactical-node-link"
                          onMouseEnter={() => setHoveredNode(node)}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          <div className="node-marker">
                            <FiTarget />
                          </div>
                          <div className="node-info">
                            <span className="node-code">{node.code}</span>
                            <span className="node-name">{node.label}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right HUD Panel */}
                <div className="hud-side-panel right-panel">
                  <div className="panel-header">
                    <FiCompass /> DIRECTIVES
                  </div>
                  <div className="panel-text-block">
                    <p className="glitch-text" data-text="TAG ON TOP">#TAGonTOP</p>
                    <p className="desc">WE START AT THE TOP AND GO BEYOND.</p>
                    <p className="subdesc">SELECT A TARGET COORDINATE FROM THE CENTER CORE GRID TO TRANSMIT DATA STREAM AND RE-ROUTE LOGISTICS PIPELINE.</p>
                  </div>
                  <button
                    className="close-menu-btn"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FiX /> CLOSE TERMINAL
                  </button>
                </div>
              </div>

              {/* BGMI Maps Section */}
              <div className="bgmi-maps-container">
                <div className="panel-header" style={{ marginBottom: '1rem' }}>
                  <FiCompass /> BGMI COMBAT ZONES
                </div>
                <div className="bgmi-maps-grid">
                  <Link to="/drop-locations/erangel" className="bgmi-map-card" onClick={() => setMenuOpen(false)}>
                    <div className="map-name">ERANGEL</div>
                    <div className="map-overlay"></div>
                    <img src="https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=600&auto=format&fit=crop" alt="Erangel Map" />
                  </Link>
                  <Link to="/drop-locations/miramar" className="bgmi-map-card" onClick={() => setMenuOpen(false)}>
                    <div className="map-name">MIRAMAR</div>
                    <div className="map-overlay"></div>
                    <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=600&auto=format&fit=crop" alt="Miramar Map" />
                  </Link>
                  <Link to="/drop-locations/rondo" className="bgmi-map-card" onClick={() => setMenuOpen(false)}>
                    <div className="map-name">RONDO</div>
                    <div className="map-overlay"></div>
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop" alt="Rondo Map" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
