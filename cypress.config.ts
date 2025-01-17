import {defineConfig} from "cypress";

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://alpha-app.master-z.de/',
    setupNodeEvents(on, config)
    {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    supportFile: "cypress/support/index.ts",
    experimentalInteractiveRunEvents: true,
  },
});
