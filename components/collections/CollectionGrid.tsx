'use client'

import ProductCard from './ProductCard'

interface Product {
  id: string
  title: string
  category: string
  price: number
  image: string
}

interface CollectionGridProps {
  products: Product[]
  title?: string
  showTitle?: boolean
}

export default function CollectionGrid({
  products,
  title = 'Our Collection',
  showTitle = true,
}: CollectionGridProps) {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 text-balance">
              {title}
            </h2>
            <div className="w-12 h-1 bg-accent" />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
