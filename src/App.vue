<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Doc Generator</router-link>
      </li>
      <li>
        <router-link to="/preview/1">Preview</router-link>
      </li>
      {{ getDoc}}
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { SAVE_DOC, QUERY } from "./apollo/queries";
export default {
  name: "app",
  data() {
    return {
      getDoc: {}
    };
  },
  apollo: {
    getDoc: QUERY
  },
  mounted() {
    console.log(SAVE_DOC);
  }
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
