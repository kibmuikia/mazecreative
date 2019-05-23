<template>
  <v-container class="about">
    <v-layout row wrap>
      <v-flex xs12>
        <p>Summarized information about, Maze Creative</p>
      </v-flex>
    </v-layout>
    <Team />
  </v-container>
</template>

<script>
export default {
  name: "about-view",
  components: {
    Team: () => import("../components/Team")
  },
  data() {
    return {
      // .
    }; //end-return
  } //end-data
};
</script>

<style scoped></style>
