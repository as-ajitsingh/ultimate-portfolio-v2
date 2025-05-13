const AboutMe = () => {
  return (
    <section id="about" className="h-dvh content-center flex relative">
      <div
        id="background-rectangle"
        className="absolute top-[-10rem] inset-0 flex justify-center z-[-1]"
      >
        <div className="w-80 h-[50rem] flex justify-center items-start bg-secondary-700 pt-4">
          <img src="./down-arrow-big.svg" />
        </div>
      </div>
      <div className="relative z-10 mt-35 flex flex-col items-center gap-20">
        <h1 className="text-heading-01-normal">
          About Me
          <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
        </h1>
        <p className="text-primary-100 text-body-01-normal text-center">
          I’m into learning new tech, building cool tools, and pretending I have
          it all figured out in blog form. And yeah, that chatbot you see below?
          I built it (mostly to show off). Go ahead and interact with it—but
          please be nice, it’s still learning.
        </p>
        <img className="w-180" src="undermaintenance-chatbot.png" />
      </div>
    </section>
  );
};

export default AboutMe;
