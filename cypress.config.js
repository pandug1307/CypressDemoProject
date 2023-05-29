const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here,
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://168.61.189.83/#/login",
    chromeWebSecurity : true,
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 240000,
    screenshotOnRunFailure : true,
    trashAssetsBeforeRuns: true,
    video: true,
    viewportHeight:1080,
    viewportwidth:1920,
  }
  
});
