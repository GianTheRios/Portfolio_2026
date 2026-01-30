'use client'

import { useCountUp } from '@/hooks/useCountUp'

interface AnimatedStatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function AnimatedStat({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000
}: AnimatedStatProps) {
  const { count, ref } = useCountUp(value, duration)

  return (
    <div ref={ref} className="stat">
      <span className="text-4xl font-bold">
        {prefix}{count}{suffix}
      </span>
      <span className="text-body text-sm">{label}</span>
    </div>
  )
}
