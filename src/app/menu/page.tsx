"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getAllProducts } from "@/app/actions/product"

interface Product {
  id: number
  title: string
  category: string
  description: string
  priceLek: number
  priceEuro: number
  image_path: string
}

export default function MenuPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      const {  products, error } = await getAllProducts()
      if (error) {
        setError(error)
      } else {
        setProducts(products as Product[])
      }
    }
    fetchProducts()
  }, [])

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, Product[]>,
  )

  if (error) {
    return <div className="text-center text-white mt-10">Error: {error}</div>
  }

  return (
    <div className="min-h-screen bg-red-600 text-white">
      {/* <header className="bg-red-700 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">FastFood Delight</h1>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-center mb-12">Menu</h2>

        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <section key={category} className="mb-16">
            <h3 className="text-3xl font-semibold mb-6 text-yellow-300 capitalize">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-800 transform transition-all duration-300 "
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image_path || "/placeholder.svg"}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-bold">{product.priceLek} LEK</span>
                      <span className="text-gray-500">{product.priceEuro} €</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      
    </div>
  )
}

