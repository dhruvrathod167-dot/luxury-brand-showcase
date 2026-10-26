import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import ProductCardWithAddToCart from '@/components/collections/ProductCardWithAddToCart'

const allProducts = [
  {
    id: '1',
    title: 'Nataliya Melnychuk ',
    category: 'Evening Wear',
    price: 2850,
    image: '/product-1.png',
  },
  {
    id: '2',
    title: 'Classic Blazer',
    category: 'Tailoring',
    price: 1450,
    image: '/product-2.png',
  },
  {
    id: '3',
    title: 'Wool Coat',
    category: 'Outerwear',
    price: 1950,
    image: '/product-3.png',
  },
  {
    id: '4',
    title: 'Slip Dress',
    category: 'Ready-to-Wear',
    price: 895,
    image: '/product-4.png',
  },
  {
    id: '5',
    title: 'Dane Wetton',
    category: 'Essentials',
    price: 695,
    image: '/product-10.png',
  },
  {
    id: '6',
    title: 'Cashmere Sweater',
    category: 'Knitwear',
    price: 1195,
    image: '/product-6.png',
  },
  {
    id: '7',
    title: 'Robert Richman',
    category: 'Accessories',
    price: 1895,
    image: '/product-111.png',
  },
  {
    id: '8',
    title: 'Satin Blouse',
    category: 'Tops',
    price: 695,
    image: '/product-8.png',
  },
  {
    id: '9',
    title: 'Midi Skirt',
    category: 'Bottoms',
    price: 795,
    image: '/product-9.png',
  },
]

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 text-balance">
            All Collections
          </h2>
          <div className="w-12 h-1 bg-accent mb-12" />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {allProducts.map((product, index) => (
              <ProductCardWithAddToCart
                key={product.id}
                {...product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}