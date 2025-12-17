# Phase 04: Card Enhancement Effects

## Tasks

- [ ] Add subtle tilt effect on hover (3D perspective)
- [ ] Add glow border effect
- [ ] Add direction-aware hover highlight
- [ ] Enhance ServiceCard with icon animation
- [ ] Polish ArticleCard image hover

## Implementation

### Tilt Effect

```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};

const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = '';
};
```

### Glow Border

```tsx
<div className="relative group">
  {/* Glow effect behind card */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200 to-slate-400 rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-300" />
  {/* Actual card */}
  <div className="relative bg-white rounded-xl ...">
```

## Priority

Medium - Enhances browsing experience.
