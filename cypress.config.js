const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http:https://taxquarterly.com/",
    supportFile: "cypress/support/e2e.js",
    screenshotOnRunFailure: true,
    video: false,
    specPattern: "cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      // 🔥 THIS LINE IS REQUIRED
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "index",
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  screenshotsFolder: "cypress/screenshots",
});
