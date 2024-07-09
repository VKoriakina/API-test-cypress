const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/api-tests/**/*.cy.js',
    baseUrl: "https://jsonplaceholder.typicode.com",
  },
});