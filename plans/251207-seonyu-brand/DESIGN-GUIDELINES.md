# Seonyu Design Guidelines - Quick Reference

**Updated**: 2025-12-07 (Post Visual Audit)
**Status**: Implemented ✅

---

## Core Principles

1. **Light & Elegant**: font-light (300) everywhere
2. **Glassmorphism**: backdrop-blur with transparency
3. **Blue Themed**: Blue-600, Cyan-600, Slate-800
4. **Smooth Transitions**: 300ms duration standard
5. **Micro-interactions**: Hover scales, translates, color shifts

---

## Typography

```css
/* Use ONLY */
font-light: 300;     /* Headlines, body, everything */
font-normal: 400;    /* Emphasis only (spans) */

/* NEVER use */
font-medium font-semibold font-bold
```

---

## Colors

```css
/* Primary */
blue-600: #3b82f6;
cyan-600: #06b6d4;
slate-800: #1e293b;
slate-900: #0f172a;

/* Hovers */
blue-50: #eff6ff;    /* Backgrounds */
blue-300: #93c5fd;   /* Borders */
```

---

## Glassmorphism

```jsx
/* Cards */
bg-white/80 backdrop-blur-sm border border-slate-200/60

/* Overlays */
bg-white/95 backdrop-blur-xl

/* Badges */
bg-white/80 backdrop-blur-lg
```

---

## Hover States

```css
/* Links */
text-slate-600 hover:text-blue-600 transition-colors duration-300

/* Primary Button */
bg-slate-900 hover:bg-blue-600
hover:shadow-xl hover:shadow-blue-600/30
transition-all duration-300

/* Cards */
hover:border-blue-300
hover:shadow-xl hover:shadow-blue-600/10
hover:bg-white
```

---

## Micro-interactions

```jsx
/* Arrow Right */
group-hover:translate-x-1 transition-transform duration-300

/* Icon Scale */
group-hover:scale-110 transition-transform duration-300

/* Diagonal Movement */
group-hover:translate-x-0.5 group-hover:-translate-y-0.5
```

---

## Component Patterns

### Section Badge
```jsx
<span className="inline-block px-4 py-1.5 rounded-full text-xs font-light tracking-wider uppercase text-blue-700 bg-blue-50/80 backdrop-blur-sm border border-blue-100">
  Label
</span>
```

### Section Title
```jsx
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
  Title
</h2>
```

### Primary CTA
```jsx
<Link className="group inline-flex items-center justify-center px-8 py-4 text-base font-light rounded-xl bg-slate-900 text-white hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300">
  <span>Action</span>
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
</Link>
```

### Card
```jsx
<div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 hover:bg-white transition-all duration-500">
  {/* Icon */}
  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300" />
  
  {/* Content */}
  <h3 className="font-display text-xl font-light">Title</h3>
  <p className="text-slate-500 text-sm font-light">Description</p>
  
  {/* Hover indicator */}
  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <svg className="w-4 h-4 text-blue-400" />
  </div>
</div>
```

---

## Checklist

Creating new components?

- [ ] font-light everywhere (never bold/semibold)
- [ ] Glassmorphism on cards/overlays
- [ ] Blue hover states (not slate)
- [ ] 300ms transitions
- [ ] Blue-tinted shadows
- [ ] Micro-interactions (scale/translate)
- [ ] Proper ARIA labels

---

**Remember**: Light, glassy, blue-themed, smooth ✨
