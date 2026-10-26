'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

interface ProductCardProps {
  id: string
  title: string
  category: string
  price: number
  image: string
  index?: number
}

export default function ProductCard({
  id,
  title,
  category,
  price,
  image,
  index = 0,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!cardRef.current) return

    // Stagger animation on mount
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'cubic.out',
      }
    )
  }, [index])

  const handleHoverStart = () => {
    setIsHovered(true)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 0.6,
        ease: 'power2.out',
      })
    }
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      })
    }
  }

  return (
    <Link href={`/collections/${id}`}>
      <div
        ref={cardRef}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className="group cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted mb-4">
          <div ref={imageRef} className="w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-primary/40 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
            {title}
          </h3>
          <p className="text-base font-semibold text-primary">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  )
}
