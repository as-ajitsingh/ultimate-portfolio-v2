import CtaAvatar from "@/components/cta-avatar";

const Intro = () => {
  return (
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
      <CtaAvatar />
    </section>
  );
};

export default Intro;