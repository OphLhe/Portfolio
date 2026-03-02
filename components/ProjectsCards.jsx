import dices from "../src/public/dices.png";
import React from 'react'
import fastaFood from "../src/public/logo_fastaFood.png";
import portfolio from "../src/public/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { useState } from "react";
import AnimatedContent from "../src/components/AnimatedContent";

const projectsData = [
  {
    id: 1,
    title: "Outil pour le jeu de rôles-Projet de formation",
    description: `Application Full Stack avec React.js, Node.js, MySql 
        pour créer et gérer les lores et quêtes de jeu de rôle tel que Donjons et Dragons.`,
    image: dices,
    githubFront: "https://github.com/OphLhe/rpgCreator_Back/tree/Ophelie",
    githubBack: "https://github.com/OphLhe/rpgCreator_Back/tree/Ophelie",
  },
  {
    id: 2,
    title: "Outil de gestion d'un restaurant de fast food-Projet de formation",
    description: `Application Full Stack avec React.js, Node.js, MySql et Boootstrap
       pour la gestion de profils d'employés avec autorisations différentes.
       Développé en mobile-first`,
    image: fastaFood,
    githubFront: "https://github.com/OphLhe/FastaFoodFront/tree/Ophelie",
    githubBack: "https://github.com/OphLhe/Fastafood/tree/Ophelie ",
  },
  {
    id: 3,
    title: "Portfolio personnel",
    description: `Portfolio développé avec React et tailwind.css, design responsive.`,
    image: portfolio,
    githubFront: "https://github.com/OphLhe/Portfolio/tree/Ophelie",
    githubBack: "",
  },
];

const ProjectsItem = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="flex w-full flex-col items-center p-2 sm:w-1/2 md:w-2/3 md:flex-col lg:w-100 lg:flex-row">
        <div
          className={`group relative min-h-80 w-full overflow-hidden rounded-2xl border-2 border-(--color-evergreen-600) shadow-[2px_2px_10px_2px_var(--color-evergreen-600)] lg:h-75 lg:w-100 ${isExpanded ? "min-h-60" : ""}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute h-full w-full object-cover"
          />

          <h3 className="absolute right-0 bottom-0 left-0 p-2 text-base text-(--color-bg) bg-(--color-evergreen-600) transition-all duration-300 lg:text-xl lg:group-hover:opacity-0">
            {project.title}
          </h3>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center overflow-auto bg-black/0 p-4 opacity-0 transition-all duration-300 ${isExpanded ? "pointer-events-auto bg-black/70 opacity-100" : " pointer-events-none lg:group-hover:pointer-events-auto lg:group-hover:bg-black/70 lg:group-hover:opacity-100"}`}
          >
            <p className="mb-4 cursor-default text-base lg:text-xl" style={{ color: "var(--projectItem-text)" }}>
              {project.description}
            </p>
            <div className="flex gap-4" style={{ color: "var(--projectItem-text)" }}>
              {project.githubFront === "" ? (
                ""
              ) : (
                <a
                  href={project.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-base underline lg:text-xl"
                  aria-label={`Page front-end du projet ${project.title} sur github (nouvel onglet)`}
                >
                  Front End
                  <FontAwesomeIcon icon={faGithub} alt="Logo GitHub" />
                </a>
              )}
              {project.githubBack === "" ? (
                ""
              ) : (
                <a
                  href={project.githubBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-base underline lg:text-xl"
                  aria-label={`Page back-end du projet ${project.title} sur github (nouvel onglet)`}
                >
                  Back End <FontAwesomeIcon icon={faGithub} alt="Logo GitHub" />
                </a>
              )}
            </div>
          </div>
        </div>
        <button
          className="mt-4 w-full rounded-2xl bg-(--color-evergreen-600) py-2 text-base lg:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Ouvrir/Fermer la description"
          aria-expanded={isExpanded}
          aria-controls="bouton-mobile"
        >
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </>
  );
};

const ProjectsCards = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      duration={2}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0.3}
    >
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project) => (
          <ProjectsItem key={project.id} project={project} />
        ))}
      </div>
    </AnimatedContent>
  );
};

export default ProjectsCards;