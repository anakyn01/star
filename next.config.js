/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

const repoName = 'star'; 

const nextConfig = {
  output: 'export',
  basePath: '/star',
  assetPrefix: '/star/',
  trailingSlash: true // optional but helps GitHub Pages with routing
};

export default nextConfig;
