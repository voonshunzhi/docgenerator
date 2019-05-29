<template>
  <router-link :to="`/edit/${mongoDbId()}`" target="_blank">Create Document</router-link>
</template>

<script>
var ObjectID = require("bson-objectid");
export default {
  name: "HelloWorld",
  methods: {
    mongoDbId: function() {
      return ObjectID();
    }
  }
};
</script>

<style>
</style>
