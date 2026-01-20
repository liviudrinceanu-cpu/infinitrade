import { ImageResponse } from 'next/og';
import { caseStudies } from '@/data/caseStudies';

export const runtime = 'edge';

export const alt = 'Infinitrade Romania - Studiu de Caz';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find(cs => cs.slug === slug);

  const title = caseStudy?.shortTitle || 'Studiu de Caz';
  const industry = caseStudy?.industry || 'Industrie';
  const brands = caseStudy?.brands?.slice(0, 4) || [];
  const results = caseStudy?.results || {};
  const year = caseStudy?.year || '2024';

  // Get first two result entries
  const resultEntries = Object.entries(results).slice(0, 2);

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
          {/* Badge row */}
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
                Studiu de Caz
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
                {industry}
              </span>
            </div>
            <span
              style={{
                color: '#64748b',
                fontSize: '18px',
              }}
            >
              {year}
            </span>
          </div>

          {/* Title */}
          <span
            style={{
              fontSize: title.length > 30 ? '48px' : '56px',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}
          >
            {title}
          </span>

          {/* Results */}
          {resultEntries.length > 0 && (
            <div
              style={{
                display: 'flex',
                gap: '32px',
                marginBottom: '24px',
              }}
            >
              {resultEntries.map(([key, value], i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '16px 24px',
                    backgroundColor: 'rgba(9, 144, 219, 0.1)',
                    borderRadius: '12px',
                  }}
                >
                  <span style={{ color: '#0990db', fontSize: '32px', fontWeight: 700 }}>
                    {value}
                  </span>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>
                    {key === 'energySaving' ? 'Economie Energie' :
                     key === 'efficiency' ? 'Eficiență' :
                     key === 'reliability' ? 'Fiabilitate' :
                     key === 'availability' ? 'Disponibilitate' :
                     key === 'productivity' ? 'Productivitate' :
                     key}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Brands */}
          {brands.length > 0 && (
            <div
              style={{
                display: 'flex',
                gap: '12px',
              }}
            >
              {brands.map((brand, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                  }}
                >
                  <span
                    style={{
                      color: '#cbd5e1',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                  >
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          )}
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
            infinitrade.ro/studii-de-caz
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
