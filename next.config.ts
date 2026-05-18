import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      },
      {
        protocol: 'https',
        hostname: 'images.rawpixel.com'
      }
    ]
  }
};

export default withFlowbiteReact(nextConfig);