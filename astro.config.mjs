import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // Để tránh xung đột nếu bạn đã dùng @tailwind base trong file CSS
    }),
  ],
});
