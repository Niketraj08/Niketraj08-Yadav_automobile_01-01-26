import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchTeamMembers } from '../api';
import { getInitials } from '../utils/constants';
import './About.css';

const TIMELINE = [
  { year: '2021', title: 'Foundation', desc: 'Team Apex Gaming founded with a vision to dominate Indian esports.' },
  { year: '2022', title: 'First Championship', desc: 'Won our first major BGMI tournament, establishing our presence.' },
  { year: '2023', title: 'Multi-Game Expansion', desc: 'Expanded into Valorant, CS2, and Free Fire MAX rosters.' },
  { year: '2024', title: 'BGIS Champions', desc: 'Historic BGIS 2024 victory — India\'s biggest BGMI title.' },
  { year: '2025', title: 'Global Ambitions', desc: 'Setting sights on international tournaments and VCT qualification.' },
];

const ACHIEVEMENTS = [
  { title: 'BGIS 2024', prize: '₹50 Lakhs', place: '1st Place' },
  { title: 'PMCO 2023', prize: '₹25 Lakhs', place: '1st Place' },
  { title: 'Skyesports Championship', prize: '₹10 Lakhs', place: '1st Place' },
  { title: 'VCT Open Qualifier', prize: '₹5 Lakhs', place: 'Top 4' },
];

const DEMO_MEMBERS = [
  { _id: '1', name: 'JONATHAN AMARAL', designation: 'Founder & CEO', type: 'founder', biography: 'Visionary leader who founded Team Apex Gaming with a dream to put India on the global esports map. With over 15 years in gaming industry, Rajesh has built TAG into India\'s most respected esports brand.' },
  { _id: '2', name: 'SRS GAMING', designation: 'Co-Founder & COO', type: 'co_founder', biography: 'Operations mastermind driving team growth and partnerships across India. Priya oversees all business operations and strategic partnerships.' },
  { _id: '3', name: 'SHREEMAN LEGEND', designation: 'Head Coach', type: 'coach', biography: 'Former pro player turned elite coach with 10+ years of competitive experience across multiple titles.' },
  { _id: '4', name: 'Sneha Reddy', designation: 'Performance Analyst', type: 'analyst', biography: 'Data-driven analyst optimizing team strategies and player performance through advanced analytics.' },
];

const TYPE_LABELS = { founder: 'Founder', co_founder: 'Co-Founder', manager: 'Team Manager', coach: 'Coach', analyst: 'Analyst' };

export default function About() {
  const { data } = useQuery({ queryKey: ['team-members'], queryFn: fetchTeamMembers, retry: false });
  const members = data?.data?.length ? data.data : DEMO_MEMBERS;

  const founders = members.filter((m) => m.type === 'founder' || m.type === 'co_founder');
  const staff = members.filter((m) => ['manager', 'coach', 'analyst'].includes(m.type));

  return (
    <>
      <Helmet><title>About Us | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1>About <span className="text-gradient">Us</span></h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem', fontSize: '1.2rem' }}>The story behind India&apos;s rising esports dynasty</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-story">
          <AnimatedSection>
            <div className="story-grid">
              <div>
                <span className="badge">Our Story</span>
                <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }}>Born To <span className="text-primary">Compete</span></h2>
                <p>Team Apex Gaming was founded in 2021 with a singular mission: to put India at the forefront of global esports. What started as a passionate group of gamers has evolved into one of India&apos;s most decorated esports organizations.</p>
                <p>We compete across BGMI, Valorant, CS2, Apex Legends, Free Fire MAX, and COD Mobile — fielding world-class rosters backed by elite coaching, cutting-edge analytics, and unwavering fan support.</p>
              </div>
              <div className="vision-mission">
                <div className="glass-card vm-card">
                  <h3>Vision</h3>
                  <p>To become the most respected and successful esports organization in India and compete at the highest global level.</p>
                </div>
                <div className="glass-card vm-card">
                  <h3>Mission</h3>
                  <p>To nurture talent, deliver championship performances, and build a community that celebrates the spirit of competitive gaming.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-title">Our <span className="text-primary">Timeline</span></h2>
            </div>
          </AnimatedSection>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content glass-card">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-title">Achievements & <span className="text-primary">Trophies</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-4">
            {ACHIEVEMENTS.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="glass-card trophy-card">
                  <div className="trophy-icon">🏆</div>
                  <h3>{a.title}</h3>
                  <div className="trophy-place">{a.place}</div>
                  <div className="trophy-prize">{a.prize}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-title">Leadership <span className="text-primary">Team</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-2">
            {founders.map((member, i) => (
              <AnimatedSection key={member._id} delay={i * 0.1}>
                <div className="member-card glass-card">
                  <div className="member-photo">
                    {member.photo ? <img src={member.photo} alt={member.name} /> : getInitials(member.name)}
                  </div>
                  <div className="member-info">
                    <span className="badge">{TYPE_LABELS[member.type]}</span>
                    <h3>{member.name}</h3>
                    <div className="member-designation">{member.designation}</div>
                    <p>{member.biography}</p>
                    <div className="member-social">
                      <a href="#"><FaTwitter /></a>
                      <a href="#"><FaInstagram /></a>
                      <a href="#"><FaLinkedin /></a>
                      <a href="#"><FaYoutube /></a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-title">Coaching & <span className="text-primary">Staff</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-3">
            {staff.map((member, i) => (
              <AnimatedSection key={member._id} delay={i * 0.1}>
                <div className="glass-card staff-card">
                  <div className="staff-photo">{member.photo ? <img src={member.photo} alt={member.name} /> : getInitials(member.name)}</div>
                  <span className="badge">{TYPE_LABELS[member.type]}</span>
                  <h3>{member.name}</h3>
                  <div className="member-designation">{member.designation}</div>
                  <p>{member.biography?.slice(0, 120)}...</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
