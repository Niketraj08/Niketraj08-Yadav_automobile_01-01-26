import { NavLink, Outlet, Navigate } from 'react-router-dom';
import {
  FiGrid, FiUsers, FiAward, FiCalendar, FiFileText, FiImage,
  FiShoppingBag, FiPackage, FiStar, FiClipboard, FiSettings, FiLogOut, FiHome,
} from 'react-icons/fi';
import { useAuthStore } from '../../store';
import './Admin.css';

const NAV = [
  { to: '/admin', icon: FiGrid, label: 'Dashboard', end: true },
  { to: '/admin/players', icon: FiUsers, label: 'Players' },
  { to: '/admin/rosters', icon: FiAward, label: 'Rosters' },
  { to: '/admin/tournaments', icon: FiCalendar, label: 'Tournaments' },
  { to: '/admin/news', icon: FiFileText, label: 'News' },
  { to: '/admin/media', icon: FiImage, label: 'Media' },
  { to: '/admin/products', icon: FiShoppingBag, label: 'Store' },
  { to: '/admin/orders', icon: FiPackage, label: 'Orders' },
  { to: '/admin/sponsors', icon: FiStar, label: 'Sponsors' },
  { to: '/admin/applications', icon: FiClipboard, label: 'Recruitment' },
  { to: '/admin/team-members', icon: FiUsers, label: 'Staff' },
  { to: '/admin/users', icon: FiUsers, label: 'Users' },
  { to: '/admin/settings', icon: FiSettings, label: 'Settings' },
];

export default function AdminLayout() {
  const { user, logout } = useAuthStore();

  if (!user || !['super_admin', 'manager', 'coach', 'content_manager'].includes(user.role)) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="logo">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="logo-icon">TA</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem' }}>ADMIN</span>
          </div>
        </div>
        <nav className="admin-nav">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              <item.icon /> {item.label}
            </NavLink>
          ))}
          <a href="/" target="_blank" rel="noopener noreferrer"><FiHome /> View Site</a>
          <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', background: 'none', border: 'none', color: 'var(--gray-light)', width: '100%', cursor: 'pointer', fontSize: '0.95rem' }}>
            <FiLogOut /> Logout
          </button>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
