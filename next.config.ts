import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images:{
    remotePatterns:[

      {
        protocol:"https",
        hostname:"cdn.dummyjson.com",
      },
      {
        protocol:"https",
        hostname:"avatars.githubusercontent.com",
      },
       {
        protocol:"https",
        hostname:"Ih3.googleusercontent.com",
      },
       {
        protocol:"https",
        hostname:"i.ibb.co.com",
      },

    ]
   }

};

export default nextConfig;
