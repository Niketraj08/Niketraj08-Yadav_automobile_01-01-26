import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiPlay } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fetchMedia, fetchYoutubeVideos } from '../api';

const TABS = ['all', 'photo', 'video', 'short', 'highlight'];

const DEMO_MEDIA = [
  { _id: '1', title: 'BGIS 2024 Grand Finals Highlights', type: 'highlight', youtubeId: 'hStUq_qPx6k', url: 'https://www.youtube.com/embed/hStUq_qPx6k?si=L72zM7djrAIGrWZ-' },
  { _id: '2', title: 'Team Apex Bootcamp Vlog', type: 'video', youtubeId: 'hStUq_qPx6k', url: 'https://www.youtube.com/embed/hStUq_qPx6k?si=L72zM7djrAIGrWZ-' },
  { _id: '3', title: 'ApexPredator 1v4 Clutch', type: 'short', youtubeId: 'hStUq_qPx6k', url: 'https://www.youtube.com/embed/hStUq_qPx6k?si=L72zM7djrAIGrWZ-' },
  { _id: '4', title: 'Championship Celebration', type: 'photo', url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070' },
  { _id: '5', title: 'Valorant Scrim Highlights', type: 'highlight', youtubeId: 'hStUq_qPx6k', url: 'https://www.youtube.com/embed/hStUq_qPx6k?si=L72zM7djrAIGrWZ-' },
  { _id: '6', title: 'Behind The Scenes', type: 'video', youtubeId: 'hStUq_qPx6k', url: 'https://www.youtube.com/embed/hStUq_qPx6k?si=L72zM7djrAIGrWZ-' },
];

export default function Media() {
  const [tab, setTab] = useState('all');
  const { data: dbData } = useQuery({ queryKey: ['media'], queryFn: () => fetchMedia(), retry: false });
  const { data: ytData } = useQuery({ queryKey: ['youtube-videos'], queryFn: () => fetchYoutubeVideos(), retry: false });

  const dbMedia = dbData?.data || [];
  const ytMedia = ytData?.data || [];

  // Combine database media items and YouTube feed items, deduplicating by YouTube Video ID
  const combined = [...dbMedia];
  const dbYoutubeIds = new Set(dbMedia.map((m) => m.youtubeId).filter(Boolean));

  ytMedia.forEach((ytVideo) => {
    if (!dbYoutubeIds.has(ytVideo.youtubeId)) {
      combined.push(ytVideo);
    }
  });

  const rawMedia = combined.length ? combined : DEMO_MEDIA;
  const filtered = tab === 'all' ? rawMedia : rawMedia.filter((m) => m.type === tab);

  const getYoutubeId = (item) => {
    if (item.youtubeId) return item.youtubeId;
    if (item.url && (item.url.includes('youtube.com') || item.url.includes('youtu.be'))) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = item.url.match(regExp);
      if (match && match[2].length === 11) {
        return match[2];
      }
    }
    return null;
  };

  const getThumbnail = (item) => {
    if (item.thumbnail) return item.thumbnail;
    const yId = getYoutubeId(item);
    if (yId) return `https://img.youtube.com/vi/${yId}/hqdefault.jpg`;
    return item.url;
  };

  const handleItemClick = (item) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <Helmet><title>Media | Team Apex Gaming</title></Helmet>

      <div className="page-hero">
        <div className="container">
          <h1><span className="text-gradient">Media</span> Gallery</h1>
          <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Photos, videos, highlights, and more</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="game-tabs" style={{ marginBottom: '2rem' }}>
            {TABS.map((t) => (
              <button key={t} className={`game-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                {t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1) + 's'}
              </button>
            ))}
          </div>

          <div className="media-grid">
            {filtered.map((item, i) => {
              const yId = getYoutubeId(item);
              const thumb = getThumbnail(item);
              const isVideo = yId || item.type === 'video' || item.type === 'highlight' || item.type === 'short';

              return (
                <AnimatedSection key={item._id} delay={i * 0.06}>
                  <div className="glass-card media-item" onClick={() => handleItemClick(item)}>
                    <div className="media-thumb">
                      {thumb ? (
                        <>
                          <img src={thumb} alt={item.title} />
                          {isVideo && <div className="media-play"><FiPlay /></div>}
                        </>
                      ) : (
                        <div className="media-photo-placeholder">📸</div>
                      )}
                      <span className="badge media-type-badge">{item.type}</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .media-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
        .media-item { overflow: hidden; cursor: pointer; padding: 0; }
        .media-item h3 { padding: 1rem 1.25rem; font-size: 0.95rem; }
        .media-thumb { aspect-ratio: 16/9; position: relative; background: var(--dark-3); overflow: hidden; }
        .media-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .media-play {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.4);
          font-size: 2.5rem; color: var(--primary);
          transition: var(--transition);
        }
        .media-item:hover .media-play { background: rgba(255,107,0,0.3); }
        .media-type-badge { position: absolute; top: 0.75rem; left: 0.75rem; }
        .media-photo-placeholder { display: flex; align-items: center; justify-content: center; height: 100%; font-size: 3rem; }
      `}</style>
    </>
  );
}
