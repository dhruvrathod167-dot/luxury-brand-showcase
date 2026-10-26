'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Be the First to Know
          </h2>
          <p className="text-lg sm:text-xl text-secondary mb-12">
            Receive exclusive previews of new collections and insider access to special events.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-card text-foreground placeholder-muted-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            />
            <motion.button
              whileHover={{ backgroundColor: '#d4af37' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-sm transition-colors duration-300"
            >
              {submitted ? 'Subscribed' : 'Subscribe'}
            </motion.button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-secondary mt-4"
            >
              Thank you for subscribing to Luxe Atelier.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
