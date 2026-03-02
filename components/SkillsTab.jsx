import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoReactBits from "../src/public/reactBitsLogo.png";
import logoExpress from "../src/public/icons8-express-js-100.png";
import logoMysql from "../src/public/MySQL_logo.svg";
import logoPostman from "../src/public/postmanLogo.png";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedContent from "../src/components/AnimatedContent";

const FrontSkills = [
  {
    id: 1,
    name: "HTML",
    icone: (
      <FontAwesomeIcon icon={faHtml5} size="xl" style={{ color: "#ff6d00" }} />
    ),
  },
  {
    id: 2,
    name: "CSS",
    icone: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        size="xl"
        style={{ color: "#264de4" }}
      />
    ),
  },
  {
    id: 3,
    name: "Javascript",
    icone: (
      <FontAwesomeIcon
        icon={faSquareJs}
        size="xl"
        style={{ color: "#d4b830" }}
      />
    ),
  },
  {
    id: 4,
    name: "React",
    icone: (
      <FontAwesomeIcon icon={faReact} size="xl" style={{ color: "#00daff" }} />
    ),
  },
  {
    id: 5,
    name: "Tailwind css",
    icone: (
      <FontAwesomeIcon
        icon={faTailwindCss}
        size="xl"
        style={{ color: "#3ab1af" }}
      />
    ),
  },
  {
    id: 6,
    name: "Bootstrap",
    icone: (
      <FontAwesomeIcon
        icon={faBootstrap}
        size="xl"
        style={{ color: "#7952b3" }}
      />
    ),
  },
  {
    id: 7,
    name: "React Bits",
    icone: (
      <img src={logoReactBits} alt="logo React Bits" className="h-8 md:h-12 rounded-3xl" />
    ),
  },
];

const FrontItem = ({ front }) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <span>{front.icone}</span>
        <p className="md:text-md pl-2 text-base lg:text-xl">{front.name}</p>
      </div>
    </>
  );
};

const BackSkills = [
  {
    id: 1,
    name: "Node",
    icone: (
      <FontAwesomeIcon
        icon={faNodeJs}
        size="xl"
        style={{ color: "#699f63ff" }}
      />
    ),
  },
  {
    id: 2,
    name: "Express",
    icone: (
      <img
        src={logoExpress}
        alt="Logo Express Js"
        style={{ backgroundColor: "white" }}
        className="h-7 p-1 md:h-10"
      ></img>
    ),
  },
  {
    id: 3,
    name: "MySql",
    icone: <img src={logoMysql} alt="Logo MySql" className="h-8 md:h-10"></img>,
  },
  {
    id: 4,
    name: "Postman",
    icone: (
      <img src={logoPostman} alt="Logo Postman" className="h-8 md:h-10"></img>
    ),
  },
];
const BackItem = ({ back }) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <span>{back.icone}</span>
        <p className="md:text-md pl-2 text-base lg:text-xl">{back.name}</p>
      </div>
    </>
  );
};

const TransversalSkills = [
  {
    id: 1,
    name: "Travailler en équipe",
  },
  {
    id: 2,
    name: "Adaptabilité",
  },
  {
    id: 3,
    name: "Organisation des tâches de travail",
  },
  {
    id: 4,
    name: "Travail en autonomie",
  },
  {
    id: 5,
    name: "Empathie",
  },
];

const TransversalItem = ({ transversal }) => {
  return (
    <>
      <li className="md:text-md mb-2 list-disc text-base lg:text-xl md:w-100 w-70">
        {transversal.name}
      </li>
    </>
  );
};

const SkillsTab = () => {
  const [active, setActive] = useState("techniques");
  const buttonRefs = {
    techniques: useRef(null),
    transversales: useRef(null),
  };

  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const underline = () => {
    const activeButton = buttonRefs[active].current;
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    underline();
  }, [active]);

  useEffect(() => {
    underline();
    window.addEventListener("resize", underline);
    return () => {
      window.removeEventListener("resize", underline);
    };
  }, []);
  return (
    <>
      <div className="relative mb-5 flex justify-around">
        <button
          ref={buttonRefs.techniques}
          className={`cursor-pointer px-2 py-2 text-base transition-all duration-500 md:text-xl lg:text-2xl ${active === "techniques" ? " text-(--color-evergreen-400)" : "text-gray-400/50"}`}
          onClick={() => setActive("techniques")}
          aria-label="Afficher les compétences Techniques"
          aria-current={active === "techniques"}
        >
          Techniques
        </button>
        <button
          ref={buttonRefs.transversales}
          className={`cursor-pointer px-2 py-2 text-base transition-all duration-500 md:text-xl lg:text-2xl ${active === "transversales" ? " text-(--color-evergreen-400)" : "text-gray-400/50"}`}
          onClick={() => setActive("transversales")}
          aria-label="Afficher les compétences Transversales"
          aria-current={active === "transversales"}
        >
          Transversales
        </button>
        <motion.span
          className="absolute bottom-0 h-0.5 bg-(--color-evergreen-500)"
          initial={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
          animate={{
            x: underlineStyle.left,
            width: underlineStyle.width,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.5,
          }}
          style={{ boxShadow: "0px 0px 10px 2px #82b084" }}
        />
      </div>

      {active === "techniques" && (
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
        >
          <div id="techniques" className="flex justify-center mt-12 flex-col">
            <div className="mb-5 rounded-lg border-2 border-(--color-evergreen-600) p-4 inset-shadow-[0_0_12px_1px_var(--color-evergreen-600)] backdrop-blur-md">
              <h3 className="mb-8 underline underline-offset-10">
                Front End
              </h3>
              <div className="skills-grid">
                {FrontSkills.map((front) => (
                  <FrontItem key={front.id} front={front} />
                ))}
              </div>
            </div>
            <div className="mb-5 rounded-lg border-2 border-(--color-evergreen-600) p-4 inset-shadow-[0_0_12px_1px_var(--color-evergreen-600)] backdrop-blur-md">
              <h3 className="mb-8 underline underline-offset-10">
                Back End
              </h3>
              <div className="skills-grid">
                {BackSkills.map((back) => (
                  <BackItem key={back.id} back={back} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      )}

      {active === "transversales" && (
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
        >
          <div id="transversales" className="flex justify-center mt-12">
            <div className="rounded-lg border-2 border-(--color-evergreen-600) p-4 inset-shadow-[0_0_12px_1px_var(--color-evergreen-600)] backdrop-blur-md md:w-150">
              <h3 className="mb-8 underline underline-offset-10">
                Soft Skills
              </h3>
              <ul className="flex flex-col text-start items-center pl-4">
                {TransversalSkills.map((transversal) => (
                  <TransversalItem
                    key={transversal.id}
                    transversal={transversal}
                  />
                ))}
              </ul>
            </div>
          </div>
        </AnimatedContent>
      )}
    </>
  );
};

export default SkillsTab;
