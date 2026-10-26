import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/hero/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import NewArrivalsSection from '@/components/sections/NewArrivalsSection'
import EditorialGallerySection from '@/components/sections/EditorialGallerySection'
import LookbookSection from '@/components/sections/LookbookSection'
import VIPSection from '@/components/sections/VIPSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import NewsletterSection from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <HeroSection />
      <FeaturesSection />
      <NewArrivalsSection />
      <EditorialGallerySection />
      <LookbookSection />
      <VIPSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}