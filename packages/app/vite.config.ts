import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import relay from "vite-plugin-relay";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	plugins: [react(), tsconfigPaths({ projects: ["./tsconfig.app.json"] }), relay],
	optimizeDeps: {
		exclude: ["@faker-js/faker"],
	},
});
