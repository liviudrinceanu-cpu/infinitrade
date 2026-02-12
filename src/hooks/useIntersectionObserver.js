'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for triggering animations on scroll using Intersection Observer API.
 * Lightweight replacement for framer-motion's useInView.
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root element (e.g., '-100px')
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (same as framer-motion's { once: true })
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px',
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
