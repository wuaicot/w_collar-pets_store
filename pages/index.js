import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  console.log("🚀 ~ bannerData:", bannerData); // Debug para revisar los datos

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length > 0 ? bannerData[0] : {}} />
      <div className="products-heading">
        <h2>Estos son nuestros Collares</h2>
        <p className="sub_hero">Ofrecemos productos de calidad hechos con amor</p>
        <br/>
        <hr/>
      </div>
      

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length > 0 ? bannerData[0] : {}} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  console.log("🚀 ~ Datos de Sanity:", { products, bannerData });

  return {
    props: { products, bannerData },
  };
};

export default Home;
