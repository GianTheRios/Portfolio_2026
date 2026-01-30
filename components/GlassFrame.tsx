'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type GlowColor = 'red' | 'purple' | 'blue' | 'green' | 'pink' | 'orange' | 'none'

interface GlassFrameProps {
  children: React.ReactNode
  className?: string
  glowColor?: GlowColor
  onClick?: () => void
  isActive?: boolean
}

const glowColors: Record<GlowColor, string> = {
  red: 'rgba(239, 68, 68, 0.4)',
  purple: 'rgba(147, 51, 234, 0.35)',
  blue: 'rgba(59, 130, 246, 0.35)',
  green: 'rgba(34, 197, 94, 0.35)',
  pink: 'rgba(236, 72, 153, 0.35)',
  orange: 'rgba(251, 146, 60, 0.35)',
  none: 'transparent'
}

export default function GlassFrame({
  children,
  className = '',
  glowColor = 'none',
  onClick,
  isActive = false
}: GlassFrameProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  // #2 - Enhanced chromatic aberration shadows
  const chromaticShadow = isHovering
    ? `8px 8px 25px -6px rgba(0, 220, 255, 0.2),
       -5px 8px 25px -6px rgba(255, 0, 200, 0.16),
       4px -4px 20px -6px rgba(255, 220, 0, 0.12)`
    : `6px 6px 20px -6px rgba(0, 220, 255, 0.15),
       -4px 6px 20px -6px rgba(255, 0, 200, 0.12),
       3px -3px 18px -6px rgba(255, 220, 0, 0.10)`

  const causticGlow = glowColor !== 'none'
    ? `0 40px 70px -20px ${glowColors[glowColor]}`
    : ''

  const baseShadow = isHovering
    ? '0 10px 40px rgba(0, 0, 0, 0.1)'
    : '0 8px 32px rgba(0, 0, 0, 0.08)'

  return (
    <motion.div
      className={`glass-frame-wrapper ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: `${baseShadow}, ${chromaticShadow}${causticGlow ? `, ${causticGlow}` : ''}`
      }}
    >
      {/* Glass frame background and specular highlights are now handled by CSS .glass-frame-wrapper */}

      {/* Content container - white inner area floating inside the glass */}
      <div
        className="glass-inner-content"
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '18px',
          height: '100%',
          boxSizing: 'border-box',
          boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        {children}
      </div>

      {/* Mouse-following light effect overlay - ON TOP of content */}
      {isHovering && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '28px',
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)`,
            pointerEvents: 'none',
            zIndex: 20
          }}
        />
      )}
    </motion.div>
  )
}
