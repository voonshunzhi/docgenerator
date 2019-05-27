<template>
  <div>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <div id="liveData"></div>
  </div>
</template>

<script>
import { getDoc } from "../apollo/queries";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "DocLive",
  data() {
    return {
      content: "",
      sample: {
        name: "Barack Obama",
        invoiceNum: "123456",
        houseNumber: "123",
        street: "White House",
        amount: "USD 100"
      },
      mapping: {
        name: "Name",
        invoiceNum: "Invoice Number",
        houseNumber: "House Number",
        street: "Street",
        amount: "Amount"
      },
      isLoading: true,
      fullPage: true
    };
  },
  components: {
    Loading
  },
  created() {
    this.getLiveDoc();
  },
  methods: {
    getLiveDoc() {
      this.$apollo
        .query({
          query: getDoc(this.$route.params.id, "LIVE")
        })
        .then(data => {
          this.content = data.data.getDoc.content;
          console.log(this.content);
          this.putDataIntoTemplate(this.content);
          this.isLoading = false;
        });
    },
    putDataIntoTemplate(template) {
      for (let key in this.mapping) {
        template = template.replace(
          "[" + this.mapping[key] + "]",
          this.sample[key]
        );
      }
      let elem = document.getElementById("liveData");
      elem.innerHTML = template;
    }
  }
};
</script>

<style scoped>
</style>
