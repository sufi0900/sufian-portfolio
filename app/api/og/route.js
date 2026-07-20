// app/api/og/route.js
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Locked parameters aligned with your Growth Systems Architect identity
    const title = searchParams.get('title') || 'Growth Systems Architect';
    const subtitle = searchParams.get('subtitle') || 'AI-Augmented Web Engineering & Multi-Engine SEO Optimization';
    const category = searchParams.get('category') || 'The Skill Matrix';
    const theme = searchParams.get('theme') || 'gold'; // 'gold' or 'lionxe'
    
    const isLionxe = theme === 'lionxe';
    const primaryColor = isLionxe ? '#004DFD' : '#E3B341';
    
    // Explicit RGBA values for strict Satori compiler safety
    const pillBg = isLionxe ? 'rgba(0, 77, 253, 0.12)' : 'rgba(227, 179, 65, 0.12)';
    const pillBorder = isLionxe ? 'rgba(0, 77, 253, 0.3)' : 'rgba(227, 179, 65, 0.3)';
    
    const gradientColors = isLionxe 
      ? 'linear-gradient(135deg, #004DFD 0%, #3B82F6 100%)'
      : 'linear-gradient(135deg, #E3B341 0%, #C9952C 100%)';
      
    const bgGradient = isLionxe
      ? 'linear-gradient(135deg, #050b1a 0%, #020617 40%, #000000 100%)'
      : 'linear-gradient(135deg, #0b1024 0%, #060a18 40%, #03060f 100%)';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: bgGradient,
            padding: '70px 80px',
            fontFamily: 'sans-serif',
            color: '#EDE9DC',
            justifyContent: 'space-between',
            borderTop: `8px solid ${primaryColor}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* ══ BACKGROUND LAYER: Minimalist Geometric SVGs (Enforced display: flex) ══ */}
          <div style={{ display: 'flex', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            
            {/* Geometric Flow (Top Right Sub-container) */}
            <div style={{ display: 'flex', position: 'absolute', top: '-10%', right: '-10%', opacity: 0.05, width: '40%', height: '40%' }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad1-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: primaryColor, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: primaryColor, stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M0,50 Q25,0 50,50 Q75,100 100,50 T100,50" stroke={`url(#grad1-${theme})`} strokeWidth="0.5" fill="none" />
                <path d="M10,60 Q35,10 60,60 Q85,110 110,60 T110,60" stroke={`url(#grad1-${theme})`} strokeWidth="0.5" fill="none" />
              </svg>
            </div>

            {/* Neural Matrix Connectivity (Bottom Left Sub-container) */}
            <div style={{ display: 'flex', position: 'absolute', bottom: '-15%', left: '-15%', opacity: 0.05, width: '45%', height: '45%' }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad2-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: primaryColor, stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: primaryColor, stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="1.5" fill={`url(#grad2-${theme})`} />
                <circle cx="50" cy="40" r="1.5" fill={`url(#grad2-${theme})`} />
                <circle cx="30" cy="70" r="1.5" fill={`url(#grad2-${theme})`} />
                <circle cx="70" cy="60" r="1.5" fill={`url(#grad2-${theme})`} />
                <line x1="20" y1="20" x2="50" y2="40" stroke={`url(#grad2-${theme})`} strokeWidth="0.5" />
                <line x1="20" y1="20" x2="30" y2="70" stroke={`url(#grad2-${theme})`} strokeWidth="0.5" />
                <line x1="50" y1="40" x2="30" y2="70" stroke={`url(#grad2-${theme})`} strokeWidth="0.5" />
                <line x1="50" y1="40" x2="70" y2="60" stroke={`url(#grad2-${theme})`} strokeWidth="0.5" />
                <line x1="30" y1="70" x2="70" y2="60" stroke={`url(#grad2-${theme})`} strokeWidth="0.5" />
              </svg>
            </div>

          </div>

          {/* ══ FOREGROUND LAYER: Content Overlay ══ */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'space-between' }}>
            
            {/* TOP ROW: Macro Category Pill */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 32px',
                  background: pillBg,
                  border: `1px solid ${pillBorder}`,
                  borderRadius: '100px',
                  color: primaryColor,
                  fontSize: '22px',
                  fontWeight: '800',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                {category}
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ color: primaryColor, fontSize: '24px', fontWeight: '900', letterSpacing: '0.1em' }}>
                  {isLionxe ? 'LIONXE™ STANDARD' : 'SYSTEM INTEGRITY'}
                </div>
              </div>
            </div>

            {/* MIDDLE ROW: Core Typography */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <h1
                style={{
                  fontSize: title.length > 35 ? '66px' : '80px',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  margin: 0,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: '34px',
                  fontWeight: '500',
                  color: 'rgba(237, 233, 220, 0.75)',
                  margin: 0,
                  lineHeight: '1.4',
                  maxWidth: '1000px',
                }}
              >
                {subtitle}
              </p>
            </div>

            {/* BOTTOM ROW: Domain Identification Moat */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '45px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: gradientColors,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span style={{ fontSize: '32px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.03em' }}>
                  sufianmustafa.com
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '24px', color: 'rgba(237, 233, 220, 0.5)', fontWeight: '700', letterSpacing: '0.1em' }}>
                <span>DUBAI</span>
                <span style={{ color: primaryColor }}>•</span>
                <span>GCC</span>
                <span style={{ color: primaryColor }}>•</span>
                <span>GLOBAL</span>
              </div>
            </div>

          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
        },
      }
    );
  } catch (e) {
    return new Response('Failed to compile edge rendering layout template', { status: 500 });
  }
}