import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPhp,
  FaSymfony,
} from "react-icons/fa";
import photo from "./images/photo.png";
import img1 from "./images/claw_machine.png";
import img2 from "./images/image_filter.png";
import img3 from "./images/mybooks.png";
import img4 from "./images/nasa-app.png";

export default {
  about: {
    name: "Julie Hauptmann",
    role: "Étudiante en Master Informatique",
    info: "recherche un stage de 4 à 6 mois",
    picture: photo,
    networks: [
      {
        name: "Linkedin",
        icon: <AiFillLinkedin />,
        link:
          "https://www.linkedin.com/in/julie-hauptmann-caen/",
      },
      {
        name: "Github",
        icon: <AiFillGithub />,
        link: "https://github.com/Julie-Ha",
      },
    ],
  },
  projects: [
    {
      id: 1,
      name: "Claw Machine",
      description: "Jeu en Javascript",
      image: img1,
      link: "https://julie-ha.github.io/claw_machine/",
      source: "https://github.com/Julie-Ha/claw_machine",
    },
    {
      id: 2,
      name: "Image Filter",
      description: "Application de retouche d'image en Javascript",
      image: img2,
      link: "https://julie-ha.github.io/image_filter/",
      source: "https://github.com/Julie-Ha/image_filter",
    },
    {
      id: 3,
      name: "MyBooks",
      description: "Application web pour gérer ses lectures avec Symfony",
      image: img3,
      link: "",
      source: "https://github.com/Julie-Ha/MyBooks",
    },
    {
      id: 4,
      name: "Nasa App",
      description: "Application web utilisant l'API de la NASA",
      image: img4,
      link: "https://julie-ha.github.io/nasa-app/",
      source: "https://github.com/Julie-Ha/nasa-app",
    },
  ],
  skills: {
    css: [
      {
        id: 1,
        name: "CSS",
        icon: <FaCss3Alt style={{ color: "#3F7CCD" }} />,
      },
      {
        id: 3,
        name: "Bootstrap",
        icon: <FaBootstrap style={{ color: "#8870C7" }} />,
      },
    ],
    javascript: [
      {
        id: 1,
        name: "Javascript",
        icon: <FaJs style={{ color: "#FFCA66" }} />,
      },
      {
        id: 2,
        name: "React",
        icon: <FaReact style={{ color: "#00C1D8" }} />,
      },
    ],
    backend: [
      {
        id: 1,
        name: "PHP",
        icon: <FaPhp style={{ color: "#7377AD" }} />,
      },
      {
        id: 2,
        name: "Symfony",
        icon: <FaSymfony />,
      },
    ],
  }
};
