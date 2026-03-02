import AnimatedContent from "../src/components/AnimatedContent";
import forEach from "/ForEach.png";
import bac from "/Bac.webp";
import cfpts from "/CFPTS.png";

const trainingsData = [
  {
    id: 1,
    image: forEach,
    alt: "logo de ForEach Academy",
    name: "Titre RNCP niveau 5, DWWM.",
    years: "2025",
    location: "ForEach Academy, Lille (59)",
    description: `Formation Développeur Web et Web Mobile,  Full Stack,
        apprentissage de Javascript et de son environnement (React, Node, Express...), 
        méthodologie de travail, Ux/Ui, conception de base de données (MySql, Postman), tests unitaires.`,
    link: "https://www.foreach-academy.fr/",
  },
  {
    id: 2,
    image: cfpts,
    alt: "logo du Centre National de Formation Professionnelles aux Techniques du Spectacle",
    name: "Titre RNCP niveau 5, Régisseur de scène/Régisseur Plateau.",
    years: "2017-2019",
    location:
      "(en alternance) CFPTS, Bagnolet (93) et Cité des Congrès, Nantes (44)",
    description: `Apprentissage du métier de régisseur de scène/plateau pour le spectacle vivant, 
    technique de machinerie, gestion de planning, gestion d'équipe, gestion des stocks et matériel de location, 
    accueil des compagnies et production.`,
    link: "https://www.cfpts.com/",
  },
  {
    id: 3,
    image: bac,
    alt: "photo du diplôme du baccalauréat",
    name: "Baccalauréat Littéraire/Théâtre",
    years: "2010-2013",
    location: "Rouen (76)",
    description: `Baccalauréat Littéraire avec spécialité Théâtre.`,
    link: "",
  },
];

const TrainingsItem = ({ training }) => {
  return (
    <>
      <div className="w-full rounded-(--card-radius) border-2 border-(--color-evergreen-600) p-(--card-padding) inset-shadow-[0_0_12px_1px_var(--color-evergreen-600)] backdrop-blur-md [--card-padding:--spacing(2)] [--card-radius:var(--radius-2xl)] lg:flex">
        <div className="h-auto flex-none overflow-hidden bg-cover text-center">
          <div className="flex h-full items-center justify-center border-b border-(--color-evergreen-600) pb-2 lg:border-none lg:pb-0">
            <div className="flex items-center rounded-(--card-radius) p-(--card-padding)">
              <img
                src={training.image}
                alt={training.alt}
                className="rounded-(--card-radius) bg-amber-50 object-contain p-(--card-padding) md:h-auto md:w-80 lg:h-60 lg:w-80 lg:p-0"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center p-4">
          <div className="mb-8">
            <p className="mb-3 flex align-text-top text-base">{training.years}</p>
            <p className="mb-4 text-base font-bold underline underline-offset-5 md:text-xl">
              {training.name}
            </p>
            <p className="text-sm lg:text-base">{training.description}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <p className="mb-3 leading-none">{training.location}</p>
              {training.link === "" ? (
                ""
              ) : (
                <a
                  href={training.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-evergreen-500) underline lg:text-(--clor-text) lg:hover:text-(--color-evergreen-500)"
                  aria-label={`Lien vers ${training.link} (nouvel onglet)`}
                >
                  {training.link}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TrainingsCards = () => {
  return (
    <>
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
        <div className="flex w-full flex-wrap justify-center gap-4 p-4">
          {trainingsData.map((training) => (
            <TrainingsItem key={training.id} training={training} />
          ))}
        </div>
      </AnimatedContent>
    </>
  );
};

export default TrainingsCards;
