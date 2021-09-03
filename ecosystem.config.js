module.exports = {
  apps: [
    {
      name: "resiliencia-back",
      script: "./index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
