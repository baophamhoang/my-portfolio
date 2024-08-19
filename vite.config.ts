import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
    },
  },
  resolve: {
    alias: {
      "@configs": pathResolve("src/configs"),
      "@components": pathResolve("src/components"),
      "@containers": pathResolve("src/containers"),
      "@layouts": pathResolve("src/layouts"),
      "@hooks": pathResolve("src/hooks"),
      src: pathResolve("src"),
    },
  },
  base: "/",
});
