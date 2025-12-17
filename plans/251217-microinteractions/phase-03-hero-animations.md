# Phase 03: Hero Animations

## Tasks

- [ ] Animate gradient orbs (slow float + pulse)
- [ ] Add subtle parallax on scroll
- [ ] Text reveal animation on load
- [ ] Badge entrance animation
- [ ] Staggered CTA buttons animation

## Implementation

### Animated Gradient Orbs

```tsx
// Slow floating animation for background orbs
<div
  className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-float-slow"
  style={{ background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)' }}
/>
```

### Text Reveal (CSS)

```css
@keyframes text-reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.animate-text-reveal {
  animation: text-reveal 0.8s ease-out forwards;
}
```

### Staggered Animation

```tsx
// Using animation-delay for stagger
<h1 className="animate-text-reveal" style={{ animationDelay: '0ms' }}>
<p className="animate-text-reveal" style={{ animationDelay: '150ms' }}>
<div className="animate-text-reveal" style={{ animationDelay: '300ms' }}>
```

## Priority

High - First impression for visitors.
