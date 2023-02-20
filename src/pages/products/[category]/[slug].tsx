import { getAllProductSlugs, getProductDetail, ProductDetail, ProductSlug } from "@/data/products";

type ProductPageProps = {
  product: ProductDetail
}

type StaticPathParams = {
  params: ProductSlug
}

type ProductPageStaticProps = {
  props: ProductPageProps
}

export default function ProductPage({ product }: ProductPageProps): JSX.Element {
  return (
    <>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    </>
  )
}

export function getStaticProps({ params }: StaticPathParams): ProductPageStaticProps {
  const product = getProductDetail(params.category, params.slug)

  return {
    props: {
      product: product!
    }
  }
}

export function getStaticPaths() {
  const productSlugs = getAllProductSlugs()

  return {
    paths: productSlugs.map((p) => ({ params: p })),
    fallback: false,
  }
}