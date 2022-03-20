const { parse } = require('rss-to-json');

export const getAllBlogs = async () => {
    const rssUrl = process.env.NODE_ENV === 'production' ? 'https://blogs.ajitsingh.me/rss.xml' : 'http://localhost:3000/rss.xml';
    var rss = await parse(rssUrl);
    return rss.items;
}