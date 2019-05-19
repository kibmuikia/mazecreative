<template>
  <v-app class="sofia">
    <Navigation />
    <v-content class="">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    // HelloWorld
    Navigation,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
@font-face {
  font-family: sofia-pro;
  src: url("~@/assets/fonts/sofiapro-light.otf");
}
.sofia {
  font-family: sofia-pro, sans-serif !important;
}
</style>
