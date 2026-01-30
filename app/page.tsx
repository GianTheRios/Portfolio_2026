'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import GlassFrame from '@/components/GlassFrame'
import ThemeToggle from '@/components/ThemeToggle'

type CardId = 'hero' | 'about' | 'experience' | 'stats' | 'projects' | 'skills' | 'contact' | null

export default function Home() {
  const [activeCard, setActiveCard] = useState<CardId>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const toggle = (id: CardId) => {
    setActiveCard(activeCard === id ? null : id)
  }

  return (
    <main className="min-h-screen py-8 px-4">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background */}
      <div className="gradient-bg" />

      {/* Bento Grid - 4 cols × 3 rows */}
      <div className="bento-grid">
        {/* 1. GIANCARLO - Hero (2 cols × 2 rows) */}
        <div className="col-span-2 row-span-2 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="red"
            onClick={() => toggle('hero')}
            cardIndex={0}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-label">Content & Growth Marketing</div>
              <div>
                <h1 className="text-display engraved-text">
                  Giancarlo Rios
                </h1>
                <p className="text-body mt-2">Lead Content Marketing Manager @ Polygon Labs</p>
                <p className="text-body mt-4 italic opacity-80">&quot;Turning products into stories that convert&quot;</p>
                <div className="hero-socials">
                  <a href="https://www.linkedin.com/in/giancarlo-rios-4b4883123/" target="_blank" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/GianTheRios" target="_blank" aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/giantherios" target="_blank" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </GlassFrame>
        </div>

        {/* 2. PHOTO - Tall (1 col × 2 rows) */}
        <div className="col-span-1 row-span-2 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="blue"
            onClick={() => toggle('about')}
            cardIndex={1}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full relative rounded-lg overflow-hidden pointer-events-none">
              <Image
                src="/images/portrait.jpg"
                alt="Giancarlo"
                fill
                className="object-cover object-center pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="text-label text-white/70">About</div>
                <div className="font-semibold">View Bio →</div>
              </div>
            </div>
          </GlassFrame>
        </div>

        {/* 3. STATS - Small (1 col × 1 row) */}
        <div className="col-span-1 row-span-1 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="green"
            onClick={() => toggle('stats')}
            cardIndex={2}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="text-label mb-2">Impact</div>
                <div className="text-5xl font-extrabold engraved-text">11+</div>
                <div className="text-body text-sm mt-1">years in growth</div>
              </div>
              <div className="h-3 rounded-full progress-inset overflow-hidden">
                <motion.div
                  className="h-full accent-green rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </GlassFrame>
        </div>

        {/* 4. SKILLS - Small (1 col × 1 row) */}
        <div className="col-span-1 row-span-1 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="orange"
            onClick={() => toggle('skills')}
            cardIndex={3}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="text-label mb-2">Skills</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['SEO', 'UGC', 'AI Tools'].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-body text-sm">+10 more</div>
            </div>
          </GlassFrame>
        </div>

        {/* 5. EXPERIENCE - Square (1 col × 1 row) */}
        <div className="col-span-1 row-span-1 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="purple"
            onClick={() => toggle('experience')}
            cardIndex={4}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full flex justify-between items-start">
              <div>
                <div className="text-label mb-2">Experience</div>
                <div className="text-title">Polygon Labs</div>
                <div className="text-body text-sm">Lead Content Marketing</div>
              </div>
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/images/polygon-logo.svg"
                  alt="Polygon"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
            </div>
          </GlassFrame>
        </div>

        {/* 6. CAMPAIGNS - Wide (2 cols × 1 row) */}
        <div className="col-span-2 row-span-1 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="blue"
            onClick={() => toggle('projects')}
            cardIndex={5}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full flex justify-between items-start">
              <div>
                <div className="text-label mb-2">Campaigns</div>
                <div className="text-title">Featured Work</div>
                <div className="text-body text-sm mt-1">6 case studies</div>
              </div>
              <div className="w-12 h-12 rounded-xl action-btn flex items-center justify-center text-xl font-light">
                +
              </div>
            </div>
          </GlassFrame>
        </div>

        {/* 7. CONTACT - Small (1 col × 1 row) */}
        <div className="col-span-1 row-span-1 min-h-0">
          <GlassFrame
            className="h-full"
            glowColor="pink"
            onClick={() => toggle('contact')}
            cardIndex={6}
            onHoverChange={setHoveredCard}
            hoveredCard={hoveredCard}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="text-label mb-2">Contact</div>
                <div className="text-title">Let&apos;s talk</div>
              </div>
              <div className="w-10 h-10 rounded-full action-btn flex items-center justify-center text-lg">
                →
              </div>
            </div>
          </GlassFrame>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {activeCard && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setActiveCard(null)}
            />

            {/* Expanded Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`fixed z-50 ${
                activeCard === 'about'
                  ? 'top-4 bottom-4 left-4 right-4 md:top-10 md:bottom-10 md:left-0 md:right-0 md:mx-auto md:max-w-4xl'
                  : 'inset-4 md:inset-10 lg:inset-20'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassFrame className="h-full">
                <div className="h-full overflow-auto">
                  <button
                    onClick={() => setActiveCard(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-xl z-10 transition-colors"
                  >
                    ×
                  </button>

                  {activeCard === 'hero' && (
                    <div className="h-full flex flex-col">
                      <div className="text-label mb-4">Welcome</div>
                      <h1 className="text-display mb-6">
                        Hi, I&apos;m<br />
                        <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ee5a5a] bg-clip-text text-transparent">
                          Giancarlo Rios
                        </span>
                      </h1>
                      <p className="text-body max-w-xl">
                        Content & Growth Marketing leader with 11+ years driving Affiliate, AI Search, SEO, UGC and creative campaigns that scale user acquisition and brand visibility.
                      </p>
                      <p className="text-body max-w-xl mt-4">
                        I&apos;ve built affiliate programs that have scaled to 7-8 figures in revenue for enterprise companies. Built data-informed strategies, AI tools and cross-functional systems to coordinate social, product, legal and finance teams, delivering multi-million impression campaigns and measurable CPM/CPA efficiencies.
                      </p>
                      <div className="mt-auto pt-8 flex gap-4">
                        <a href="mailto:giantherios11@gmail.com" className="px-6 py-3 rounded-xl accent-red text-white font-medium">
                          Get in touch
                        </a>
                        <a href="https://www.linkedin.com/in/giancarlo-rios-4b4883123/" target="_blank" className="px-6 py-3 rounded-xl bg-black/5 hover:bg-black/10 font-medium transition-colors">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  )}

                  {activeCard === 'about' && (
                    <div className="h-full flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2 flex-shrink-0">
                        <div className="relative h-full min-h-[350px] rounded-2xl overflow-hidden">
                          <Image
                            src="/images/portrait.jpg"
                            alt="Giancarlo Rios"
                            fill
                            className="object-cover object-[center_30%]"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2 flex flex-col justify-center">
                        <div className="text-label mb-4">About</div>
                        <h2 className="text-title text-2xl mb-4">I build growth programs that integrate AI-enabled workflows.</h2>
                        <div className="space-y-4 text-body">
                          <p>At Polygon Labs, I built our entire content strategy from the ground up—developing monthly competitor analysis to identify gaps in the market and building campaigns to fill them.</p>
                          <p>I&apos;ve onboarded 50+ creators across socials, generated 10M+ impressions in 45 days, and used AI tools to develop Creator CRMs tracking budgets, contracts, and performance.</p>
                          <p className="font-medium text-[--text-primary]">Orlando, FL • University of Central Florida</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCard === 'stats' && (
                    <div>
                      <div className="text-label mb-4">Performance</div>
                      <h2 className="text-title text-2xl mb-8">Key Metrics</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { value: '11+', label: 'Years Experience' },
                          { value: '10M+', label: 'Impressions in 45 days' },
                          { value: '$500M', label: 'TVL Growth (Pac Finance)' },
                          { value: '8-fig', label: 'Annual Revenue Driven' },
                          { value: '50+', label: 'Creators Onboarded' },
                          { value: '91%', label: 'Customer Retention' },
                        ].map((stat) => (
                          <div key={stat.label} className="inset-card">
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <div className="text-body text-sm">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCard === 'experience' && (
                    <div>
                      <div className="text-label mb-4">Career</div>
                      <h2 className="text-title text-2xl mb-8">Experience</h2>
                      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                        {[
                          { role: 'Lead Content Marketing Manager', company: 'Polygon Labs', period: 'Oct 2025 - Present', desc: 'Built entire content strategy from the ground up. Generated 10M+ impressions in 45 days. Onboarded 50+ creators and built UGC/ambassador programs across Reddit, TikTok, Instagram, Facebook, YouTube, X.' },
                          { role: 'Growth Marketing Manager', company: 'Polygon Labs', period: 'Oct 2024 - Oct 2025', desc: 'Led all growth campaigns for Q4 2024 to Q3 2025. Built systems and tools to optimize work across Social, Marketing, Design, Legal, Finance and Product teams.' },
                          { role: 'Head of Growth and Partnerships', company: 'Parallel Finance', period: 'Jan 2024 - Sep 2024', desc: 'Led growth for Pac Finance from launch to $500M TVL within 45 days. Won Big Bang Blast competition among 3,000 entrants. Secured partnerships with Wormhole, Pyth Network, Galxe, Arbitrum.' },
                          { role: 'Head of Marketing', company: 'Photo Finish Live', period: 'Jun 2023 - Jan 2024', desc: 'Achieved 91% customer retention and 20x+ token valuation increase. Led #1 game on Solana. Managed team of 3 to drive 9k users and retention.' },
                          { role: 'Director: Marketing & BD', company: 'Swapbox (Startup)', period: 'Jun 2022 - May 2023', desc: 'Developed marketing strategies that led to 3,000 users in first 30 days of launch. Built relationships with key industry influencers.' },
                          { role: 'Sr. Business Development Manager', company: 'Jumbleberry', period: 'Jan 2018 - Jul 2021', desc: 'Managed team of 3 to scale client acquisition leading to 8 figures in revenue annually. Built lead-gen funnels for Universal, Robinhood, Experian.' },
                        ].map((job, i) => (
                          <div key={i} className="inset-card">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-semibold text-lg">{job.role}</div>
                                <div className="text-[--text-secondary]">{job.company}</div>
                              </div>
                              <div className="text-label text-xs">{job.period}</div>
                            </div>
                            <p className="text-body text-sm">{job.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCard === 'skills' && (
                    <div>
                      <div className="text-label mb-4">Expertise</div>
                      <h2 className="text-title text-2xl mb-8">Skills</h2>
                      <div className="flex flex-wrap gap-3">
                        {[
                          'SEO', 'Meta Ads', 'Video Editing', 'Figma',
                          'Social Media/Content Creation', 'UGC Programs', 'Affiliate Marketing',
                          'AI Tools & LLMs', 'Growth Marketing', 'Web3/Crypto',
                          'Jira', 'Hubspot', 'Asana', 'Notion', 'Monday', 'ClickUp',
                          'Team Leadership', 'Campaign Management', 'Business Development'
                        ].map((skill) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCard === 'projects' && (
                    <div>
                      <div className="text-label mb-4">Work</div>
                      <h2 className="text-title text-2xl mb-8">Featured Campaigns</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { name: 'Polygon UGC Program', desc: 'Built UGC and ambassador program across Reddit, TikTok, Instagram, Facebook, YouTube, X', metrics: '10M+ impressions in 45 days' },
                          { name: 'Pac Finance Launch', desc: 'Led growth from launch, won Big Bang Blast competition among 3,000 entrants', metrics: '$500M TVL in 45 days' },
                          { name: 'Photo Finish Live', desc: 'Strategic partnerships with influencers and web3 companies for #1 Solana game', metrics: '91% retention, 20x token growth' },
                          { name: 'InfoFi Campaign', desc: 'Built entire infoFi campaign and community ambassador program of affiliates', metrics: 'Millions of impressions' },
                          { name: 'Jumbleberry Affiliate', desc: 'Lead-gen funnels for Universal, Robinhood, Experian', metrics: '8-figure annual revenue' },
                          { name: 'Creator CRM Tool', desc: 'AI-powered CRM to track budgets, contracts, campaigns and performance', metrics: 'Vibecoded internal tool' },
                        ].map((project) => (
                          <div key={project.name} className="inset-card">
                            <div className="font-semibold mb-1">{project.name}</div>
                            <div className="text-body text-sm mb-3">{project.desc}</div>
                            <div className="text-sm font-medium text-[#4dabf7]">{project.metrics}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCard === 'contact' && (
                    <div>
                      <div className="text-label mb-4">Connect</div>
                      <h2 className="text-title text-2xl mb-8">Get in Touch</h2>
                      <div className="space-y-3">
                        {[
                          { label: 'Email', value: 'giantherios11@gmail.com', href: 'mailto:giantherios11@gmail.com' },
                          { label: 'Twitter', value: '@GianTheRios', href: 'https://x.com/GianTheRios' },
                          { label: 'LinkedIn', value: 'Giancarlo Rios', href: 'https://www.linkedin.com/in/giancarlo-rios-4b4883123/' },
                          { label: 'Location', value: 'Orlando, FL', href: '#' },
                        ].map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('mailto') || link.href === '#' ? undefined : '_blank'}
                            className="inset-row flex justify-between items-center block"
                          >
                            <span className="text-[--text-secondary]">{link.label}</span>
                            <span className="font-medium">{link.value}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </GlassFrame>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
