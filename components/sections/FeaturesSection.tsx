'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Hand-Crafted Excellence',
    description: 'Each piece is meticulously crafted by master artisans with decades of experience.',
    icon: '✨',
  },
  {
    title: 'Premium Materials',
    description: 'We source only the finest fabrics and materials from around the world.',
    icon: '🧵',
  },
  {
    title: 'Sustainable Fashion',
    description: 'Committed to ethical production and environmental responsibility.',
    icon: '🌿',
  },
  {
    title: 'Lifetime Warranty',
    description: 'Every garment is backed by our comprehensive quality guarantee.',
    icon: '✓',
  },
]

export default function FeaturesSection() {
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
            Why Choose Luxe Atelier
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
