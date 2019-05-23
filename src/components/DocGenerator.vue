<template>
  <div class="container">
    <h1>Button</h1>
    <button class="preview">Preview</button>
    <trix-editor></trix-editor>
  </div>
</template>

<script>
export default {
  name: "DocGenerator",
  created: function() {
    let scriptTag = document.createElement("script");
    let scriptTagTrix = document.createElement("script");
    scriptTagTrix.setAttribute("src", process.env.BASE_URL + "js/trix.js");
    scriptTag.setAttribute("src", process.env.BASE_URL + "js/DocGenerator.js");
    document.head.appendChild(scriptTagTrix);
    document.head.appendChild(scriptTag);
  }
};
</script>

<style scoped>
@import "../assets/css/trix.css";
.container {
  height: 100%;
}
</style>

