import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="intro"
        className="h-dvh content-center flex items-center justify-between"
      >
        <div id="left">
          <p className="text-display-02-normal w-[40rem]">
            Hi, My name is Ajit and I am a Software Developer.
          </p>
          <p className="text-body-01-normal text-primary-100 mt-5">
            want to know more, <a className="text-accent-300">scroll</a>.
          </p>
        </div>
        <div id="right">
          <img src="./cta-avatar.png" />
        </div>
      </section>
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
          <h1 className="text-heading-01-normal">About Me</h1>
          <p className="text-primary-100 text-body-01-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus magna
            nunc vel sagittis quis. Ultrices elit augue cras in id. Iaculis quis
            orci montes, ultricies pretium non pharetra. Bibendum a hendrerit
            donec vitae molestie senectus amet.
          </p>
          <img src="chatbot.png" />
        </div>
      </section>
      <section
        id="projects"
        className="h-dvh content-center flex items-center justify-between"
      ></section>
      <section
        id="blogs"
        className="h-dvh content-center flex relative"
      ></section>
      <section
        id="skills"
        className="h-dvh content-center flex items-center justify-between"
      ></section>
    </>
  );
}
