'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollReveal from '@/components/animations/ScrollReveal'

const newArrivals = [
  {
    id: '10',
    title: 'Adele Shafiee ',
    category: 'New Arrival',
    price: 1895,
    image: '/product-500.png',
    tag: 'NEW',
  },
  {
    id: '11',
    title: 'Galina Kondratenko',
    category: 'New Arrival',
    price: 695,
    image: '/product-200.png',
    tag: 'NEW',
  },
  {
    id: '12',
    title: 'Wool Cardigan',
    category: 'New Arrival',
    price: 1295,
    image: '/product-32.png',
    tag: 'NEW',
  },
]

export default function NewArrivalsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
                New Arrivals
              </h2>
              <p className="text-lg text-secondary max-w-lg">
                Discover our latest curated collection of luxury pieces, now available.
              </p>
            </div>
            <motion.a
              href="/collections"
              whileHover={{ x: 4 }}
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-accent/90 transition-colors duration-300 whitespace-nowrap"
            >
              View All →
            </motion.a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg bg-muted h-96 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* NEW Tag */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold"
                >
                  {product.tag}
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm"
                  >
                    View Product
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-sm text-secondary mb-2">{product.category}</p>
                <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-xl font-bold text-secondary">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
