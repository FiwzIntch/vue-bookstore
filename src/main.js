import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { Icon } from "@iconify/vue2";
import Popover from "vue-js-popover";

Vue.use(Popover);
Vue.config.productionTip = false;
Vue.component("Icon", Icon);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
