import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        // i live on the edge
        ignoreBuildErrors: true
    }
};

export default nextConfig;
