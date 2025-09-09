/** @type {import("next").NextConfig} */
const config = {
  turbopack: {
    rules: {
      "*.utf8ans": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
  webpack: (config: {
    module: { rules: { test: RegExp; type: string }[] };
  }) => {
    config.module.rules.push({
      test: /\.utf8ans$/,
      type: "asset/source",
    });
    return config;
  },
};

export default config;
