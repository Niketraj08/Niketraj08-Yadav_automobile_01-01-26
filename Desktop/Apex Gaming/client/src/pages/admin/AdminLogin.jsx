import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Button from '../../components/ui/Button';
import { login } from '../../api';
import { useAuthStore } from '../../store';
import './Admin.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login({ email, password });
      setAuth(res.user, res.token);
      toast.success('Welcome back!');
      navigate('/admin');
    } catch {
      if (email === 'admin@teamapexgaming.com' && password === 'admin123') {
        setAuth({ id: '1', name: 'Super Admin', email, role: 'super_admin' }, 'demo-token');
        toast.success('Demo login successful');
        navigate('/admin');
      } else {
        toast.error('Invalid credentials');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Helmet><title>Admin Login | Team Apex Gaming</title></Helmet>
      <form onSubmit={handleSubmit} className="glass-card login-card">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="logo-icon" style={{ margin: '0 auto 1rem', width: 56, height: 56, fontSize: '1.25rem' }}>TA</div>
          <h1 style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Admin Panel</h1>
          <p style={{ color: 'var(--gray)', marginTop: '0.5rem' }}>Team Apex Gaming</p>
        </div>
        <div className="form-group"><label>Email</label><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div className="form-group"><label>Password</label><input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /></div>
        <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
        <p style={{ color: 'var(--gray)', fontSize: '0.85rem', textAlign: 'center', marginTop: '1.5rem' }}>
          Demo: admin@teamapexgaming.com / admin123
        </p>
      </form>
    </div>
  );
}
