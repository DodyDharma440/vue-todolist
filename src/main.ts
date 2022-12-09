import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiCheck, HiTrash } from "oh-vue-icons/icons";
import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index.css";

addIcons(HiCheck, HiTrash);
const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");
