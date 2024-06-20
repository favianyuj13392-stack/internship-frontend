import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/tailwind.scss";
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/assets/libs/@iconscout/unicons/css/line.css";



const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
