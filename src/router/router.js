import Vue from "vue";
import VueRouter from "vue-router";
import DocGenerator from "../components/DocGenerator.vue";
import DocPreview from "../components/DocPreview.vue";
import DocLive from "../components/DocLive.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/preview/:id", component: DocPreview, name: "preview" },
  { path: "/edit/:id", component: DocGenerator, name: "edit" },
  { path: "/publish/:id", component: DocLive, name: "publish" },
  { path: "/", component: HelloWorld, name: "default" }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
