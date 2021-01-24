import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/style.min.css";
import { ModalPlugin, CardPlugin } from "bootstrap-vue";
Vue.use(ModalPlugin);
Vue.use(CardPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
