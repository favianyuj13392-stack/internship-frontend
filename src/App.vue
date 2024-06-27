<template>
  <router-view></router-view>
  <loading
    v-if="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  
  </template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  name: "App",
  components: {
    Loading
  },
  
  computed: {
    isLoading() {
      return this.$keycloak == undefined;
    },
  },
  
};
</script>

<style></style>
