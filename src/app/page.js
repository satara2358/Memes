"use client";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useState } from "react";

function Home() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLine1 = (event) => {
    setLine1(event.target.value);
  };
  const onChangeLine2 = (event) => {
    setLine2(event.target.value);
  };
  const onChangeImage = (event) => {
    setImagen(event.target.value);
  };

  const onClickImage = (event) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img
      link.click();
    });
  };

  return (
    <div className="container">
      <h1>Memes</h1>
      <div>
        <select onChange={onChangeImage}>
          <option value="fire">Fire</option>
          <option value="bender">Bender</option>
          <option value="animal">Animal</option>
          <option value="morfeo">Morfeo</option>
          <option value="homero">Homero</option>
          <option value="404">404</option>
        </select>
        <form>
          <input onChange={onChangeLine1} type="text" placeholder="line 1" />
          <br/>
          <input onChange={onChangeLine2} type="text" placeholder="line 2" />
        </form>
        <button onClick={onClickImage}>Exportar</button>
        <div id="meme" >
          <span className="texto">{line1}</span>
          <span className="texto2">{line2}</span>
          <img className="imagen" src={`../images/${imagen}.png`}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
