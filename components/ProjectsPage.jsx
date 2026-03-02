import Threads from "../src/components/Threads";
import AnimatedContent from "../src/components/AnimatedContent";
import ProjectsCards from "./ProjectsCards";

const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-0 min-h-screen w-full pb-15">
        <Threads
          color={[0.30980392156862746, 0.49019607843137253, 0.3176470588235294]}
          amplitude={1}
          distance={0.6}
          enableMouseInteraction={false}
        />
      </div>
      <main className="mt-16 flex grow items-center justify-center pb-30">
        <AnimatedContent
          className="mx-auto w-full max-w-screen p-4 pt-15 pb-15 text-center text-xl font-bold md:pb-0 md:text-3xl/12 lg:w-1/2"
          distance={0}
          direction="vertical"
          reverse
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
        >
          <h2>Mes Projets</h2>
          <section className="mt-6">
            <ProjectsCards />
          </section>
        </AnimatedContent>
      </main>
    </div>
  );
};

export default ProjectsPage;
