<template>
  <nav>
    <v-app-bar app flat color="custom_green">
      <v-toolbar-title>
        <v-avatar tile class="mr-5">
          <img src="../assets/logo.png" />
        </v-avatar>
        <span class="font-weight-light">Crazy</span>
        <span class="font-weight-bold">Ming</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text :ripple="false" tile :color="color" router :to="'/'">
          <span>Home</span>
        </v-btn>
        <v-btn text :ripple="false" tile :color="color" router :to="'work'">
          <span>Work</span>
        </v-btn>
        <v-btn text :ripple="false" tile :color="color" router :to="'about'">
          <span>About</span>
        </v-btn>
        <v-btn text :ripple="false" tile :color="color" router :to="'contact'">
          <span>Contact</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      color: "custom_brown",
      links: [
        { name: "Home", link: "/" },
        { name: "Work", link: "/work" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
