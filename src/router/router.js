import Vue from "vue";
import VueRouter from "vue-router";
import DocGenerator from "../components/DocGenerator.vue";
import DocPreview from "../components/DocPreview.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/preview/:id", component: DocPreview },
  { path: "/", component: DocGenerator }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
