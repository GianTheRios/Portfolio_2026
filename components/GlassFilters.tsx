'use client'

export default function GlassFilters() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        {/* Glass Refraction Filter */}
        <filter id="glass-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
          <feSpecularLighting
            in="blur"
            specularExponent={40}
            lightingColor="#ffffff"
            surfaceScale={3}
            result="specular"
          >
            <fePointLight x={-50} y={-100} z={200} />
          </feSpecularLighting>
          <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1={0} k2={1} k3={0.8} k4={0} />
        </filter>

        {/* Chromatic Aberration Filter */}
        <filter id="chromatic-aberration" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset in="SourceGraphic" dx={2} dy={0} result="red" />
          <feOffset in="SourceGraphic" dx={-2} dy={0} result="blue" />
          <feColorMatrix in="red" type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red-only" />
          <feColorMatrix in="blue" type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue-only" />
          <feColorMatrix in="SourceGraphic" type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green-only" />
          <feBlend in="red-only" in2="green-only" mode="screen" result="rg" />
          <feBlend in="rg" in2="blue-only" mode="screen" />
        </filter>

        {/* Inner Glass Glow */}
        <filter id="inner-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={4} result="blur" />
          <feOffset in="blur" dx={0} dy={2} result="offsetBlur" />
          <feFlood floodColor="#ffffff" floodOpacity={0.6} result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feComposite in="shadow" in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glass Depth Filter */}
        <filter id="glass-depth" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
          <feOffset in="blur" dx={0} dy={2} result="offset" />
          <feFlood floodColor="black" floodOpacity={0.08} result="color" />
          <feComposite in="color" in2="offset" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glass Fill Gradient */}
        <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity={0.55} />
          <stop offset="35%" stopColor="white" stopOpacity={0.2} />
          <stop offset="70%" stopColor="white" stopOpacity={0.15} />
          <stop offset="100%" stopColor="white" stopOpacity={0.35} />
        </linearGradient>

        {/* Glass Stroke Gradient */}
        <linearGradient id="glass-stroke-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity={0.95} />
          <stop offset="50%" stopColor="white" stopOpacity={0.4} />
          <stop offset="100%" stopColor="white" stopOpacity={0.6} />
        </linearGradient>

        {/* Top Specular Highlight Gradient */}
        <linearGradient id="specular-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity={0.1} />
          <stop offset="15%" stopColor="white" stopOpacity={0.95} />
          <stop offset="55%" stopColor="white" stopOpacity={0.5} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>

        {/* Left Specular Highlight Gradient */}
        <linearGradient id="specular-highlight-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity={0.85} />
          <stop offset="50%" stopColor="white" stopOpacity={0.3} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
