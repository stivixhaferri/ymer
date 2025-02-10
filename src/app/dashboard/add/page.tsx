"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createProduct } from "@/app/actions/product"

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData(event.currentTarget)
    formData.append("category", category) // Add category to form data

    const result = await createProduct(formData)

    if (result.error) {
      setMessage(result.error)
    } else if (result.success) {
      setMessage("Product created successfully!")
      window.location.reload()
    }

    setIsSubmitting(false)
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Product Title</Label>
          <Input id="title" name="title" required />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="qofte">Qofte</SelectItem>
              <SelectItem value="sandwich">Sandwich</SelectItem>
              <SelectItem value="freskuese">Freskuese</SelectItem>
              <SelectItem value="mix">Mix</SelectItem>
              <SelectItem value="alkolike">Alkolike</SelectItem>
              <SelectItem value="ekstra">Ekstra</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="priceLek">Price in LEK</Label>
          <Input id="priceLek" name="priceLek" type="number" step="0.01" required />
        </div>
        <div>
          <Label htmlFor="priceEuro">Price in Euro</Label>
          <Input id="priceEuro" name="priceEuro" type="number" step="0.01" required />
        </div>
        <div>
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea id="ingredients" name="ingredients" placeholder="e.g., tomatoes, potatoes, sausage" required />
        </div>
        <div>
          <Label htmlFor="image">Product Image</Label>
          <Input id="image" name="image" type="file" accept="image/*" required />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Product"}
        </Button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  )
}

export default Page

