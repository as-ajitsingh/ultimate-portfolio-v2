import Card from "@/components/cards/card";
import Carousel01 from "@/components/carousels/carousel-01";

const Projects = () => {
  const projects = [
    "Nodlex",
    "The Retro App",
    "Maps",
    "Bucketed",
    "Node",
    "Curlt",
  ];

  const projectCards = projects.map((title) => <Card key={title} title={title} />);

  return (
    <section
      id="projects"
      className="h-dvh content-center flex items-center justify-between"
    >
      <h1 className="text-heading-01-normal">
        Projects
        <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
      </h1>
      <div className="flex items-center justify-center">
        <Carousel01 cards={projectCards} />
      </div>
    </section>
  );
};

export default Projects;
