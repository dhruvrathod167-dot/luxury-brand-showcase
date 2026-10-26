'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import AnimatedText from '../animations/AnimatedText'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX - width / 2) * 0.02
      const y = (clientY - height / 2) * 0.02

      gsap.to(heroRef.current, {
        duration: 0.5,
        x: x,
        y: y,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!ctaRef.current) return

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        ease: 'back.out',
      }
    )
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <AnimatedText
            text="LUXURY REDEFINED"
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight text-balance"
            stagger={0.08}
          />
        </div>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 opacity-75">
          Discover our exclusive collection of luxury fashion, crafted with precision and timeless elegance.
        </p>

        {/* CTA Button */}
        <Link href="/collections">
          <button
            ref={ctaRef}
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-serif font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Explore Collections
          </button>
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div
            className="animate-bounce"
            style={{
              animation: 'bounce 2s infinite',
            }}
          >
            <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
