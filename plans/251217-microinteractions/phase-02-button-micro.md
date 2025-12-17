# Phase 02: Button Microinteractions

## Tasks

- [ ] Add shimmer effect variant
- [ ] Add magnetic hover effect (subtle cursor follow)
- [ ] Add ripple click effect
- [ ] Add glow border on hover
- [ ] Ensure 60fps with GPU-accelerated transforms
- [ ] Test with `prefers-reduced-motion`

## Implementation

### Shimmer Effect (CSS-only)

```tsx
// Shimmer overlay gradient that moves across button
<span className="absolute inset-0 overflow-hidden rounded-lg">
  <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
</span>
```

### Glow Border

```tsx
// Pseudo-element with blur for glow
<span className="absolute -inset-px rounded-lg bg-gradient-to-r from-slate-400 to-slate-600 opacity-0 blur-sm transition-opacity group-hover:opacity-50" />
```

### Magnetic Effect (lightweight)

```tsx
const handleMouseMove = (e: React.MouseEvent) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
};
const handleMouseLeave = (e: React.MouseEvent) => {
  e.currentTarget.style.transform = '';
};
```

## Priority

High - Buttons are most interacted element.
