'use client';
import { useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Carousel01 = ({ cards }) => {
  const pageLength = 4;
  const sliderDuration = 7_000;

  const sliderTimerRef = useRef();

  const [currentPage, setCurrentPage] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  const pages = cards.reduce(
    (pages, card, index) => {
      pages[Math.floor(index / pageLength)].push(card);
      return pages;
    },
    new Array(Math.floor(cards.length / pageLength)).fill(null).map(() => [])
  );

  useEffect(() => {
    if (!sliderPaused)
      sliderTimerRef.current = setInterval(() => {
        setCurrentPage((currentPage) => (currentPage == pages.length - 1 ? 0 : currentPage + 1));
      }, sliderDuration);

    return () => clearInterval(sliderTimerRef.current);
  }, [sliderPaused]);

  return (
    <div className="h-140 flex items-center relative bg-secondary-700 px-20">
      <div className="grid grid-cols-2 gap-6">
        {pages[currentPage].map((Card, i) => (
          <motion.div
            key={currentPage + '' + i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            {Card}
          </motion.div>
        ))}
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 items-center">
        <FaPlay
          onClick={() => setSliderPaused((sliderPaused) => !sliderPaused)}
          className={`w-3 h-3  ${sliderPaused ? 'text-primary-100' : 'text-accent-300'}`}
        />
        {pages.map((_, i) => (
          <div
            onClick={() => setCurrentPage(i)}
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentPage ? 'bg-accent-300' : 'bg-primary-100'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel01;
