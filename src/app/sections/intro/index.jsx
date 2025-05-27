import CtaAvatar from '@/components/cta-avatar';

const Intro = () => {
  return (
    <section
      id="intro"
      className="h-dvh sm:content-center flex flex-col-reverse gap-16 sm:gap-0 sm:flex-row items-center justify-center sm:justify-between"
    >
      <div id="left" className="flex flex-col">
        <p className="hidden sm:block text-left text-display-02-normal sm:w-[40rem]">
          Hi, My name is Ajit and I am a Software Developer.
        </p>
        <p className="sm:hidden text-heading-02-normal text-center">
          Hi, My name is Ajit and I am a Software Developer.
        </p>
        <p className="text-body-01-normal text-center sm:text-left text-primary-100 mt-5">
          want to know more,{' '}
          <a href="#about" className="text-accent-300">
            scroll
          </a>
          .
        </p>
      </div>
      <CtaAvatar />
    </section>
  );
};

export default Intro;
