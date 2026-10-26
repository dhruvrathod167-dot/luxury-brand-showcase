'use client'

import { useState } from 'react'
import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary mb-8 text-balance">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-foreground leading-relaxed opacity-90">
              Have a question or special request? We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-12">
                    Contact Information
                  </h2>

                  {/* Email */}
                  <div className="mb-8 flex gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:hello@luxeatelier.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@luxeatelier.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-8 flex gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+33142123456"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +33 (1) 42 12 34 56
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-8 flex gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        42 Rue de Rivoli<br />
                        75004 Paris, France
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="pt-8 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">Store Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 11:00 AM - 8:00 PM</p>
                      <p>Sunday: 12:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base opacity-90">
                Find answers to common questions about our brand and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Shipping & Delivery</h3>
                <p className="text-sm opacity-80">
                  We offer worldwide shipping with free delivery on orders over $500. Standard delivery takes 5-7 business days.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Returns & Exchanges</h3>
                <p className="text-sm opacity-80">
                  Our 30-day return policy ensures complete satisfaction. All items must be unworn with original tags attached.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Payment Methods</h3>
                <p className="text-sm opacity-80">
                  We accept all major credit cards, digital wallets, and bank transfers for your convenience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Custom Orders</h3>
                <p className="text-sm opacity-80">
                  Schedule a consultation with our design team to create a custom piece tailored to your style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 lg:py-24 bg-muted">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Stay Updated
              </h2>
              <p className="text-base text-foreground opacity-75 mb-8">
                Subscribe to our newsletter for exclusive collections and special offers.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </ScrollReveal>
      </div>
      <Footer />
    </main>
  )
}