'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../logo/logo';

const Navbar = ({ websiteTitle, links }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getCurrentScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      return scrolled;
    };

    setProgress(getCurrentScrollProgress());

    const updateScrollProgress = () => {
      setProgress(getCurrentScrollProgress());
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const link = document.querySelector(`.nav-link[data-section="${id}"]`);

          if (entry.isIntersecting) {
            navLinks.forEach((el) => el.classList.remove('text-primary-500'));
            link?.classList.add('text-primary-500');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className="flex items-center justify-between h-20 w-full md:px-32 px-4 fixed bg-white z-999"
        style={{ borderBottom: 0 }}
      >
        <Link href="/">
          <span className="flex items-center space-x-4">
            <Logo />
            <span className="text-2xl border-primary-500 dark:border-secondary-500 border-l-2 pl-4">
              {websiteTitle}
            </span>
          </span>
        </Link>
        <div className="flex gap-12">
          {links.map((link) => (
            <Link
              data-section={link.text}
              key={link.text}
              className="nav-link uppercase text-primary-100 hover:text-primary-300"
              href={link.url}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
      <div className="fixed w-full h-10 mt-20 z-999 flex justify-center">
        <div
          className="bottom-0 left-1/2 h-0.5 bg-primary-500 transform transition-all duration-100 ease-linear "
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default Navbar;
