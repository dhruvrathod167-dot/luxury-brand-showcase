'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const editorialGallery = [
  {
    id: 1,
    category: 'WOMEN',
    title: 'Timeless Essentials',
    subtitle: 'Crafted for Modern Elegance',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'women'
  },
  {
    id: 2,
    category: 'COLLECTION',
    title: 'Premium Selection',
    subtitle: 'Curated Exclusively for You',
    image: '/product-10.png',
    link: 'collection'
  },
  {
    id: 3,
    category: 'BOUTIQUE',
    title: 'Atelier Collection',
    subtitle: 'Designer Pieces for Discerning Tastes',
    image: '/lookbook-daytime.png',
    link: 'boutique'
  }
]

export default function EditorialGallerySection() {
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
            Editorial Excellence
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our latest editorial features showcasing the essence of luxury and sophistication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {editorialGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="rounded-3xl overflow-hidden h-[500px] mb-8 relative shadow-lg transition-all duration-400 hover:shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-end justify-end p-8"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white w-full">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-foreground/80">
                      {item.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      {item.subtitle}
                    </p>
                    <motion.a
                      href={`/${item.link}`}
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-300"
                    >
                      Discover →
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}