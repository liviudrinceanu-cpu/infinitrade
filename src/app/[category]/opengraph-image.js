import { ImageResponse } from 'next/og';
import { categories } from '@/data/products';

export const runtime = 'edge';
export const alt = 'Infinitrade Romania - Echipamente Industriale';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const category = categories.find(c => c.slug === params.category);

  if (!category) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0990DB',
          }}
        >
          <div style={{ fontSize: 60, color: 'white' }}>Infinitrade Romania</div>
        </div>
      ),
      { ...size }
    );
  }

  // Get top 4 brand names
  const topBrands = category.brands.slice(0, 4).map(b => b.name);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0c1222',
          padding: 60,
        }}
      >
        {/* Top bar with logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#0990DB',
            }}
          >
            INFINITRADE
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#94a3b8',
            }}
          >
            infinitrade.ro
          </div>
        </div>

        {/* Category Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {category.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            marginBottom: 40,
          }}
        >
          {category.tagline}
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'flex',
            gap: 60,
            marginBottom: 40,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#0990DB' }}>
              {category.stats.brands}
            </span>
            <span style={{ fontSize: 18, color: '#64748b' }}>Branduri</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#0990DB' }}>
              {category.stats.products}
            </span>
            <span style={{ fontSize: 18, color: '#64748b' }}>Produse</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#0990DB' }}>
              {category.stats.delivery}
            </span>
            <span style={{ fontSize: 18, color: '#64748b' }}>Livrare</span>
          </div>
        </div>

        {/* Brands */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          {topBrands.map((brand, i) => (
            <div
              key={i}
              style={{
                padding: '12px 24px',
                backgroundColor: '#1e293b',
                borderRadius: 8,
                fontSize: 18,
                color: 'white',
                fontWeight: 500,
              }}
            >
              {brand}
            </div>
          ))}
          {category.brands.length > 4 && (
            <div
              style={{
                padding: '12px 24px',
                backgroundColor: '#0990DB',
                borderRadius: 8,
                fontSize: 18,
                color: 'white',
                fontWeight: 600,
              }}
            >
              +{category.brands.length - 4} branduri
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 60,
            right: 60,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #334155',
            paddingTop: 24,
          }}
        >
          <span style={{ fontSize: 20, color: '#64748b' }}>
            Distribuitor Autorizat Romania
          </span>
          <span style={{ fontSize: 20, color: '#0990DB', fontWeight: 600 }}>
            Livrare 24-72h
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
