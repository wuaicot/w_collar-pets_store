//component/Footer.jsx
import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub
} from "react-icons/ai";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="footer-container">
      <p>
        2025 WUAICOT. Todos los derechos reservados{" "}
        <span
          className="cursor-pointer text-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          ©
        </span>
      </p>

      <p className="icons">
        <AiFillLinkedin
          className="cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/wuaicot/")}
        />
        <AiFillInstagram
          className="cursor-pointer"
          onClick={() => window.open("https://www.instagram.com/naycol.linares/")}
        />
        <AiOutlineTwitter
          className="cursor-pointer"
          onClick={() => window.open("https://www.twitter.com/naiycol/")}
        />
        <AiFillGithub
          className="cursor-pointer"
          onClick={() => window.open("https://github.com/wuaicot")}
        />
      </p>

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <p>
              El carácter © es el símbolo de copyright, que indica que una obra está protegida por derechos de autor. 
              Esto significa que el creador o titular de los derechos tiene el control sobre su uso, distribución y 
              reproducción. En muchos países, los derechos de autor se aplican automáticamente en el momento en que una obra 
              es creada, sin necesidad de registro formal.
            </p>
            <p>⚠️ Te sugiero darle aviso a Naycol — WUAICOT.</p>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;