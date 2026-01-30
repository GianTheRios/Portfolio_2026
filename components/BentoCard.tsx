'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BentoCardProps {
  children: React.ReactNode
  expanded?: React.ReactNode
  isActive: boolean
  onClick: () => void
  className?: string
  accentColor?: string
}

export default function BentoCard({
  children,
  expanded,
  isActive,
  onClick,
  className = '',
  accentColor,
}: BentoCardProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <>
      {/* Outer glass frame */}
      <motion.div
        className={`glass-card cursor-pointer ${isActive ? 'active' : ''} ${className}`}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        layout
        style={{
          background: isHovering
            ? `linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.15) 100%), radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)`
            : undefined,
        }}
      >
        {/* Inner content area - floats inside the glass frame */}
        <div
          className="glass-inner-content"
          style={accentColor && isActive ? {
            boxShadow: `0 0 40px ${accentColor}20`
          } : undefined}
        >
          {children}
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isActive && expanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={onClick}
            />

            {/* Expanded Card - glass frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 glass-card"
              onClick={(e) => e.stopPropagation()}
              style={accentColor ? {
                boxShadow: `0 25px 80px rgba(0,0,0,0.2), 0 0 60px ${accentColor}20`
              } : undefined}
            >
              {/* Inner content */}
              <div className="glass-inner-content h-full overflow-auto">
                <button
                  onClick={onClick}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full glass-button flex items-center justify-center text-xl z-10"
                >
                  ×
                </button>
                {expanded}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
