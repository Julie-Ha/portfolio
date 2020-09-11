import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default {
  about: {
    name: "Julie Hauptmann",
    role: "étudiante en Master Informatique",
    info: "recherche un stage de 4 à 6 mois",
    networks: [
      {
        name: "Linkedin",
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/public-profile/in/julie-hauptmann-a560501b5",
      },
      {
        name: "Github",
        icon: <AiFillGithub />,
        link: "https://github.com/Julie-Ha",
      },
    ],
  },
};