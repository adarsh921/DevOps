// import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
console.log("vitest config loaded");

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
