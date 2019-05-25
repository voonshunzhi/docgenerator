<template>
  <div>
    <div id="data"></div>
  </div>
</template>

<script>
import { getDoc } from "../apollo/queries";
export default {
  name: "DocPreview",
  data() {
    return {
      previewContent: ""
    };
  },
  created: function() {
    this.$apollo
      .query({
        query: getDoc(this.$route.params.id, "PREVIEW")
      })
      .then(data => {
        this.previewContent = data.data.getDoc.content;
        let element = document.getElementById("data");
        element.innerHTML = this.previewContent;
        console.log(this.previewContent);
      });
  }
};
</script>

<style scoped>
</style>
