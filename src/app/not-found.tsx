export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#08203A',
      color: 'white',
      padding: '20px'
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>404</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: '#94a3b8' }}>This page could not be found.</p>
      <a
        href="/"
        style={{
          padding: '10px 20px',
          background: '#06b6d4',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '16px'
        }}
      >
        Return Home
      </a>
    </div>
  )
}

