import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const env = loadEnv(process.cwd(), "");
  return {
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 500,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              const vendors = [
                { match: "axios", name: "axios-vendor" },
                { match: "react-toastify", name: "react-toastify-vendor" },
              ];
              for (const { match, name } of vendors) {
                if (id.includes(match)) return name;
              }
              return "vendor";
            }
          },
        },
      },
    },
    server: {
      port: 3001,
      hmr: {
        overlay: true,
      },
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
        },
      },
    },
  };
});
