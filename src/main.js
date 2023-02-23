import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.scss";

import PrimeVue from 'primevue/config';
import DialogService from 'primevue/dialogservice';

const app = createApp(App);

app.use(PrimeVue);
app.use(DialogService);
app.mount("#app")
