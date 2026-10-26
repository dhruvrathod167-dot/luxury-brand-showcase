'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const lookbooks = [
  {
    title: 'Evening Elegance',
    description: 'Master the art of formal sophistication',
    image: '/lookbook-evening.png',
  },
  {
    title: 'Daytime Chic',
    description: 'Effortless style for every occasion',
    image: '/lookbook-daytime.png',
  },
  {
    title: 'Minimalist Luxury',
    description: 'Less is more in high fashion',
    image: '/lookbook-minimalist.png',
  },
]

export default function LookbookSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            Style Guides & Lookbooks
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover how to style our collections for every occasion and season.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {lookbooks.map((lookbook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 relative bg-muted">
                <Image
                  src={lookbook.image}
                  alt={lookbook.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">{lookbook.title}</h3>
                    <p className="text-sm text-gray-200">{lookbook.description}</p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                className="text-accent font-semibold group-hover:text-accent/80 transition-colors duration-300 flex items-center gap-2"
              >
                View Collection
                <span>→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
