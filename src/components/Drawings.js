import React, { useContext } from "react";
import { DataContext } from "../context";
import "./Drawings.css";

function Drawings() {
  const context = useContext(DataContext);
  const { drawings } = context;

  return (
    <section id="drawings" className="drawings">
        <h1>Dessins</h1>
        <div className="drawings-container">
      {drawings.map((item, index) => {
          return <img src={item.src} alt={item.name} key={index} />
      })}
      </div>
    </section>
  );
}

export default Drawings;
