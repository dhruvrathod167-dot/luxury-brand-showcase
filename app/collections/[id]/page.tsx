'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/components/cart/CartContext'
import { useRouter } from 'next/navigation'

const products: Record<string, any> = {
  '1': {
    title: 'Silk Evening Gown',
    category: 'Evening Wear',
    price: 2850,
    image: '/product-1.png',
    description: 'An exquisite silk evening gown crafted from the finest materials. Perfect for the most formal occasions.',
    details: ['100% Pure Silk', 'Hand-Stitched', 'Available in Black, Navy, and Emerald', 'Sizes XS-XL'],
  },
  '2': {
    title: 'Classic Blazer',
    category: 'Tailoring',
    price: 1450,
    image: '/product-2.png',
    description: 'A timeless classic tailored blazer with impeccable construction and sophisticated detailing.',
    details: ['Wool Blend', 'Made in Italy', 'Tailored Fit', 'Sizes 00-16'],
  },
  '3': {
    title: 'Gabrielle Henderson ',
    category: 'Outerwear',
    price: 1950,
    image: '/product-26.png ',
    description: 'A luxurious wool coat designed to elevate your winter wardrobe with understated elegance.',
    details: ['Premium Wool', 'Silk Lining', 'Structured Design', 'Sizes XS-XL'],
  },
}

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string
  const product = products[id] || products['1']
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const router = useRouter()
  const { addToCart } = useCart()

  const relatedProducts = [
    {
      id: '2',
      title: 'Classic Blazer',
      price: 1450,
      image: '/product-2.png',
    },
    {
      id: '3',
      title: 'Wool Coat',
      price: 1950,
      image: '/product-26.png',
    },
    {
      id: '4',
      title: 'Slip Dress',
      price: 895,
      image: '/product-44.png',
    },
  ]

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    setIsAddingToCart(true)
    addToCart(product, selectedSize)

    // Redirect to cart after adding
    setTimeout(() => {
      router.push('/cart')
    }, 500)
  }

  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/collections" className="text-muted-foreground hover:text-foreground">
              Collections
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.title}</span>
          </div>

          {/* Product */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {/* Image */}
            <ScrollReveal>
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {product.category}
                </p>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4 text-balance">
                  {product.title}
                </h1>
                <p className="text-2xl font-semibold text-primary mb-6">
                  ${product.price.toFixed(2)}
                </p>

                <p className="text-base leading-relaxed text-foreground mb-8 opacity-90">
                  {product.description}
                </p>

                {/* Details List */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                    Details
                  </h3>
                  <ul className="space-y-2">
                    {product.details.map((detail: string, idx: number) => (
                      <li key={idx} className="text-sm text-foreground opacity-75 flex items-center gap-3">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                  <label className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 block">
                    Size
                  </label>
                  <div className="flex gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border transition-colors ${
                          selectedSize === size
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:bg-muted'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart */}
                <button
                  disabled={isAddingToCart || !selectedSize}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Related Products */}
          <ScrollReveal>
            <section className="pt-16 border-t border-border">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((item) => (
                  <div key={item.id} className="group">
                    <Link href={`/collections/${item.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base font-semibold text-primary mt-2">
                        ${item.price.toFixed(2)}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </main>
  )
}