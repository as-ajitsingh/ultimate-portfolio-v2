import CtaAvatar from "./components/cta-avatar";
import Carousel01 from "./components/carousels/carousel-01";
import Card4 from "./components/cards/card-4/card-4";
import skills from "./data/skills";
import TileWithIcon from "./components/tile-with-icon";


export default function Home() {
  const blogs = [
    {
      id: 1,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
    {
      id: 2,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions and be super awesome and awesome",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
    {
      id: 3,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
    {
      id: 4,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
    {
      id: 5,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
    {
      id: 6,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
    {
      id: 7,
      imageUrl:
        "https://storage.googleapis.com/ultimate-portfolio-v2.appspot.com/blogs/2023/10/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      text: "How to ask better questions",
      date: "10/05/2025",
      readTime: "7",
      tags: ["html5", "chatgpt", "ai"],
      link: "https://blogs.ajitsingh.me/posts/make-your-chatgpt-query-more-efficient/",
    },
  ];

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
        <CtaAvatar />
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
          <img src="chatbot.png" />
        </div>
      </section>
      <section
        id="projects"
        className="h-dvh content-center flex items-center justify-between"
      >
        <h1 className="text-heading-01-normal">
          Projects
          <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
        </h1>
        <div className="flex items-center justify-center">
          <Carousel01 />
        </div>
      </section>
      <section
        id="blogs"
        className="h-dvh flex flex-col items-center justify-around relative"
      >
        <h1 className="text-heading-01-normal mt-35">
          Blogs
          <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
        </h1>
        <div className="w-full h-120 flex justify-center relative bg-secondary-700 pb-8">
          <div className="grid grid-cols-3 gap-6 absolute top-[-3rem]">
            {blogs.slice(0, 6).map((blog) => (
              <Card4
                key={blog.id}
                imageUrl={blog.imageUrl}
                text={blog.text}
                date={blog.date}
                readTime={blog.readTime}
                tags={blog.tags.slice(0, 3).map((tag) => tag)}
                link={blog.link}
              />
            ))}
          </div>
          <p className="self-end">
            Want to read more blogs, navigate to my blogging site by clicking{" "}
            <a
              className="text-accent-300"
              target="_blank"
              href="https://blogs.ajitsingh.me"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>
      <section
        id="skills"
        className="h-dvh flex flex-col items-center relative gap-56"
      >
        <h1 className="text-heading-01-normal mt-35">
          Skills
          <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
        </h1>
        <div className="flex justify-center flex-wrap gap-8  pb-8">
          {skills.map((skill) => (
            <TileWithIcon
              key={skill.title}
              text={skill.title}
              icon={skill.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}
