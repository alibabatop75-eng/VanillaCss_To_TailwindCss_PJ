// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    host: true,
    hmr: {
      overlay: false  // Error overlay ကို disable လုပ်ထားတယ်
    }
  }
});