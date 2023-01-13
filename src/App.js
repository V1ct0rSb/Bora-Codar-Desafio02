import "./App.css";
import React from "react";

import { Md360 } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export default function App() {
  let imagens = {
    img1: "sofaRosa.png",
    img2: "sofaAnimado.gif",
  };

  const trocarimagem = () => {
    setImagem((state) => (state === "img1" ? "img2" : "img1"));
  };

  const [imagem, setImagem] = React.useState("img1");

  return (
    <div className="container">

      <div class="box">
        <button className="troca" onClick={trocarimagem}>
          {imagem === "img1" ? <Md360 size={25} /> : <GrClose size={25} />}
        </button>
        <div className="img">
          <img alt="sofá-rosa" src={imagens[imagem]} width="100%"></img>
        </div>
      </div>

      <div className="conteudo">
        <h4>CÓDIGO: 42404</h4>
        <h1>Sofá Margot II - Rosé</h1>
        <h2>R$ 4.000 </h2>
        <button>
          <p>adicionar à cesta</p>
        </button>
      </div>
    </div>
  );
}
