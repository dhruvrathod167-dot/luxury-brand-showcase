'use client'

import { useState } from 'react'
import HeaderWithCart from '@/components/layout/HeaderWithCart'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { CreditCard, Truck, Package } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  size?: string
  quantity: number
}

interface BillingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  apartment: string
  city: string
  state: string
  zipCode: string
  country: string
}

export default function CheckoutPage() {
  const { cartItems, getTotalPrice } = useCart()
  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card')
  const [errors, setErrors] = useState<Partial<BillingInfo>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBillingInfo(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof BillingInfo]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = () => {
    const newErrors: Partial<BillingInfo> = {}

    // Required fields
    if (!billingInfo.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!billingInfo.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!billingInfo.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billingInfo.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!billingInfo.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!billingInfo.address.trim()) newErrors.address = 'Address is required'
    if (!billingInfo.city.trim()) newErrors.city = 'City is required'
    if (!billingInfo.state.trim()) newErrors.state = 'State is required'
    if (!billingInfo.zipCode.trim()) newErrors.zipCode = 'ZIP Code is required'
    if (!billingInfo.country.trim()) newErrors.country = 'Country is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // In a real app, this would process the order
      console.log('Order submitted:', { billingInfo, cartItems, selectedPaymentMethod })
      alert('Order placed successfully!')
    }
  }

  const subtotal = getTotalPrice()
  const shipping = 0 // Free shipping for luxury brand
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <main className="min-h-screen">
      <HeaderWithCart />
      <div className="pt-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-primary mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Details */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-primary mb-8">
                Billing Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={billingInfo.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-${errors.firstName ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={billingInfo.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-${errors.lastName ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-${errors.email ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={billingInfo.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-${errors.phone ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={billingInfo.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-${errors.address ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="123 Main Street"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-destructive">{errors.address}</p>
                  )}
                </div>

                {/* Apartment (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Apartment, suite, etc. (Optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={billingInfo.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Apt 4B"
                  />
                </div>

                {/* City and State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={billingInfo.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-${errors.city ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-destructive">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={billingInfo.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-${errors.state ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="NY"
                    />
                    {errors.state && (
                      <p className="mt-1 text-sm text-destructive">{errors.state}</p>
                    )}
                  </div>
                </div>

                {/* ZIP and Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={billingInfo.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-${errors.zipCode ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="10001"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-destructive">{errors.zipCode}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={billingInfo.country}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-${errors.country ? 'destructive' : 'border'} rounded-lg bg-background transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring`}
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Japan">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-sm text-destructive">{errors.country}</p>
                    )}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="pt-6">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-4">
                    Payment Method
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="credit-card"
                        checked={selectedPaymentMethod === 'credit-card'}
                        onChange={() => setSelectedPaymentMethod('credit-card')}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor="credit-card" className="text-sm font-medium text-muted-foreground cursor-pointer">
                        <CreditCard className="inline w-4 h-4 mr-2" />
                        Credit / Debit Card
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="cod"
                        name="payment-method"
                        value="cod"
                        checked={selectedPaymentMethod === 'cod'}
                        onChange={() => setSelectedPaymentMethod('cod')}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor="cod" className="text-sm font-medium text-muted-foreground cursor-pointer">
                        <Truck className="inline w-4 h-4 mr-2" />
                        Cash on Delivery
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="upi"
                        name="payment-method"
                        value="upi"
                        checked={selectedPaymentMethod === 'upi'}
                        onChange={() => setSelectedPaymentMethod('upi')}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor="upi" className="text-sm font-medium text-muted-foreground cursor-pointer">
                        <Package className="inline w-4 h-4 mr-2" />
                        UPI
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-primary mb-8">
                Order Summary
              </h2>

              <div className="bg-background border border-border rounded-lg p-8">
                {/* Order Items */}
                <div className="space-y-6 mb-8">
                  {cartItems.map((item: CartItem) => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="w-20 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-base font-serif font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.size && (
                          <p className="text-sm text-muted-foreground mb-1">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="text-sm font-medium text-primary">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-foreground">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium text-foreground">
                      ${tax.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-lg font-serif font-bold text-primary pt-4 border-t border-border">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  PLACE ORDER
                </button>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}