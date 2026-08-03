import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaTwitch } from 'react-icons/fa';
import logoImg from '../../assets/team_apex_logo-removebg-preview.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={logoImg} alt="Team Apex Gaming Logo" style={{ width: '180px', height: '180px', objectFit: 'contain' }} />
            </Link>
            <p className="footer-slogan">TAG ON TOP!</p>
          </div>
          
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord"><FaDiscord /></a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" aria-label="Twitch"><FaTwitch /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">&copy; {new Date().getFullYear()} Team Apex Gaming. All rights reserved.</span>
          <div className="footer-utility-links">
            <Link to="/about">About</Link>
            <Link to="/rosters">Rosters</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
