<template>
  <v-app>
    <!-- <NavBar />
    <router-view /> -->
    <Home />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    // NavBar
    Home
  },

  data: () => ({})
};
</script>

<style lang="scss"></style>
