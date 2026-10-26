'use client'

import { motion } from 'framer-motion'

const vipBenefits = [
  { title: 'Early Access', desc: 'First to shop new collections before public release' },
  { title: 'Personal Stylist', desc: 'Dedicated fashion expert for personalized recommendations' },
  { title: 'VIP Events', desc: 'Exclusive invitations to private shopping events and launches' },
  { title: 'Priority Support', desc: '24/7 concierge service and white-glove customer care' },
  { title: 'Special Pricing', desc: 'Members-only discounts and exclusive promotional offers' },
  { title: 'Free Alterations', desc: 'Complimentary tailoring and alterations for all purchases' },
]

export default function VIPSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <motion.span
              className="text-accent text-sm font-bold tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              EXCLUSIVE PRIVILEGE
            </motion.span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 text-balance">
            Luxe Circle Membership
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Elevate your luxury experience with exclusive benefits, early access to collections, and personalized services.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Join Luxe Circle
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {vipBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <motion.div
                className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-lg font-bold">✓</span>
              </motion.div>
              <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
