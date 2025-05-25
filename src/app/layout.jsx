import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Head from 'next/head';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio | Ajit Singh',
  description: "Ajit Singh's Portfolio",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  const links = [
    { url: '#intro', text: 'intro' },
    { url: '#about', text: 'about' },
    { url: '#projects', text: 'projects' },
    { url: '#blogs', text: 'blogs' },
    { url: '#skills', text: 'skills' },
  ];

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar websiteTitle="Portfolio" links={links} />
        <section className="max-w-[75rem] mx-auto p-4">{children}</section>
        <section id="footer" className="h-100 bg-secondary-700 flex flex-col sm:flex-row items-center justify-evenly sm:justify-around">
          <div id="left" className="flex flex-col gap-1">
            <h1 className="flex text-3xl md:text-5xl justify-center md:justify-start">Contact</h1>
            <span className="block p-1 text-lg text-primary-100 font-normal w-72">
              Feel free to connect with me via any of these mediums.
            </span>
          </div>
          <div id="right" className="flex gap-16">
            <Link href="https://x.com/__azt" target="_blank" alt="Social Media Twitter">
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/as-ajitsingh" target="_blank" alt="Social Media GitHub">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/as-ajitsingh/" target="_blank" alt="Social Media LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
