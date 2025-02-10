'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Posts from './Posts'
import { getAllProducts } from '@/app/actions/product'

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  priceLek: number;
  priceEuro: number;
  image_path: string;
}

export default function Menu() {
  const searchParams = useSearchParams()
  const search = searchParams.get('category') || 'all'

  const [category, setCategory] = useState<string>('all');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const {  products, error } = await getAllProducts();
    if (error) {
      console.log(error)
    } else {
      setProducts(products);
    }
  }

  useEffect(() => {
    setCategory(search);
  }, [search]);

  // Filter products based on category
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="px-[3%] py-5">
      <div className="lg:flex grid grid-cols-2 items-center gap-3 ">
        {[
          { label: 'Te gjitha', value: 'all' },
          { label: '🌭 Qofte', value: 'qofte' },
          { label: '🥖 Sandwich', value: 'sandwich' },
          { label: '🥤 Freskuese', value: 'freskuese' },
          { label: '🍖♨️🔥🥩🥓 Mix', value: 'mix' },
          { label: '🍺 Alkolike', value: 'alkolike' },
          { label: '🌶️ Ekstra', value: 'ekstra' }
        ].map(({ label, value }) => (
          <Link
            key={value}
            href={{ pathname: '/', query: { category: value } }}
            scroll={false}
            className={`flex items-center gap-1 px-4 py-2 border-[0.5px] font-semibold rounded-full text-lg ${
              category === value ? 'bg-red-500 text-white' : 'bg-white text-black'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      
      {/* Pass filtered products to Posts */}
      <Posts products={filteredProducts ?? []} />
    </div>
  );
}
