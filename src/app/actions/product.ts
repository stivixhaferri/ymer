"use server"
import path from "path"
import sharp from "sharp"
import { prisma } from "@/lib/prisma"

export async function createProduct(formData: FormData) {
  const title = formData.get("title") as string
  const priceLek = Number.parseFloat(formData.get("priceLek") as string)
  const priceEuro = Number.parseFloat(formData.get("priceEuro") as string)
  const ingredients = formData.get("ingredients") as string
  const category = formData.get("category") as string
  const image = formData.get("image") as File

  if (!title || !priceLek || !priceEuro || !ingredients || !image) {
    return { error: "All fields are required" }
  }

  // Generate unique filename
  const timestamp = new Date().toISOString().replace(/[-:.]/g, "").toLowerCase()
  const filename = `${timestamp}.webp`
  const imagePath = path.join(process.cwd(), "public", "uploads", filename)

  // Convert and save image
  const imageBuffer = Buffer.from(await image.arrayBuffer())
  await sharp(imageBuffer).webp().toFile(imagePath)

  // Save to database
  try {
    const product = await prisma.product.create({
      data: {
        title,
        description: ingredients,
        priceLek,
        category,
        priceEuro,
        image_path: `/uploads/${filename}`,
      },
    })
    return { success: true, product }
  } catch (error) {
    console.error("Failed to create product:", error)
    return { error: "Failed to create product" }
  }
}



export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany()
    return { success: true, products }
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return { error: "Failed to fetch products" }
  }
}


export async function deleteProduct(id) {
  try {
    await prisma.product.delete({ where: { id } });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}


export async function submitCareerApplication(name: string, phone: string, message: string) {
  if (!name || !phone || !message) {
      throw new Error("All fields are required");
  }

  try {
      await prisma.careerApplication.create({
          data: { name, phone, message },
      });
      return { success: true };
  } catch (error) {
      console.error("Database error:", error);
      return { success: false, error: "Something went wrong!" };
  }
}


export async function getCareerApplications() {
  return await prisma.careerApplication.findMany({
      orderBy: { createdAt: "desc" }, // Latest first
  });
}