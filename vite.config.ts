import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": pathResolve("src/components"),
      "@containers": pathResolve("src/containers"),
      "@layouts": pathResolve("src/layouts"),
      src: pathResolve("src"),
    },
  },
  base: "/",
});
