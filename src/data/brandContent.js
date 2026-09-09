/**
 * Brand Content - Rich SEO content for brand landing pages
 *
 * This file merges all 16 batches of brand content into a single export.
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
import { brandContentBatch5 } from './brandContent-batch5';
import { brandContentBatch6 } from './brandContent-batch6';
import { brandContentBatch7 } from './brandContent-batch7';
import { brandContentBatch8 } from './brandContent-batch8';
import { brandContentBatch9 } from './brandContent-batch9';
import { brandContentBatch10 } from './brandContent-batch10';
import { brandContentBatch11 } from './brandContent-batch11';
import { brandContentBatch12 } from './brandContent-batch12';
import { brandContentBatch13 } from './brandContent-batch13';
import { brandContentBatch14 } from './brandContent-batch14';
import { brandContentBatch15 } from './brandContent-batch15';
import { brandContentBatch16 } from './brandContent-batch16';
import { brandContentBatch17 } from './brandContent-batch17';
import { brandContentBatch18 } from './brandContent-batch18';
import { brandContentBatch19 } from './brandContent-batch19';
import { brandContentBatch20 } from './brandContent-batch20';
import { brandContentBatch21 } from './brandContent-batch21';
import { brandContentBatch22 } from './brandContent-batch22';
import { brandContentBatch23 } from './brandContent-batch23';
import { brandContentBatch24 } from './brandContent-batch24';
import { brandContentBatch25 } from './brandContent-batch25';

// Merge all batches into single object
export const brandContent = {
  ...brandContentBatch1,
  ...brandContentBatch2,
  ...brandContentBatch3,
  ...brandContentBatch4,
  ...brandContentBatch5,
  ...brandContentBatch6,
  ...brandContentBatch7,
  ...brandContentBatch8,
  ...brandContentBatch9,
  ...brandContentBatch10,
  ...brandContentBatch11,
  ...brandContentBatch12,
  ...brandContentBatch13,
  ...brandContentBatch14,
  ...brandContentBatch15,
  ...brandContentBatch16,
  ...brandContentBatch17,
  ...brandContentBatch18,
  ...brandContentBatch19,
  ...brandContentBatch20,
  ...brandContentBatch21,
  ...brandContentBatch22,
  ...brandContentBatch23,
  ...brandContentBatch24,
  ...brandContentBatch25,
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
