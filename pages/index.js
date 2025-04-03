//pages/index.js
import React, { useEffect, useState } from "react"
import { client } from "../lib/client"
import { Product, FooterBanner, HeroBanner } from "../components"

const Home = ({ products, bannerData }) => {
  // Estado para controlar la animación de entrada
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length > 0 ? bannerData[0] : {}} />
      
      <div className={`products-container ${isLoaded ? "fade-in" : ""}`}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length > 0 ? bannerData[0] : {}} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  console.log("🚀 ~ Datos de Sanity:", { products, bannerData })

  return {
    props: { products, bannerData },
  }
}

export default Home
