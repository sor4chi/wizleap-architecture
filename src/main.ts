import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import "@wizleap-inc/wiz-ui-next/dist/style.css";

if (import.meta.env.DEV) {
  const { setupWorker } = await import("msw");
  const { handlers: ExpertProfileHandlers } = await import(
    "./infrastructure/expert/profile/mock"
  );
  const worker = setupWorker(...ExpertProfileHandlers);
  worker.start();
}

const app = createApp(App);
app.use(router);
app.mount("#app");
