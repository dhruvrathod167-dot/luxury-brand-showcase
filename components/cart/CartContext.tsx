'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  size?: string
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: any, size?: string) => void
  removeFromCart: (id: string, size?: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  const saveCartToStorage = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items))
  }

  const addToCart = (product: any, size?: string) => {
    setCartItems(prevItems => {
      // Create a unique identifier that includes size
      const itemId = size ? `${product.id}-${size}` : product.id

      // Check if item already exists with the same size
      const existingItemIndex = prevItems.findIndex(item =>
        item.id === product.id && item.size === size
      )

      if (existingItemIndex > -1) {
        // Increase quantity if item exists
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        saveCartToStorage(updatedItems)
        return updatedItems
      } else {
        // Add new item
        const newItem: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          size: size,
          quantity: 1
        }
        const updatedItems = [...prevItems, newItem]
        saveCartToStorage(updatedItems)
        return updatedItems
      }
    })
  }

  const removeFromCart = (id: string, size?: string) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item =>
        !(item.id === id && item.size === size)
      )
      saveCartToStorage(updatedItems)
      return updatedItems
    })
  }

  const updateQuantity = (id: string, size: string, quantity: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      ).filter(item => item.quantity > 0) // Remove items with quantity 0

      saveCartToStorage(updatedItems)
      return updatedItems
    })
  }

  const clearCart = () => {
    setCartItems([])
    saveCartToStorage([])
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}