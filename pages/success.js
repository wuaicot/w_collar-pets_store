import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>¡Pago realizado con éxito!</h2>
        <p className="email-msg">Revisa tu correo para la confirmación.</p>
        <p className="description">
          Si tienes dudas, por favor contáctanos.
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
