import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchNewsArticle, fetchNews } from '../api';
import { DEMO_NEWS, NEWS_CATEGORIES, formatDate } from '../utils/constants';

export default function NewsDetail() {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Fetch current article
  const { data: articleData } = useQuery({ queryKey: ['news', slug], queryFn: () => fetchNewsArticle(slug), retry: false });
  const article = articleData?.data || DEMO_NEWS.find((a) => a.slug === slug) || DEMO_NEWS[0];

  // Fetch all/old news
  const { data: allNewsData } = useQuery({ queryKey: ['news', 'all'], queryFn: () => fetchNews({ limit: 10 }), retry: false });
  const allNews = allNewsData ? allNewsData.data : DEMO_NEWS;
  
  // Filter out the current article and get the next 3
  const oldNews = allNews.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Helmet><title>{`${article.title} | Team Apex Gaming`}</title></Helmet>

      <article className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/news" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}>← Back to News</Link>
          <span className="badge">{NEWS_CATEGORIES[article.category] || article.category}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0', lineHeight: 1.2 }}>{article.title}</h1>
          <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>{formatDate(article.publishedAt)}</p>
          {article.featuredImage && (
            <img src={article.featuredImage} alt={article.title} style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} />
          )}
          <div
            style={{ color: 'var(--gray-light)', lineHeight: 1.9, fontSize: '1.1rem', marginBottom: '4rem' }}
            dangerouslySetInnerHTML={{ __html: article.content || `<p>${article.excerpt}</p>` }}
          />

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }} />

          <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem', color: 'var(--primary)' }}>Read Older News</h3>
          <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {oldNews.map((oldArticle) => (
              <Link to={`/news/${oldArticle.slug}`} key={oldArticle._id} className="glass-card news-card" style={{ padding: '1rem', textDecoration: 'none' }}>
                <div className="news-card-image" style={{ height: '120px' }}>
                  {oldArticle.featuredImage && <img src={oldArticle.featuredImage} alt={oldArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <span className="badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>{NEWS_CATEGORIES[oldArticle.category] || oldArticle.category}</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--white)' }}>{oldArticle.title}</h4>
                  <span style={{ color: 'var(--gray)', fontSize: '0.75rem' }}>{formatDate(oldArticle.publishedAt)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
