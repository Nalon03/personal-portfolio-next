import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

/**
 * Custom hook for intersection observer
 */
export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [node, setNode] = useState<Element | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const currentObserver = new IntersectionObserver(updateEntry, observerParams)

    observer.current = currentObserver
    currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, threshold, root, rootMargin, frozen])

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }
  }, [])

  return [setNode, entry] as const
}



