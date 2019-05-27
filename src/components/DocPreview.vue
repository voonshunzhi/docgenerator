<template>
  <div>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <div id="data"></div>
  </div>
</template>

<script>
import { getDoc } from "../apollo/queries";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "DocPreview",
  data() {
    return {
      previewContent: "",
      isLoading: true,
      fullPage: true
    };
  },
  components: {
    Loading
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
        this.isLoading = false;
      });
  }
};
</script>

<style scoped>
</style>
