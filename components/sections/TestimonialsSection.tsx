'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Fashion Editor',
    quote: 'Luxe Atelier represents the pinnacle of modern luxury fashion. Every detail is perfection.',
    initials: 'SL',
  },
  {
    name: 'Marcus Anderson',
    role: 'Style Influencer',
    quote: 'The quality and craftsmanship are unmatched. I&apos;ve been recommending them for years.',
    initials: 'MA',
  },
  {
    name: 'Elena Rossi',
    role: 'Luxury Brand Curator',
    quote: 'Finally, a brand that truly understands the essence of timeless elegance and luxury.',
    initials: 'ER',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
            Loved by Connoisseurs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from those who appreciate the finest in fashion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-serif font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
