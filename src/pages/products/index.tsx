import { getAllProductPreviews, ProductPreview } from "@/data/products"
import { formatTime } from "@/utilities/date-formatter"
import Link from "next/link"

type ProductIndexProps = {
  lastUpdated: string
  productPreviews: ProductPreview[]
}

export default function ProductIndexPage({ lastUpdated, productPreviews }: ProductIndexProps): JSX.Element {
  return (
    <>
      <h1>Welcome to the Product index page</h1>
      <p>Page last updated at {formatTime(lastUpdated)}</p>

      {productPreviews.map((p) => (
        <Link key={`${p.category}-${p.slug}`} href={`/products/${p.category}/${p.slug}`}>
          <div>
            <p>{p.name}</p>
            <p>Price £{p.price}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

// since we're providing the `revalidate` property
// this page will be rendered again when that time has elapsed
// and somebody accesses /products
export function getStaticProps() {
  const lastUpdated = (new Date()).toISOString()
  const productPreviews = getAllProductPreviews()

  console.log(`getStaticProps for ProductIndexPage: ${lastUpdated}`)

  return {
    props: {
      lastUpdated,
      productPreviews
    },
    revalidate: 10 // in seconds
  }
}