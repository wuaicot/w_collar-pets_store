import React from "react";
//import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  if (!footerBanner || Object.keys(footerBanner).length === 0) {
    return <div>Cargando datos...</div>; // Manejo de error si no hay datos
  }

  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    image,
  } = footerBanner;

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
        </div>

        {/* {image && <img src={urlFor(image)} className="footer-banner-image" />}  */}
      </div>
    </div>
  );
};

export default FooterBanner;
