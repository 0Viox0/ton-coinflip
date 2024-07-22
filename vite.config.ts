import { defineConfig } from "vite";
***REMOVED***act from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), nodePolyfills()],
});
