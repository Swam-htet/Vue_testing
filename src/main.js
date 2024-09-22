import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import AboutPage from "./views/About.vue";
import HomePage from "./views/Home.vue";

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = (Vue.router = new VueRouter({
  mode: "history",
  routes,
}));

console.log(router);
console.log(Vue.router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
