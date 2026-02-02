'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '20px', color: '#94a3b8' }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          padding: '10px 20px',
          background: '#06b6d4',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Try again
      </button>
    </div>
  )
}

