'use client'

import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ShoppingBag, Plus, Minus } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  size?: string
  quantity: number
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const item = cartItems.find(item => item.id === id)
    if (item) {
      updateQuantity(id, item.size, newQuantity)
    }
  }

  const increaseQuantity = (id: string) => {
    const item = cartItems.find(item => item.id === id)
    if (item) {
      updateQuantity(id, item.size, item.quantity + 1)
    }
  }

  const decreaseQuantity = (id: string) => {
    const item = cartItems.find(item => item.id === id)
    if (item) {
      const newQuantity = item.quantity - 1
      if (newQuantity <= 0) {
        // Remove the item if quantity would be 0 or less
        removeFromCart(id, item.size)
      } else {
        // Otherwise update the quantity
        updateQuantity(id, item.size, newQuantity)
      }
    }
  }

  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <div className="pt-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-primary mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-24">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-50" />
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Your cart is empty
              </h2>
              <p className="text-foreground opacity-75 mb-8">
                Explore our collections and add items to get started.
              </p>
              <Link href="/collections">
                <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            /* Cart Items */
            <div>
              {/* Cart Items Grid */}
              <div className="space-y-6 mb-12">
                {cartItems.map((item: CartItem) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center gap-8 p-6 bg-background border border-border rounded-lg">
                    {/* Product Image */}
                    <div className="w-56 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base font-semibold text-primary mb-2">
                        ${item.price.toFixed(2)}
                      </p>
                      {item.size && (
                        <p className="text-sm text-muted-foreground mb-4">
                          Size: {item.size}
                        </p>
                      )}
                      <p className="text-sm font-medium text-muted-foreground">
                        Item Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full border border-border hover:bg-muted transition-colors duration-300 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full border border-border hover:bg-muted transition-colors duration-300 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t border-border pt-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary">
                      Total
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    ${getTotalPrice().toFixed(2)}
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="/collections">
                    <button className="flex-1 px-8 py-4 border border-border text-foreground hover:bg-muted transition-colors duration-300 font-semibold">
                      Continue Shopping
                    </button>
                  </Link>
                  <Link href="/checkout">
                    <button className="flex-1 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}