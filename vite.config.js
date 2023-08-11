import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/qr-code",
=======
  base: "/qr-code/",
>>>>>>> 1ea4aaf57e9b6e7bee6173b477646f0ff59c0484
  plugins: [react()],
});
