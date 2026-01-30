'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import GlassFrame from '@/components/GlassFrame'

type CardId = 'hero' | 'about' | 'experience' | 'stats' | 'projects' | 'skills' | 'contact' | null

export default function Home() {
  const [activeCard, setActiveCard] = useState<CardId>(null)

  const toggle = (id: CardId) => {
    setActiveCard(activeCard === id ? null : id)
  }

  return (
    <main className="min-h-screen py-8 px-4">
      {/* Background */}
      <div className="gradient-bg" />
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Hero - Large */}
        <GlassFrame
          className="col-span-2 row-span-2"
          glowColor="red"
          onClick={() => toggle('hero')}
        >
          <div className="h-full flex flex-col justify-between min-h-[260px]">
            <div className="text-label">Content & Growth Marketing</div>
            <div>
              <h1 className="text-display">
                Giancarlo Rios
              </h1>
              <p className="text-body mt-2">Lead Content Marketing Manager @ Polygon Labs</p>
            </div>
            <div className="w-16 h-16 rounded-2xl accent-red flex items-center justify-center text-white text-2xl shadow-lg">
              G
            </div>
          </div>
        </GlassFrame>

        {/* Photo */}
        <GlassFrame
          className="col-span-1 row-span-2"
          glowColor="blue"
          onClick={() => toggle('about')}
        >
          <div className="h-full min-h-[260px] relative rounded-xl overflow-hidden" style={{ margin: '-20px', height: 'calc(100% + 40px)' }}>
            <Image
              src="/images/portrait.jpg"
              alt="Giancarlo"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <div className="text-label text-white/70">About</div>
              <div className="font-semibold">View Bio →</div>
            </div>
          </div>
        </GlassFrame>

        {/* Stats */}
        <GlassFrame
          className="col-span-1"
          glowColor="green"
          onClick={() => toggle('stats')}
        >
          <div className="text-label mb-2">Impact</div>
          <div className="text-4xl font-bold">11+</div>
          <div className="text-body text-sm">years in growth</div>
          <div className="mt-4 h-2 rounded-full bg-black/10 overflow-hidden">
            <motion.div
              className="h-full accent-green rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '92%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </GlassFrame>

        {/* Experience */}
        <GlassFrame
          className="col-span-2"
          glowColor="purple"
          onClick={() => toggle('experience')}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-label mb-2">Experience</div>
              <div className="text-title">Polygon Labs</div>
              <div className="text-body text-sm">Lead Content Marketing Manager</div>
            </div>
            <div className="w-12 h-12 rounded-xl accent-purple flex items-center justify-center text-white shadow-lg">
              P
            </div>
          </div>
        </GlassFrame>

        {/* Skills */}
        <GlassFrame
          className="col-span-1"
          glowColor="orange"
          onClick={() => toggle('skills')}
        >
          <div className="text-label mb-2">Skills</div>
          <div className="flex flex-wrap gap-2 mt-3">
            {['SEO', 'UGC', 'AI Tools'].map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full bg-black/5 text-sm">
                {skill}
              </span>
            ))}
          </div>
          <div className="text-body text-sm mt-3">+10 more</div>
        </GlassFrame>

        {/* Projects */}
        <GlassFrame
          className="col-span-2"
          glowColor="blue"
          onClick={() => toggle('projects')}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-label mb-2">Campaigns</div>
              <div className="text-title">Featured Work</div>
              <div className="text-body text-sm mt-1">6 case studies</div>
            </div>
            <div className="w-12 h-12 rounded-xl accent-blue flex items-center justify-center text-white shadow-lg">
              +
            </div>
          </div>
        </GlassFrame>

        {/* Contact */}
        <GlassFrame
          className="col-span-1"
          glowColor="pink"
          onClick={() => toggle('contact')}
        >
          <div className="text-label mb-2">Contact</div>
          <div className="text-title">Let&apos;s talk</div>
          <div className="mt-4 w-10 h-10 rounded-full accent-pink flex items-center justify-center text-white shadow-lg">
            →
          </div>
        </GlassFrame>
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
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50"
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
                      <div className="md:w-1/2">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                          <Image
                            src="/images/portrait.jpg"
                            alt="Giancarlo Rios"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
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
                          <div key={stat.label} className="p-4 rounded-xl bg-black/5">
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
                          <div key={i} className="p-5 rounded-xl bg-black/5">
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
                          <span key={skill} className="px-4 py-2 rounded-xl bg-black/5 text-sm">
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
                          <div key={project.name} className="p-5 rounded-xl bg-black/5">
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
                            className="p-4 rounded-xl bg-black/5 flex justify-between items-center hover:bg-black/10 transition-colors block"
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
