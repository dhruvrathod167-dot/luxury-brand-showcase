import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Image from 'next/image'

export default function AboutPage() {
  const timeline = [
    { year: '2010', title: 'Founded', description: 'Luxe Atelier was born from a passion for timeless elegance' },
    { year: '2015', title: 'Global Expansion', description: 'Opened flagship stores in Paris, Milan, and New York' },
    { year: '2020', title: 'Sustainability', description: 'Committed to ethical sourcing and sustainable practices' },
    { year: '2024', title: 'Innovation', description: 'Launched our digital-first collection platform' },
  ]

  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary mb-8 text-balance">
              About Luxe
            </h1>
            <p className="text-base sm:text-lg text-foreground leading-relaxed opacity-90">
              We believe that true luxury lies not in excess, but in thoughtful design, exceptional craftsmanship, and the timeless pieces that define a life well-lived.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-base leading-relaxed text-foreground opacity-90 mb-4">
                  Founded in 2010, Luxe Atelier emerged from the vision of creating luxury fashion that transcends trends. What started as a small atelier in Paris has grown into a globally recognized brand known for its meticulous attention to detail and commitment to excellence.
                </p>
                <p className="text-base leading-relaxed text-foreground opacity-90">
                  Each piece is carefully curated and crafted by our master artisans, ensuring that every collection reflects our unwavering dedication to quality and sophistication.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/lookbook-daytime.png"
                    alt="Our craftsmanship"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-16 text-center">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-4">Craftsmanship</h3>
                  <p className="opacity-90">
                    We believe in the artistry of creating by hand. Every stitch, every seam, every detail is executed with precision and care.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-4">Sustainability</h3>
                  <p className="opacity-90">
                    Luxury should not come at the cost of our planet. We source ethically and produce responsibly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-4">Timelessness</h3>
                  <p className="opacity-90">
                    We create pieces meant to last. Our collections transcend seasonal trends and become cherished heirlooms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-16 text-center">
              Our Journey
            </h2>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start pb-12 border-b border-border last:border-b-0">
                  <div className="md:col-span-1">
                    <p className="text-4xl font-serif font-bold text-accent">{item.year}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground opacity-75">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 lg:py-24 bg-muted">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-16 text-center">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { role: 'Founder & Creative Director', image: '/lookbook-daytime.png' },
                  { role: 'Head of Design', image: '/lookbook-evening.png' },
                  { role: 'Head of Operations', image: '/lookbook-minimalist.png' }
                ].map((person, idx) => (
                  <div key={idx} className="text-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 mx-auto">
                      <Image
                        src={person.image}
                        alt={`Team member: ${person.role}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-primary mb-1">
                      Team Member
                    </h3>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
      <Footer />
    </main>
  )
}