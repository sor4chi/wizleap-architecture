import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import "@wizleap-inc/wiz-ui-next/dist/style.css";

import { setupWorker } from "msw";
import { handlers as ExpertProfileHandlers } from "./infrastructure/expert/profile/mock";

if (import.meta.env.DEV) {
  const worker = setupWorker(...ExpertProfileHandlers);
  worker.start();
}

const app = createApp(App);
app.use(router);
app.mount("#app");
