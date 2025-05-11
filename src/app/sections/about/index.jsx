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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus magna
          nunc vel sagittis quis. Ultrices elit augue cras in id. Iaculis quis
          orci montes, ultricies pretium non pharetra. Bibendum a hendrerit
          donec vitae molestie senectus amet.
        </p>
        <img className='w-180' src="undermaintenance-chatbot.png" />
      </div>
    </section>
  );
};

export default AboutMe;
