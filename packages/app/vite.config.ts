import react from "@vitejs/plugin-react-swc";
import {defineConfig, loadEnv} from "vite";
import relay from "vite-plugin-relay";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
	
  return {
    plugins: [react(), tsconfigPaths({projects: ["./tsconfig.app.json"]}), relay],
    server: {
      port: Number(env.PORT),
    },
    preview: {
      port: Number(env.PORT),
    },
    optimizeDeps: {
      exclude: ["@faker-js/faker"],
    },
  }
});
