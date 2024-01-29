

// Cypress configuration using defineConfig
const { defineConfig } = require("cypress");
// beforeEach hook to be executed before each test
// beforeEach(() => {

//   cy.clearAllCookies();

//   cy.clearAllLocalStorage();

//   cy.clearAllSessionStorage();

//   cy.log('cache and cookies cleared');


//   cy.reload();
// });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //chromeWebSecurity: false,  // Disable Chrome web security
    specPattern:['cypress/integration/examples/problem_user.js','cypress/integration/examples/Stander_user.js','cypress/integration/examples/locked_out_user.js'] // Set the pattern for test specs
  }
});
