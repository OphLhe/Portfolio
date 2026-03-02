import { useRef, useState } from "react";
import logo from "/logoPortfolio.png";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  return (
    <>
      <header>
        <nav
          aria-label="Navigation principale"
          className="fixed top-0 z-50 flex h-16 w-full items-center justify-between p-4"
          style={{ backgroundColor: "var(--footer-bg)" }}
        >
          {/* Logo et Titre */}
          <div className="mx-auto flex w-full flex-row items-center justify-between">
            <NavLink id="logoTitle" to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo portfolio de Ophélie Lhermitte"
                className="h-12 w-12 rounded-full"
              />
              <h1 className="text-base font-bold md:text-xl lg:text-xl">
                Ophélie LHERMITTE
              </h1>
            </NavLink>
            {/* Menu Small screen */}
            <button
              ref={menuButtonRef}
              className="flex flex-col gap-1.5 p-1 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Ouvrir/Fermer le menu"
              aria-expanded={isOpen}
              aria-controls="menu-mobile"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              )}
            </button>
          </div>

          {/* Menu Large screen */}
          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-6 text-lg font-medium">
              <li className="relative inline-flex rounded-lg px-3 py-1 text-base">
                <NavLink
                  id="accueil"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "linksLargeScreen active" : "linksLargeScreen"
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li className="relative inline-flex rounded-lg px-3 py-1 text-base">
                <NavLink
                  id="projets"
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "linksLargeScreen active" : "linksLargeScreen"
                  }
                >
                  Projets
                </NavLink>
              </li>
              <li className="relative inline-flex rounded-lg px-3 py-1 text-base">
                <NavLink
                  id="formations"
                  to="/trainings"
                  className={({ isActive }) =>
                    isActive ? "linksLargeScreen active" : "linksLargeScreen"
                  }
                >
                  Formations
                </NavLink>
              </li>
              <li className="relative inline-flex rounded-lg px-3 py-1 text-base">
                <NavLink
                  id="compétences"
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? "linksLargeScreen active" : "linksLargeScreen"
                  }
                >
                  Compétences
                </NavLink>
              </li>
              <li className="relative inline-flex rounded-lg px-3 py-1 text-base">
                <NavLink
                  id="cv et contact"
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "linksLargeScreen active" : "linksLargeScreen"
                  }
                >
                  CV/Contact
                </NavLink>
              </li>
              <DarkMode />
            </ul>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/oph%C3%A9lie-lhermitte-846931154/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn d'Ophélie Lhermitte (nouvel onglet)"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="social text-2xl"
                  alt="Logo Linkedin"
                />
              </a>
              <a
                href="https://github.com/OphLhe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn d'Ophélie Lhermitte (nouvel onglet)"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social text-2xl"
                  alt="Logo GitHub"
                />
              </a>
            </div>
          </div>

          {/* Menu Mobile */}

          <div
            className={`absolute top-16 left-0 w-full transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
            style={{ backgroundColor: "var(--footer-bg)" }}
          >
            <ul
              id="menu-mobile"
              className="flex flex-col items-center justify-center gap-4 py-3 text-center"
            >
              <li className="block w-full text-base md:text-xl">
                <NavLink
                  id="accueil"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "linksSmallScreen active" : "linksSmallScreen"
                  }
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="block w-full text-base md:text-xl">
                <NavLink
                  id="projets"
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "linksSmallScreen active" : "linksSmallScreen"
                  }
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  Projets
                </NavLink>
              </li>
              <li className="block w-full text-base md:text-xl">
                <NavLink
                  id="formation"
                  to="/trainings"
                  className={({ isActive }) =>
                    isActive ? "linksSmallScreen active" : "linksSmallScreen"
                  }
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  Formations
                </NavLink>
              </li>
              <li className="block w-full text-base md:text-xl">
                <NavLink
                  id="compétences"
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? "linksSmallScreen active" : "linksSmallScreen"
                  }
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  Compétences
                </NavLink>
              </li>
              <li className="relative inline-flex rounded-lg px-3 py-1 text-base">
                <NavLink
                  id="cv et contact"
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "linksSmallScreen active" : "linksSmallScreen"
                  }
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  CV/Contact
                </NavLink>
              </li>

              <DarkMode
                onClick={() => {
                  setIsOpen(false);
                  menuButtonRef.current.focus();
                }}
              />

              <li>
                <a
                  href="https://www.linkedin.com/in/oph%C3%A9lie-lhermitte-846931154/"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn d'Ophélie Lhermitte (nouvel onglet)"
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2xl"
                    className="social"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/OphLhe"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub d'Ophélie Lhermitte (nouvel onglet)"
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current.focus();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2xl"
                    className="social"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
