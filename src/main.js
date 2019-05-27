import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/router.js";
import apolloProvider from "./apollo/apollo.js";
Vue.config.productionTip = false;
Vue.config.ignoredElements = ["trix-editor"];

new Vue({
  router,
  render: h => h(App),
  provide: apolloProvider.provide()
}).$mount("#app");
