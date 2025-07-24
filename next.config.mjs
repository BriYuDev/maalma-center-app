/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL("https://avatar.iran.liara.run/public")],
    },
};

export default nextConfig;
