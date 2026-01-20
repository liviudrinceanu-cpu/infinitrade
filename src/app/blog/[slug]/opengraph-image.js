import { ImageResponse } from 'next/og';
import { blogArticles } from '@/data/blog';

export const runtime = 'edge';

export const alt = 'Infinitrade Romania - Blog';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const article = blogArticles.find(a => a.slug === slug);

  const title = article?.title || 'Blog Infinitrade';
  const category = article?.category || 'Echipamente Industriale';
  const readTime = article?.readTime || '5 min';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0a1628',
          padding: '60px',
        }}
      >
        {/* Top bar with gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #0990db 0%, #06b6d4 50%, #0990db 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 1,
          }}
        >
          {/* Blog badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(9, 144, 219, 0.15)',
                borderRadius: '30px',
                padding: '10px 20px',
              }}
            >
              <span
                style={{
                  color: '#0990db',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Blog
              </span>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(148, 163, 184, 0.1)',
                borderRadius: '30px',
                padding: '10px 20px',
              }}
            >
              <span
                style={{
                  color: '#94a3b8',
                  fontSize: '20px',
                }}
              >
                {category}
              </span>
            </div>
            <span
              style={{
                color: '#64748b',
                fontSize: '18px',
              }}
            >
              {readTime} citire
            </span>
          </div>

          {/* Article title */}
          <span
            style={{
              fontSize: title.length > 60 ? '48px' : '56px',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
              maxWidth: '90%',
            }}
          >
            {title}
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0990db 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>I</span>
            </div>
            <span style={{ color: 'white', fontSize: '28px', fontWeight: 600 }}>
              Infinitrade Romania
            </span>
          </div>
          <span style={{ color: '#64748b', fontSize: '20px' }}>
            infinitrade.ro/blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
