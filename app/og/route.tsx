import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
          backgroundColor: '#f0f9f0',
          fontSize: 32,
          fontWeight: 'bold',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#22c55e',
            borderRadius: 50,
            marginBottom: 20,
          }}
        >
          🌾
        </div>
        <div style={{ color: '#166534', textAlign: 'center' }}>
          AgroChain Connect
        </div>
        <div style={{ color: '#374151', fontSize: 24, fontWeight: 'normal', marginTop: 10 }}>
          Transparent pricing and direct markets for farmers
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

