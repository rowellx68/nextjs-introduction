import products from './products.json'

export type ProductSlug = {
  slug: string
  category: string
}

export type ProductDetail = {
  id: string
  slug: string
  name: string
  category: string
  description: string
  price: number
}

export type ProductPreview = {
  slug: string
  name: string
  category: string
  price: number
}

export function getAllProductSlugs(): ProductSlug[] {
  return products.map((p) => {
    return { 
      slug: p.slug,
      category: p.category
    }
  })
}

export function getProductDetail(category: string, slug: string): ProductDetail | undefined {
  return products.find((p) => p.category === category && p.slug === slug)
}

export function getAllProductPreviews(): ProductPreview[] {
  return products.map((p) => {
    return { 
      slug: p.slug, 
      category: p.category, 
      price: p.price, 
      name: p.name
    }
  })
}