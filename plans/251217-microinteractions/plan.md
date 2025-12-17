# Plan: 60fps Microinteractions & UI Enhancement

**Date**: 2025-12-17
**Status**: In Progress
**Inspiration**: 21st.dev, supahero.io

## Goal

Enhance Visuana components with premium 60fps microinteractions inspired by 21st.dev component library.

## Phases

| Phase | Focus | Files | Status |
|-------|-------|-------|--------|
| 01 | Animation utilities | `lib/animations.ts` | Pending |
| 02 | Button microinteractions | `components/ui/button.tsx` | Pending |
| 03 | Hero animations | `components/sections/hero.tsx` | Pending |
| 04 | Card enhancements | `components/ui/card.tsx`, `cards/*` | Pending |
| 05 | CTA & Section polish | `sections/cta-box.tsx` | Pending |

## Key Patterns (from 21st.dev)

**Buttons**: shimmer, magnetic hover, ripple, glow border
**Heroes**: animated gradient orbs, text scramble, parallax float
**Cards**: glow effect, tilt on hover, direction-aware highlights

## Technical Approach

- CSS-first animations (GPU-accelerated transforms)
- Tailwind keyframes in `tailwind.config.ts`
- `will-change` for 60fps performance
- `prefers-reduced-motion` respect
