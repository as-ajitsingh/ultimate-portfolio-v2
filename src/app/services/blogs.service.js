const { parse } = require('rss-to-json');

export const getAllBlogs = async () => {
  const rssUrl = 'https://blogs.ajitsingh.me/rss.xml';
  var rss = await parse(rssUrl);
  return rss.items;
};
