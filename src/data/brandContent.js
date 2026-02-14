/**
 * Brand Content - Rich SEO content for brand landing pages
 *
 * This file merges all 4 batches of brand content into a single export.
 * Each batch contains detailed information for specific brands including:
 * - Company overview and history
 * - Key products and applications
 * - Industries served
 * - Certifications
 * - Infinitrade relationship and services
 *
 * CRITICAL: All content is factual about our supply capabilities.
 * We do NOT claim official distributor status where not authorized.
 */

import { brandContentBatch1 } from './brandContent-batch1';
import { brandContentBatch2 } from './brandContent-batch2';
import { brandContentBatch3 } from './brandContent-batch3';
import { brandContentBatch4 } from './brandContent-batch4';

// Merge all batches into single object
export const brandContent = {
  ...brandContentBatch1,
  ...brandContentBatch2,
  ...brandContentBatch3,
  ...brandContentBatch4,
};

/**
 * Get brand content by simple slug
 * @param {string} simpleSlug - The brand's simple slug (e.g., 'grundfos', 'siemens')
 * @returns {Object|null} Brand content object or null if not found
 */
export function getBrandContent(simpleSlug) {
  return brandContent[simpleSlug] || null;
}

/**
 * Check if brand has rich content available
 * @param {string} simpleSlug - The brand's simple slug
 * @returns {boolean} True if content exists
 */
export function hasBrandContent(simpleSlug) {
  return simpleSlug in brandContent;
}

/**
 * Get list of all brands with rich content
 * @returns {string[]} Array of brand simple slugs
 */
export function getBrandsWithContent() {
  return Object.keys(brandContent);
}
