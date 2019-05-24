<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="`/edit/${mongoObjectId()}`">Doc Generator</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { SAVE_DOC, QUERY } from "./apollo/queries";
export default {
  name: "app",
  methods: {
    mongoObjectId() {
      var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
      return (
        timestamp +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, function() {
            return ((Math.random() * 16) | 0).toString(16);
          })
          .toLowerCase()
      );
    }
  }
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
