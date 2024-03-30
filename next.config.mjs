/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["portfolio-image-store.s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
