import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "natural-crown-0ac32f199f.strapiapp.com"],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
};

export default nextConfig;