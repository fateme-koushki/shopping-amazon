/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,
    images : {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "www.googleapis.com",
                pathname: "**",
            }
           

        ]
       
    }
};

export default nextConfig;
