/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codeverse.vercel.app', // ✅ thay bằng domain thật của bạn nếu có
  generateRobotsTxt: true, // ✅ tạo robots.txt tự động
  sitemapSize: 5000, // giới hạn số URL mỗi sitemap con
};
