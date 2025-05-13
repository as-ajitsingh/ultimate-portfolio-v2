import Link from 'next/link';
import { FaGithub, FaVideo } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";


export default function Card({ name, description, github, link, video, opensource }) {
  return (
    <div className="bg-primary-500 text-secondary-500 w-60 h-80 p-4 relative flex items-end overflow-hidden">
      <div className="text-[7rem] text-primary-100 opacity-20 absolute top-0.5 right-[-1.5rem] font-bold">
        {name.slice(0, 2)}
      </div>
      <div className='flex flex-col'>
        <div className="">
          <h2 className="text-heading-04-bold z-10 relative">{name}</h2>
          <p className="text-body-02-normal text-primary-100 mt-2 z-10 relative">
          {description}
          </p>
          </div>
          <div className="mt-8 flex justify-between items-center bottom-4 w-full px-4 z-10">
            {github && <Link target='_blank' href={github} title="Open Github Repo" ><FaGithub /></Link>}
            {link && <Link target='_blank' href={link} title="Open project link"><GoBrowser /></Link>}
            {video && <Link target='_blank' href={video} title="Play project video"><FaVideo /></Link>}
          </div>
        </div>
    </div>
  );
}
