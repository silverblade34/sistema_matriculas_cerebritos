import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importamos estilos
import './index.css'
// Importamos librerias iconos
import { OhVueIcon, addIcons } from "oh-vue-icons";

// Importamos los iconos que usaremos
import {iconos} from './iconos'
addIcons(...iconos);
// Inicializamos el app
const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router).use(store).mount('#app')