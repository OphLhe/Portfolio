import Threads from "../src/components/Threads";
import AnimatedContent from "../src/components/AnimatedContent";
import React from 'react'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="absolute inset-0 h-full w-full">
        <Threads
          color={[0.30980392156862746, 0.49019607843137253, 0.3176470588235294]}
          amplitude={1}
          distance={0.6}
          enableMouseInteraction={false}
        />
      </div>
      <main className="flex items-center justify-center">
        <AnimatedContent
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-4 text-center text-2xl font-bold md:text-4xl/12"
          distance={0}
          direction="vertical"
          reverse
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.5}
        >
          <h2>
            Développeuse web et web mobile créative, je transforme les idées en
            solutions digitales{" "}
            <span className="bg-(--color-evergreen-600) px-2">
              intuitives et performantes.
            </span>
          </h2>
        </AnimatedContent>
      </main>
    </div>
  );
};

export default Home;