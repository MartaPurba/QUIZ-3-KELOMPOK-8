const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },

  env: {
    baseUrl: "https://magento.softwaretestingboard.com/",
  },

  defaultCommandTimeout: 10000,
  viewportWidth: 990,
  viewportHeight: 650,
});
