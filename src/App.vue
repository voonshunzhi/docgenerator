<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { SAVE_DOC, QUERY } from "./apollo/queries";
export default {
  name: "app",
  methods: {}
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
