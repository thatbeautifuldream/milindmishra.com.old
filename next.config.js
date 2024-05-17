/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/milindmishra_",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/mishramilind",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/thatbeautifuldream",
        permanent: true,
      },
      {
        source: "/resume",
        destination:
          "https://milindmishra.vercel.app/assets/resume/Milind_Kumar_Mishra_Resume_2024.pdf",
        permanent: true,
      },
    ];
  },
};

export default config;
