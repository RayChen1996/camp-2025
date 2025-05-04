import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/aos.client.ts", mode: "client" }],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "@/assets/css/fonts.css", "aos/dist/aos.css"],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
});
