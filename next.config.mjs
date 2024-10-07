/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,
    images : {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "i.imghippo.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**",
            },

            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**",
            },

        ]
       
    }
};

export default nextConfig;
