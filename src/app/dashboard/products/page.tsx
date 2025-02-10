"use client";
import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "@/app/actions/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  priceLek: number;
  priceEuro: number;
  image_path: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const {  products, error } = await getAllProducts();
    if (error) {
      setError(error);
    } else {
      setProducts(products);
    }
  }

  async function handleDelete(id: string) {
    const { success, error } = await deleteProduct(id);
    if (success) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } else {
      setError(error);
    }
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader>
              <img
                src={product.image_path}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-600 font-bold">
                Price: {product.priceLek} Lek / {product.priceEuro} €
              </p>
              <div className="mt-4 flex justify-between">
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white flex items-center"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash className="w-4 h-4 mr-2" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
