import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer
        className="fixed bottom-0 z-50 h-auto w-full border-t border-(--color-evergreen-700) p-4"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
          {/* copyright */}
          <div className="order-2 w-full text-center text-sm md:order-1">
            <span className="text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Ophélie LHERMITTE. Tous droits
              réservés.
            </span>
          </div>
          {/* social media */}
          <div className="order-1 mb-4 flex flex-col items-center justify-center gap-3 md:order-2 md:mb-0 md:flex-row">
            <a
              href="https://www.linkedin.com/in/oph%C3%A9lie-lhermitte-846931154/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn d'Ophélie Lhermitte (nouvel onglet)"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="social text-2xl"
              />
            </a>
            <a
              href="https://github.com/OphLhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub d'Ophélie Lhermitte (nouvel onglet)"
            >
              <FontAwesomeIcon icon={faGithub} className="social text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
