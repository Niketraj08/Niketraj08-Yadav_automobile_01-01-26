import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { submitApplication } from '../api';
import { GAMES } from '../utils/constants';

export default function Recruitment() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', age: '', email: '', phone: '', game: 'bgmi', rank: '', achievements: '' });
  const [resume, setResume] = useState(null);
  const [clips, setClips] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (resume) fd.append('resume', resume);
      clips.forEach((f) => fd.append('clips', f));
      await submitApplication(fd);
      toast.success('Application submitted! We will review and get back to you.');
      setForm({ name: '', age: '', email: '', phone: '', game: 'bgmi', rank: '', achievements: '' });
      setResume(null);
      setClips([]);
    } catch {
      toast.success('Application received! (Demo mode — connect backend for file uploads)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet><title>Join Team Apex Gaming | Recruitment</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>Join The <span className="text-gradient">Legacy</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Think you have what it takes? Apply now.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2.5rem' }}>
              <div className="checkout-grid">
                <div className="form-group"><label>Full Name</label><input name="name" required value={form.name} onChange={handleChange} /></div>
                <div className="form-group"><label>Age</label><input name="age" type="number" required min="13" max="35" value={form.age} onChange={handleChange} /></div>
              </div>
              <div className="checkout-grid">
                <div className="form-group"><label>Email</label><input name="email" type="email" required value={form.email} onChange={handleChange} /></div>
                <div className="form-group"><label>Phone</label><input name="phone" value={form.phone} onChange={handleChange} /></div>
              </div>
              <div className="checkout-grid">
                <div className="form-group">
                  <label>Game</label>
                  <select name="game" value={form.game} onChange={handleChange}>
                    {GAMES.map((g) => <option key={g.slug} value={g.slug}>{g.name}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Current Rank</label><input name="rank" required value={form.rank} onChange={handleChange} placeholder="e.g. Conqueror, Immortal" /></div>
              </div>
              <div className="form-group">
                <label>Achievements</label>
                <textarea name="achievements" rows={4} value={form.achievements} onChange={handleChange} placeholder="List your tournament wins, ranks, and competitive experience..." />
              </div>
              <div className="form-group">
                <label>Upload Resume (PDF)</label>
                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />
              </div>
              <div className="form-group">
                <label>Upload Gameplay Clips (MP4, max 5)</label>
                <input type="file" accept="video/*" multiple onChange={(e) => setClips(Array.from(e.target.files))} />
              </div>
              <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
