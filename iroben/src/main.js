import { createApp } from "vue";
import VueOnsen from "vue-onsenui";
import * as components from "vue-onsenui/esm/components";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import "../src/scss/foundation/font.scss";

if (VueOnsen.platform.isIPhoneX()) {
  document.documentElement.setAttribute("onsflag-iphonex-portrait", "");
  document.documentElement.setAttribute("onsflag-iphonex-landscape", "");
}

const app = createApp(App);

// Register all vue-onsenui components
Object.values(components).forEach(component => app.component(component.name, component));

app.use(VueOnsen);
app.use(router);
app.use(store);
app.mount('#app');

app.config.errorHandler = (err, vm, info) => {
  console.error(e.toString());
  return false;
}

