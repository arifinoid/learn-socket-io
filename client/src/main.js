import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Vue from "vue";
import Vuetify from "vuetify";
import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.use(Vuetify);
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:8500"
  })
);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
