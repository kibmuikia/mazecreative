import Vue from "vue";
import "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

export const serverBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
