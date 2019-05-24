<template>
  <div>
    <div id="data"></div>
  </div>
</template>

<script>
export default {
  name: "DocLive",
  data() {
    content: "";
    sample: {
      name: "Barack Obama";
      invoiceNum: "123456";
      houseNumber: "123";
      street: "White House";
      amount: "USD 100";
    }
  },
  created() {},
  methods: {
    getLiveDoc() {
      this.$apollo
        .query({
          query: getDoc(this.$route.params.id, "LIVE")
        })
        .then(data => {
          this.content = data.data.getDoc.content;
        });
    },
    putDataIntoTemplate() {}
  }
};
</script>

<style scoped>
</style>
