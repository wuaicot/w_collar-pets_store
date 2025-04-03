import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Icono de casa */}
      <Link href="/" className="home-icon">
        <AiOutlineHome />
      </Link>

      {/* Botón de menú (responsive) */}
      {/* <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button> */}

      {/* Logo */}
      <p className="logo">
        <Link href="https://mascota-perdida-app-qkxp.vercel.app/" className="font-bold">
         Ir a Super-Collar App  <span className="cajita">▽</span>
        </Link>
      </p>

      {/* Menú desplegable animado */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className={`menu ${menuOpen ? "open" : ""}`}
      >
        <Menu as="div" className="menu-container">
          <Menu.Button className="menu-title">Menú</Menu.Button>
          <Menu.Items className="menu-items">
            <Menu.Item>
              {({ active }) => (
                <Link href="/" className={`menu-link ${active ? "active" : ""}`}>
                  Contacto
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="https://mi-portafolio-full-stack.vercel.app/" className={`menu-link ${active ? "active" : ""}`}>
                  Potafolio 
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact" className={`menu-link ${active ? "active" : ""}`}>
                  ####
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </motion.div>

      {/* Botón del carrito */}
      <motion.button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
        whileHover={{ scale: 1.1 }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </motion.button>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
