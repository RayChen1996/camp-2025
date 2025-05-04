import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  onMounted(() => {
    console.log("AOS initialized");
    AOS.init({
      // 你可以根據需要自定義這些設定
      duration: 800,
      once: false,
    });
  });
});
