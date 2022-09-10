/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com'],
    },
};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    ...nextConfig,
});
