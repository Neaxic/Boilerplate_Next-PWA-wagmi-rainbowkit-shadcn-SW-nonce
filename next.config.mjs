/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        config.externals.push('pino-pretty', /* add any other modules that might be causing the error */);
        return config;
    },
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'X-Content-Type-Options',
    //                     value: 'nosniff',
    //                 },
    //                 {
    //                     key: 'X-Frame-Options',
    //                     value: 'DENY',
    //                 },
    //                 {
    //                     key: 'Referrer-Policy',
    //                     value: 'strict-origin-when-cross-origin',
    //                 },
    //             ],
    //         },
    //         {
    //             source: '/sw.js',
    //             headers: [
    //                 {
    //                     key: 'Content-Type',
    //                     value: 'application/javascript; charset=utf-8',
    //                 },
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'no-cache, no-store, must-revalidate',
    //                 },
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: "default-src 'self'; script-src 'self'",
    //                 },
    //             ],
    //         },
    //     ]
    // },
};

export default nextConfig;
