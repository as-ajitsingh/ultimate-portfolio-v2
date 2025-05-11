import Intro from "./sections/intro";
import AboutMe from "./sections/about";
import Projects from "./sections/projects";
import Blogs from "./sections/blogs";
import Skills from "./sections/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Projects />
      <Blogs />
      <Skills />
    </>
  );
}
