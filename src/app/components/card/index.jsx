export default function Card({ title }) {
  return (
    <div className="bg-primary-500 text-white w-60 h-80 p-4 relative flex items-end overflow-hidden">
      <div className="text-[7rem] text-primary-100 opacity-20 absolute top-2 right-[-1.5rem] font-bold">
        {title.slice(0, 2)}
      </div>
      <div className=''>
        <h2 className="text-heading-04-bold z-10 relative">{title}</h2>
        <p className="text-body-02-normal text-primary-100 mt-2 z-10 relative">
          This text paragraph contain body text, which could be description or
          subtititle.
        </p>
        <div className="mt-8 flex justify-between items-center bottom-4 w-full px-4 z-10">
          <i className="fab fa-github"></i>
          <i className="fas fa-desktop"></i>
          <i className="fas fa-video"></i>
        </div>
      </div>
    </div>
  );
}
