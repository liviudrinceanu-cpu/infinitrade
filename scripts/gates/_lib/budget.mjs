#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
// Budget and spend files are at /home/claude/b3/out/plan-v2/checks/
const budgetDir = '/home/claude/b3/out/plan-v2/checks';
const budgetFile = path.join(budgetDir, 'token-budget.json');
const spendFile = path.join(budgetDir, 'spend-log.jsonl');

// Read command line arguments
const args = process.argv.slice(2);
const command = args[0];

/**
 * Load budget configuration
 */
function loadBudget() {
  if (!fs.existsSync(budgetFile)) {
    console.error(`ERROR: Budget file not found: ${budgetFile}`);
    process.exit(1);
  }
  const content = fs.readFileSync(budgetFile, 'utf-8');
  return JSON.parse(content);
}

/**
 * Load all spend records
 */
function loadSpend() {
  if (!fs.existsSync(spendFile)) {
    return [];
  }
  const content = fs.readFileSync(spendFile, 'utf-8').trim();
  if (!content) {
    return [];
  }
  return content.split('\n').map((line) => {
    try {
      return JSON.parse(line);
    } catch (e) {
      console.error(`Failed to parse spend line: ${line}`);
      return null;
    }
  }).filter(Boolean);
}

/**
 * Record a new spend entry
 */
function recordSpend(phase, item, tokens) {
  if (!phase || !item || typeof tokens !== 'number') {
    console.error('Usage: node budget.mjs --record <phase> <item> <tokens>');
    process.exit(1);
  }

  const entry = {
    phase,
    item,
    tokens: Math.round(tokens),
    timestamp: new Date().toISOString()
  };

  // Ensure directory exists
  if (!fs.existsSync(budgetDir)) {
    fs.mkdirSync(budgetDir, { recursive: true });
  }

  // Append to spend file
  fs.appendFileSync(spendFile, JSON.stringify(entry) + '\n');
  console.log(`Recorded: ${phase} ${item} = ${tokens} tokens`);
}

/**
 * Check phase budget
 */
function checkPhase(phase) {
  if (!phase) {
    console.error('Usage: node budget.mjs --check <phase>');
    process.exit(1);
  }

  const budget = loadBudget();
  const spend = loadSpend();

  // Check if phase exists in budget
  if (!budget.phases[phase]) {
    console.error(`ERROR: Phase '${phase}' not found in budget`);
    process.exit(1);
  }

  const phaseConfig = budget.phases[phase];
  const estimate = phaseConfig.estimate_tokens;
  const stopThreshold = estimate * 1.5;

  // Calculate actual spend for this phase
  const phaseSpend = spend.filter(s => s.phase === phase);
  const actual = phaseSpend.reduce((sum, s) => sum + s.tokens, 0);

  console.log(`\n=== Phase ${phase} Budget Check ===`);
  console.log(`Phase: ${phaseConfig.name}`);
  console.log(`Estimate: ${(estimate / 1000).toFixed(1)}k tokens`);
  console.log(`Actual: ${(actual / 1000).toFixed(1)}k tokens`);
  console.log(`Items recorded: ${phaseSpend.length}`);
  console.log(`Stop threshold (1.5x): ${(stopThreshold / 1000).toFixed(1)}k tokens`);

  // Breakdown by item
  if (phaseSpend.length > 0) {
    console.log(`\nBreakdown:`);
    phaseSpend.forEach(s => {
      console.log(`  ${s.item}: ${(s.tokens / 1000).toFixed(1)}k`);
    });
  }

  console.log();

  if (actual > stopThreshold) {
    const excess = actual - estimate;
    const excessPercent = ((excess / estimate) * 100).toFixed(1);
    console.error(
      `STOP: Phase ${phase} exceeded budget limit.\n` +
      `Actual ${(actual / 1000).toFixed(1)}k exceeds 1.5x estimate (${(stopThreshold / 1000).toFixed(1)}k) by ${(excess / 1000).toFixed(1)}k (${excessPercent}%).\n` +
      `Program stops. Do not proceed to next phase.`
    );
    process.exit(1);
  }

  console.log(`✓ Phase ${phase} within budget limit.`);
}

// Main
if (command === '--record') {
  const [, phase, item, tokensStr] = args;
  const tokens = parseInt(tokensStr, 10);
  recordSpend(phase, item, tokens);
} else if (command === '--check') {
  const phase = args[1];
  checkPhase(phase);
} else {
  console.error(`Usage:
  node budget.mjs --record <phase> <item> <tokens>
  node budget.mjs --check <phase>`);
  process.exit(1);
}
