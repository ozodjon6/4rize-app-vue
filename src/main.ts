import "@/style.css";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import App from "./App.vue";

import i18n from "@/plugins/i18n.ts";

const app = createApp(App);
registerPlugins(app);
app.mount("#app");
app.use(i18n);
