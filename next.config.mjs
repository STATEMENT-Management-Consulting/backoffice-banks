/** @type {import('next').NextConfig} */

import nextTranslate from "next-translate-plugin";

const i18n = nextTranslate();

const nextConfig = {
  reactStrictMode: true,
  ...i18n,
};

export default nextConfig;
