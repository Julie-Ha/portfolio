import React, { useContext } from "react";
import { DataContext } from "../context";
import "./Drawings.css";

const Drawings = React.forwardRef((props, ref) => {
  const context = useContext(DataContext);
  const { drawings } = context;

  return (
    <section id="drawings" className="drawings" ref={ref}>
        <h1>Dessins</h1>
        <div className="drawings-container">
      {drawings.map((item, index) => {
          return <img src={item.src} alt={item.name} key={index} />
      })}
      </div>
    </section>
  );
})

export default Drawings;
