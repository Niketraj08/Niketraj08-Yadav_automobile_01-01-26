import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getDashboardStats } from '../../api';
import { useAuthStore } from '../../store';

const DEMO_STATS = { players: 36, tournaments: 12, liveMatches: 0, news: 24, orders: 156, pendingApplications: 8, revenue: 485000 };

export default function AdminDashboard() {
  const user = useAuthStore((s) => s.user);
  const { data } = useQuery({ queryKey: ['admin-stats'], queryFn: getDashboardStats, retry: false });
  const stats = data?.data || DEMO_STATS;

  const cards = [
    { label: 'Active Players', value: stats.players },
    { label: 'Tournaments', value: stats.tournaments },
    { label: 'Live Matches', value: stats.liveMatches },
    { label: 'Published News', value: stats.news },
    { label: 'Orders', value: stats.orders },
    { label: 'Pending Applications', value: stats.pendingApplications },
    { label: 'Revenue', value: `₹${(stats.revenue / 1000).toFixed(0)}K` },
  ];

  return (
    <>
      <Helmet><title>Dashboard | Admin</title></Helmet>
      <div className="admin-header">
        <div>
          <h1>Dashboard</h1>
          <p style={{ color: 'var(--gray)' }}>Welcome back, {user?.name}</p>
        </div>
        <span className="badge">{user?.role?.replace('_', ' ')}</span>
      </div>

      <div className="stat-cards">
        {cards.map((c) => (
          <div key={c.label} className="glass-card admin-stat">
            <div className="value">{c.value}</div>
            <div className="label">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/admin/players" className="btn btn-outline">Add Player</Link>
          <Link to="/admin/news" className="btn btn-outline">Create News</Link>
          <Link to="/admin/products" className="btn btn-outline">Add Product</Link>
          <Link to="/admin/matches" className="btn btn-outline">Update Live Match</Link>
        </div>
      </div>
    </>
  );
}
