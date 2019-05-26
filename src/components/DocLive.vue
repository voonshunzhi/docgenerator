<template>
  <div>
    <div id="liveData"></div>
  </div>
</template>

<script>
import { getDoc } from "../apollo/queries";
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
      }
    };
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
          alert("Done fetching!");
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
