<template>
  <router-link :to="`/edit/${mongoDbId()}`" target="_blank">Create Document</router-link>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    mongoDbId: function() {
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
</style>
