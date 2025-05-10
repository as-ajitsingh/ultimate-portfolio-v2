"use client";
import { useEffect, useState } from "react";
import Card from "../../card";

const Carousel01 = ({}) => {
  const projects = [
    "Nodlex",
    "The Retro App",
    "Maps",
    "Bucketed",
    "Node",
    "Curlt",
  ];

  const pageLength = 4;
  
  const projectPages = projects.reduce((pages, project, index) => {
    pages[Math.floor(index / pageLength)] =
      pages[Math.floor(index / pageLength)] ?? [];
    pages[Math.floor(index / pageLength)].push(project);
    return pages;
  }, new Array(Math.floor(projects.length / pageLength)).fill([]));

  const [selectPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const sliderDuration = 3_000;

    const sliderTimer = setInterval(() => {
      console.log(selectPage);
      setSelectedPage((selectPage) =>
        selectPage == projectPages.length - 1 ? 0 : selectPage + 1
      );
    }, sliderDuration);

    return () => clearInterval(sliderTimer);
  }, []);

  return (
    <>
      <div className="h-140 flex items-center relative bg-secondary-700 px-20 rounded-md">
        <div className="grid grid-cols-2 gap-6">
          {projectPages[selectPage].map((title, idx) => (
            <Card key={idx} title={title} />
          ))}
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          {projectPages.map((_, i) => (
            <div
              onClick={() => setSelectedPage(i)}
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === selectPage ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel01;
