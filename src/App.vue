<template>
  <v-app class="sofia">
    <Navigation />
    <v-content class="">
      <v-scale-transition origin="center center" mode="out-in">
        <router-view></router-view>
      </v-scale-transition>
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
.kibdot {
  color: #00e676;
  border-radius: 50%;
  font-weight: 700;
  font-size: 2rem;
}
</style>
