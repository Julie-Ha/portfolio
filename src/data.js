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
import drawing1 from "./images/drawings/drawing1.jpg";
import drawing2 from "./images/drawings/drawing2.jpg";
import drawing3 from "./images/drawings/drawing3.jpg";
import drawing4 from "./images/drawings/drawing4.jpg";
import drawing5 from "./images/drawings/drawing5.jpg";

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
          "https://www.linkedin.com/public-profile/in/julie-hauptmann-a560501b5",
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
  ],
  skills: {
    css: [
      {
        id: 1,
        name: "CSS",
        icon: <FaCss3Alt style={{ color: "#3F7CCD" }} />,
      },
      {
        id: 2,
        name: "Sass",
        icon: <FaSass style={{ color: "#D671BB" }} />,
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
  },
  drawings: [
    {
      id: 1,
      name: "drawing1",
      src: drawing1,
    },
    {
      id: 2,
      name: "drawing2",
      src: drawing2,
    },
    {
      id: 3,
      name: "drawing3",
      src: drawing3,
    },
    {
      id: 4,
      name: "drawing4",
      src: drawing4,
    },
    {
      id: 5,
      name: "drawing5",
      src: drawing5,
    },
  ],
};
