import { ImageResponse } from 'next/og';
import { industries } from '@/data/industries';

export const runtime = 'edge';

export const alt = 'Infinitrade Romania - Industrii';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);

  const name = industry?.name || 'Industrie';
  const applications = industry?.applications?.slice(0, 4) || [];
  const projects = industry?.stats?.projects || '200+';
  const experience = industry?.stats?.experience || '15+ ani';

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
          {/* Industry badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(9, 144, 219, 0.15)',
              borderRadius: '30px',
              padding: '12px 24px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                color: '#0990db',
                fontSize: '22px',
                fontWeight: 600,
              }}
            >
              Industrii Deservite
            </span>
          </div>

          {/* Industry name */}
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            {name}
          </span>

          {/* Applications */}
          {applications.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              {applications.map((app, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    borderRadius: '20px',
                    padding: '8px 16px',
                  }}
                >
                  <span
                    style={{
                      color: '#cbd5e1',
                      fontSize: '18px',
                    }}
                  >
                    {app}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ color: '#0990db', fontSize: '36px', fontWeight: 700 }}>
                {projects}
              </span>
              <span style={{ color: '#64748b', fontSize: '18px' }}>
                Proiecte Realizate
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ color: '#0990db', fontSize: '36px', fontWeight: 700 }}>
                {experience}
              </span>
              <span style={{ color: '#64748b', fontSize: '18px' }}>
                Experiență
              </span>
            </div>
          </div>
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
            infinitrade.ro/industrii
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
