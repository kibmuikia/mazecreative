<template>
  <v-container class="about">
    <AboutSummary />
    <v-layout row wrap>
      <!-- <v-flex xs12 class="animated flipInX slow">
        <p>Summarized information about, Maze Creative</p>
      </v-flex> -->
    </v-layout>
    <Team />
  </v-container>
</template>

<script>
export default {
  name: "about-view",
  components: {
    Team: () => import("../components/Team"),
    AboutSummary: () => import("../components/AboutSummary")
  },
  data() {
    return {
      metaInfo: {
        title: "About Maze Media"
      }
    }; //end-return
  } //end-data
};
</script>

<style scoped></style>
