# Phase 05: CTA & Section Polish

## Tasks

- [ ] Enhance CTABox with animated background
- [ ] Add hover effects to CTA buttons
- [ ] Polish Section transitions
- [ ] Add scroll-triggered animations (intersection observer)
- [ ] Final performance audit

## Implementation

### CTABox Animated Background

```tsx
// Subtle gradient animation
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-shift" />

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Scroll-Triggered Animations

```tsx
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView] as const;
};

// Usage
const [ref, isInView] = useInView();
<div ref={ref} className={isInView ? 'animate-fade-in' : 'opacity-0'}>
```

## Priority

Medium - Final polish layer.
