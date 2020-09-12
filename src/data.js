import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import photo from "./images/photo.png";
import img1 from "./images/claw_machine.png";
import img2 from "./images/image_filter.png";
import img3 from "./images/mybooks.png";

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
};
