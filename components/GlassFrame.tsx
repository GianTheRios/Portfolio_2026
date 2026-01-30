'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type GlowColor = 'red' | 'purple' | 'blue' | 'green' | 'pink' | 'orange' | 'none'

interface GlassFrameProps {
  children: React.ReactNode
  className?: string
  glowColor?: GlowColor
  onClick?: () => void
  isActive?: boolean
  cardIndex?: number
  onHoverChange?: (index: number | null) => void
  hoveredCard?: number | null
}

const glowColors: Record<GlowColor, string> = {
  red: 'rgba(239, 68, 68, 0.35)',
  purple: 'rgba(147, 51, 234, 0.3)',
  blue: 'rgba(59, 130, 246, 0.3)',
  green: 'rgba(34, 197, 94, 0.3)',
  pink: 'rgba(236, 72, 153, 0.3)',
  orange: 'rgba(251, 146, 60, 0.3)',
  none: 'transparent'
}

// Grid layout adjacency map with directions
// Grid:
// [0: Hero 2x2]  [0]        [1: Photo 1x2]  [2: Stats]
// [0]            [0]        [1]             [3: Skills]
// [4: Exp]       [5: Campaigns 2x1]         [6: Contact]
type Direction = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const adjacencyMap: Record<number, { neighbor: number; direction: Direction }[]> = {
  0: [
    { neighbor: 1, direction: 'right' },
    { neighbor: 2, direction: 'right' },
    { neighbor: 4, direction: 'bottom' },
    { neighbor: 5, direction: 'bottom' },
  ],
  1: [
    { neighbor: 0, direction: 'left' },
    { neighbor: 2, direction: 'top-right' },
    { neighbor: 3, direction: 'right' },
    { neighbor: 5, direction: 'bottom-left' },
    { neighbor: 6, direction: 'bottom' },
  ],
  2: [
    { neighbor: 0, direction: 'left' },
    { neighbor: 1, direction: 'bottom-left' },
    { neighbor: 3, direction: 'bottom' },
  ],
  3: [
    { neighbor: 1, direction: 'left' },
    { neighbor: 2, direction: 'top' },
    { neighbor: 6, direction: 'bottom' },
  ],
  4: [
    { neighbor: 0, direction: 'top' },
    { neighbor: 5, direction: 'right' },
  ],
  5: [
    { neighbor: 0, direction: 'top' },
    { neighbor: 1, direction: 'top-right' },
    { neighbor: 4, direction: 'left' },
    { neighbor: 6, direction: 'right' },
  ],
  6: [
    { neighbor: 1, direction: 'top' },
    { neighbor: 3, direction: 'top' },
    { neighbor: 5, direction: 'left' },
  ],
}

// Get gradient direction for light coming FROM the hovered card
const getGlowGradient = (direction: Direction): string => {
  const gradients: Record<Direction, string> = {
    'top': 'to bottom',
    'bottom': 'to top',
    'left': 'to right',
    'right': 'to left',
    'top-left': 'to bottom right',
    'top-right': 'to bottom left',
    'bottom-left': 'to top right',
    'bottom-right': 'to top left',
  }
  return gradients[direction]
}

export default function GlassFrame({
  children,
  className = '',
  glowColor = 'none',
  onClick,
  isActive = false,
  cardIndex,
  onHoverChange,
  hoveredCard
}: GlassFrameProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Detect dark mode
  useEffect(() => {
    const checkDark = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(theme === 'dark' || (theme !== 'light' && prefersDark))
    }

    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDark)

    return () => {
      observer.disconnect()
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkDark)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (onHoverChange && cardIndex !== undefined) {
      onHoverChange(cardIndex)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (onHoverChange) {
      onHoverChange(null)
    }
  }

  // Check if this card is adjacent to the hovered card and get direction
  const getAdjacentDirection = (): Direction | null => {
    if (hoveredCard === null || cardIndex === undefined || hoveredCard === cardIndex) return null
    const adjacencies = adjacencyMap[cardIndex]
    if (!adjacencies) return null
    const match = adjacencies.find(a => a.neighbor === hoveredCard)
    return match ? match.direction : null
  }

  const adjacentDirection = getAdjacentDirection()
  const isAdjacentToHovered = adjacentDirection !== null

  // Neumorphic shadows - different for light/dark mode
  const neumorphShadow = isDark
    ? isHovering
      ? `-6px -6px 15px rgba(255, 255, 255, 0.05),
         6px 6px 15px rgba(0, 0, 0, 0.5)`
      : `-4px -4px 10px rgba(255, 255, 255, 0.03),
         4px 4px 10px rgba(0, 0, 0, 0.4)`
    : isHovering
      ? `-10px -10px 25px rgba(255, 255, 255, 0.9),
         10px 10px 25px rgba(0, 0, 0, 0.15)`
      : `-8px -8px 20px rgba(255, 255, 255, 0.8),
         8px 8px 20px rgba(0, 0, 0, 0.12)`

  // Warm lamp glow in dark mode on hover
  const warmGlow = isDark && isHovering
    ? `0 30px 60px -10px rgba(255, 180, 80, 0.4),
       0 0 80px rgba(255, 200, 100, 0.15)`
    : ''

  // Colored glow beneath (only in light mode)
  const coloredGlow = !isDark && glowColor !== 'none'
    ? `0 25px 50px -15px ${glowColors[glowColor]}`
    : ''

  // Combine all shadows
  const allShadows = [neumorphShadow, warmGlow, coloredGlow]
    .filter(Boolean)
    .join(', ')

  return (
    <motion.div
      className={`glass-frame-wrapper ${className} ${isDark && isHovering ? 'dark-glow' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: allShadows
      }}
    >
      {/* Glass frame background and specular highlights are now handled by CSS .glass-frame-wrapper */}

      {/* Content container - clean neumorphic inner area */}
      <div
        className="neumorphic-content"
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '24px',
          background: isDark ? '#22252d' : '#e4e8ed',
          borderRadius: '20px',
          height: '100%',
          boxSizing: 'border-box',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
          boxShadow: isDark
            ? 'inset 2px 2px 5px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(255,255,255,0.03)'
            : 'inset 2px 2px 5px rgba(255,255,255,0.7), inset -2px -2px 5px rgba(0,0,0,0.05)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease'
        }}
      >
        {children}
      </div>

      {/* Warm light glow overlay in dark mode - follows mouse */}
      {isDark && isHovering && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 200, 100, 0.1) 0%, transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 2
          }}
        />
      )}

      {/* Directional light bleed from adjacent hovered card */}
      {isDark && isAdjacentToHovered && adjacentDirection && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            background: `linear-gradient(${getGlowGradient(adjacentDirection)}, rgba(255, 200, 100, 0.08) 0%, transparent 40%)`,
            pointerEvents: 'none',
            zIndex: 2,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
    </motion.div>
  )
}
