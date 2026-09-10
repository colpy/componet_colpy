import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "UIKit",
      fileName: (format) => `ui-kit.${format}.js`
    },
    rollupOptions: { external: ["react", "react-dom"] }
  }
});
