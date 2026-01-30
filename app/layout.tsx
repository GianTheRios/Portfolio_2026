import type { Metadata } from 'next'
import './globals.css'
import GlassFilters from '@/components/GlassFilters'

export const metadata: Metadata = {
  title: 'Giancarlo | Growth Marketing Leader',
  description: 'Senior Growth Marketing in Web3. Building programs that generate 10M+ impressions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlassFilters />
        {children}
      </body>
    </html>
  )
}
