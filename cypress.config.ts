import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    env: {
      PASSWORD: process.env.PASSWORD,
      STANDARD_USER: process.env.STANDARD_USER,
      LOCKED_OUT_USER: process.env.LOCKED_OUT_USER,
      PROBLEM_USER: process.env.PROBLEM_USER,
      ERROR_USER: process.env.ERROR_USER,
    },    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
