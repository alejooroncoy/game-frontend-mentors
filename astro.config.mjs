import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { BASE as base } from "./src/constants";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://alejooroncoy.github.io",
  base,
});
