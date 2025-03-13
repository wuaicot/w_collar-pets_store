import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const response = await fetch("/api/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading("Redireccionando a Mercado Pago...");

    window.location.href = `https://www.mercadopago.cl/checkout/v1/redirect?preference-id=${data.id}`;
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Tu Carrito</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3> carrito de compras está vacío</h3>
            <Link href="/" passHref>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Segir Comprando
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              if (!item) {
                console.error("Item is undefined in cartItems");
                return null;
              }
              if (!item.image || !Array.isArray(item.image) || item.image.length === 0 || !item.image[0] || !item.image[0].asset || !item.image[0].asset._ref) {
                console.error("Item does not have valid image data", item);
                return (
                  <div className="product" key={item._id}>
                    <p>Imagen no disponible (Error en datos)</p>
                    <div className="item-desc">
                      <div className="flex top">
                        <h5>{item.name}</h5>
                        <h4>CLP {item.price}</h4>
                      </div>
                      <div className="flex bottom">
                        {/* ... el resto del código ... */}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div className="product" key={item._id}>
                  <img
                    src={urlFor(item.image[0])}
                    className="cart-product-image"
                    alt={item.name}
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>CLP {item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>CLP {totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;