import { ImageResponse } from 'next/og';
import { allBrands, categories } from '@/data/products';

export const runtime = 'edge';

export const alt = 'Infinitrade Romania - Furnizor Echipamente Industriale';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { brandSlug } = await params;
  const brand = allBrands.find(b => b.slug === brandSlug);
  const category = brand ? categories.find(c => c.slug === brand.category) : null;

  const brandName = brand?.name || 'Brand';
  const categoryName = category?.name || 'Echipamente Industriale';
  const countryName = brand?.country || '';

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
          {/* Category badge */}
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
                fontSize: '24px',
                fontWeight: 600,
              }}
            >
              {categoryName}
            </span>
          </div>

          {/* Brand name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.1,
              }}
            >
              {brandName}
            </span>
            <span
              style={{
                fontSize: '32px',
                color: '#94a3b8',
              }}
            >
              Furnizor în România
            </span>
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#64748b',
                fontSize: '20px',
              }}
            >
              <span style={{ color: '#22c55e' }}>✓</span>
              <span style={{ color: '#cbd5e1' }}>Produse Originale</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#64748b',
                fontSize: '20px',
              }}
            >
              <span style={{ color: '#22c55e' }}>✓</span>
              <span style={{ color: '#cbd5e1' }}>Livrare 24-72h</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#64748b',
                fontSize: '20px',
              }}
            >
              <span style={{ color: '#22c55e' }}>✓</span>
              <span style={{ color: '#cbd5e1' }}>Suport Tehnic</span>
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
            infinitrade.ro
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
