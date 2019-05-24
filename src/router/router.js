import Vue from "vue";
import VueRouter from "vue-router";
import DocGenerator from "../components/DocGenerator.vue";
import DocPreview from "../components/DocPreview.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/preview/:id", component: DocPreview },
  { path: "/edit/:id", component: DocGenerator },
  { path: "/", component: HelloWorld }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
