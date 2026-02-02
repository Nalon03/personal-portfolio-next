'use client'

import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

const getNavigationType = () => {
  if (typeof performance === 'undefined') {
    return 'navigate'
  }

  const entry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
  if (entry?.type) {
    return entry.type
  }

  const legacyType = (performance as Performance & { navigation?: { type?: number } }).navigation?.type
  if (legacyType === 1) {
    return 'reload'
  }
  if (legacyType === 2) {
    return 'back_forward'
  }

  return 'navigate'
}

const ScrollPersistence = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const key = `scroll:${pathname}`
    window.history.scrollRestoration = 'manual'

    const isReload = getNavigationType() === 'reload'

    if (isReload) {
      const saved = sessionStorage.getItem(key)
      const savedY = saved ? Number(saved) : 0
      if (Number.isFinite(savedY)) {
        const restore = () => window.scrollTo(0, savedY)
        requestAnimationFrame(() => {
          restore()
          setTimeout(restore, 50)
        })
      }
    }

    let rafId = 0
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(() => {
        sessionStorage.setItem(key, String(window.scrollY))
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [pathname])

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000,
      },
    },
  }))
  
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollPersistence />
      {children}
    </QueryClientProvider>
  )
}

