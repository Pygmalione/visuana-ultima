import { forwardRef } from 'react'
import { GridProps, GridCols, GridGap } from '@/types/components'

// ============================================
// GRID COMPONENT - Responsive Grid System
// Uses static class mapping (Tailwind doesn't compile dynamic classes)
// ============================================

const gapStyles: Record<GridGap, string> = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
}

// Static mapping for Tailwind compilation - NO dynamic template literals!
const colsMap: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
}

const responsiveColsMap: Record<string, Record<GridCols, string>> = {
  sm: { 1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4', 5: 'sm:grid-cols-5', 6: 'sm:grid-cols-6' },
  md: { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4', 5: 'md:grid-cols-5', 6: 'md:grid-cols-6' },
  lg: { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' },
  xl: { 1: 'xl:grid-cols-1', 2: 'xl:grid-cols-2', 3: 'xl:grid-cols-3', 4: 'xl:grid-cols-4', 5: 'xl:grid-cols-5', 6: 'xl:grid-cols-6' },
}

const getColsClass = (cols: GridCols | { sm?: GridCols; md?: GridCols; lg?: GridCols; xl?: GridCols }) => {
  if (typeof cols === 'number') {
    return `grid-cols-1 ${responsiveColsMap.md[cols]}`
  }

  const classes: string[] = ['grid-cols-1']

  if (cols.sm) classes.push(responsiveColsMap.sm[cols.sm])
  if (cols.md) classes.push(responsiveColsMap.md[cols.md])
  if (cols.lg) classes.push(responsiveColsMap.lg[cols.lg])
  if (cols.xl) classes.push(responsiveColsMap.xl[cols.xl])

  return classes.join(' ')
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      cols = 3,
      gap = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          grid
          ${getColsClass(cols)}
          ${gapStyles[gap]}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'
