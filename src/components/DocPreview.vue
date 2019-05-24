<template>
  <div>
    <div id="data"></div>
  </div>
</template>

<script>
import data from "../data/data.json";
export default {
  name: "DocPreview",
  created: function() {
    this.data = data.templates.filter(
      element => element.id === this.$route.params.id
    )[0].content;
  },
  mounted() {
    let element = document.getElementById("data");
    element.innerHTML = this.data;
  },
  data() {
    return {
      data: null
    };
  }
};
</script>

<style scoped>
</style>
