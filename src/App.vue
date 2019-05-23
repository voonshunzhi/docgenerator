<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Doc Generator</router-link>
      </li>
      <li>
        <router-link to="/preview/1">Preview</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
//import DocGenerator from "./components/DocGenerator.vue";

export default {
  name: "app"
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
