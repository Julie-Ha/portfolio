import React, { useContext } from "react";
import { DataContext } from "../context";
import "./Footer.css";

function Footer() {
  const context = useContext(DataContext);
  const { networks } = context;

  return (
    <footer>
      <ul className="footer-networks">
        {networks.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p>Copyright &copy; {(new Date()).getFullYear()} </p>
    </footer>
  );
}

export default Footer;
