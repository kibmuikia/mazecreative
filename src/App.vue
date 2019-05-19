<template>
  <v-app id="mazecreative">
    <Navigation />
    <v-content class="">
      <v-container class="" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    // HelloWorld
    Navigation
  },
  data() {
    return {
      //
    };
  }
};
</script>
