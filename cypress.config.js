
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  video: true,
  screenshotOnRunFailure: true
});
