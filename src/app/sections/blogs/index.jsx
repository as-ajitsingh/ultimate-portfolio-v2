'use client';
import { getAllBlogs } from '@/app/services/blogs.service';
import Card4 from '@/components/cards/card-4/card-4';
import { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then(setBlogs).catch(console.error);
  }, []);

  return (
    <section id="blogs" className="h-dvh flex flex-col items-center justify-around relative">
      <h1 className="text-heading-01-normal sm:mt-35">
        Blogs
        <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
      </h1>
      <div className="w-full h-120 gap-8 flex flex-col sm:flex-row justify-center items-center relative bg-secondary-700 pb-8">
        <div className="hidden sm:grid grid-cols-3 gap-6 absolute top-[-3rem]">
          {blogs &&
            blogs.slice(0, 6).map((blog) => (
              <Card4
                key={blog.title}
                imageUrl={blog.enclosures[0].url}
                text={blog.title}
                date={blog.created}
                //   readTime={blog.readTime}
                //   tags={blog.tags.slice(0, 3).map((tag) => tag)}
                link={blog.link}
              />
            ))}
        </div>
        <div className="sm:hidden flex flex-col gap-4">
          {blogs &&
            blogs.slice(0, 3).map((blog) => (
              <Card4
                key={blog.title}
                imageUrl={blog.enclosures[0].url}
                text={blog.title}
                date={blog.created}
                //   readTime={blog.readTime}
                //   tags={blog.tags.slice(0, 3).map((tag) => tag)}
                link={blog.link}
              />
            ))}
        </div>
        <p className="self-end text-center">
          Want to read more blogs, navigate to my blogging site by clicking{' '}
          <a className="text-accent-300" target="_blank" href="https://blogs.ajitsingh.me">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Blogs;
