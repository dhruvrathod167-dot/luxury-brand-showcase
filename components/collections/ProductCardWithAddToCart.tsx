'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

interface ProductCardProps {
  id: string
  title: string
  category: string
  price: number
  image: string
  index?: number
}

export default function ProductCardWithAddToCart({
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
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addToCart } = useCart()

  const product = {
    id,
    title,
    category,
    price,
    image
  }

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

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    addToCart(product)

    // Reset after animation
    setTimeout(() => {
      setIsAddingToCart(false)
    }, 1000)
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="group relative cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted mb-4">
        <div ref={imageRef} className="w-full h-full">
          <Link href={`/collections/${id}`}>
            <Image
              src={image}
              alt={title}
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Link>
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-primary/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Add to Cart Button Overlay */}
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
          >
            <ShoppingBag className="w-4 h-4" />
            {isAddingToCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <Link href={`/collections/${id}`}>
          <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
            {title}
          </h3>
        </Link>
        <p className="text-base font-semibold text-primary">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}