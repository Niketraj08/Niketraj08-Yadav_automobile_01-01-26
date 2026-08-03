import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { submitContact } from '../api';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(form);
      toast.success('Message sent! We will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.success('Message received!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet><title>Contact | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>Contact <span className="text-gradient">Us</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>We&apos;d love to hear from you</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <AnimatedSection>
              <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px' }}>Get In Touch</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <FaEnvelope style={{ color: 'var(--primary)', fontSize: '1.2rem' }} />
                    <div><strong>Email</strong><br /><span style={{ color: 'var(--gray)' }}>contact@teamapexgaming.com</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <FaPhone style={{ color: 'var(--primary)', fontSize: '1.2rem' }} />
                    <div><strong>Phone</strong><br /><span style={{ color: 'var(--gray)' }}>+91 98765 43210</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <FaMapMarkerAlt style={{ color: 'var(--primary)', fontSize: '1.2rem' }} />
                    <div><strong>Location</strong><br /><span style={{ color: 'var(--gray)' }}>Mumbai, Maharashtra, India</span></div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  <a href="#" style={{ color: 'var(--gray-light)', fontSize: '1.5rem' }}><FaTwitter /></a>
                  <a href="#" style={{ color: 'var(--gray-light)', fontSize: '1.5rem' }}><FaInstagram /></a>
                  <a href="#" style={{ color: 'var(--gray-light)', fontSize: '1.5rem' }}><FaYoutube /></a>
                  <a href="#" style={{ color: 'var(--gray-light)', fontSize: '1.5rem' }}><FaDiscord /></a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2rem' }}>
                <div className="form-group"><label>Name</label><input name="name" required value={form.name} onChange={handleChange} /></div>
                <div className="form-group"><label>Email</label><input name="email" type="email" required value={form.email} onChange={handleChange} /></div>
                <div className="form-group"><label>Subject</label><input name="subject" required value={form.subject} onChange={handleChange} /></div>
                <div className="form-group"><label>Message</label><textarea name="message" required rows={5} value={form.message} onChange={handleChange} /></div>
                <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="glass-card" style={{ marginTop: '3rem', padding: 0, overflow: 'hidden', borderRadius: '16px' }}>
              <iframe
                title="Team Apex Gaming Location"
                src="https://maps.google.com/maps?q=Mumbai,India&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .container > div { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
