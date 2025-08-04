/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL("https://avatar.iran.liara.run/public"),
            new URL("https://placehold.co/50"),
        ],
    },
};

export default nextConfig;
