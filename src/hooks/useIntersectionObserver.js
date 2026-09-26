'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for triggering animations on scroll using Intersection Observer API.
 * Lightweight replacement for framer-motion's useInView.
 *
 * v15 (D-2026-09-26): the default threshold is 0 (any visible pixel), not 0.1.
 * With 0.1 a section taller than ~10 viewports (the 24-card brand grid plus
 * the A–Z list on a phone: ~10 000 px against an 812 px screen) could never
 * reach 10% visibility, so its `.animate-fade-up` children stayed at
 * opacity 0 forever — the reader saw thousands of pixels of blank space and
 * the brand list only "appeared" at the very end. Reduced-motion users and
 * browsers without IntersectionObserver get the content immediately.
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root element (e.g., '-100px')
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // Stable dependency: callers pass a fresh object literal on every render.
  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (same as framer-motion's { once: true })
          observer.unobserve(element);
        }
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px',
        ...JSON.parse(optionsKey),
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [optionsKey]);

  return [ref, isVisible];
}
