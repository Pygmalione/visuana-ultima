# Phase 01: Animation Utilities

## Tasks

- [ ] Create `src/lib/animations/index.ts` with reusable animation utilities
- [ ] Add shimmer keyframe animation
- [ ] Add glow pulse animation
- [ ] Add float animation for parallax effects
- [ ] Update `tailwind.config.ts` with custom keyframes
- [ ] Create `useReducedMotion` hook

## Implementation

### Animation Keyframes (Tailwind)

```ts
keyframes: {
  shimmer: {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' },
  },
  glow: {
    '0%, 100%': { opacity: '0.5' },
    '50%': { opacity: '1' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
}
```

### Reduced Motion Hook

```ts
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  return prefersReducedMotion;
}
```
