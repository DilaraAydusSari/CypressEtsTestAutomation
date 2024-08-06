const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "1eh951",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
