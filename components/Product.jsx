//components/Product.jsx
import React from "react"
import Link from "next/link"
import { urlFor } from "../lib/client"

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`} passHref>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt={name}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">CLP {price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
