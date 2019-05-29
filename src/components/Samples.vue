<template>
  <v-layout
    row
    wrap
    justify-space-around
    class="pa-1 white animated fadeInUp slow"
  >
    <v-flex xs12 md12>
      <h6 class="title text-xs-center py-3">
        Delivered Products
        <span class="font-weight-thin font-italic">and</span> Samples
      </h6>
    </v-flex>
    <v-flex
      xs12
      md3
      v-for="(sample, index) in samples"
      :key="index"
      class="ma-1"
    >
      <v-card height="350px" style="overflow:hidden;">
        <v-img
          :src="sample.url"
          :lazy-src="lazyimage"
          height="200px"
          :alt="sample.title"
          class="kibpic"
          v-ripple
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular
                indeterminate
                color="green accent-3"
              ></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
        <v-card-title>
          <h5 class="title">
            {{ sample.title }}
          </h5>
        </v-card-title>
        <v-card-text>
          <p class="text-xs-center">
            {{ sample.description }}
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "samples-component",
  data() {
    return {
      samples: this.$store.getters.samples,
      lazyimage: this.$store.getters.lazyimage
    }; //end-return
  } //end-data
}; //end-export
</script>

<style scoped>
.kibpic {
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
.kibpic:hover {
  transform: scale(1.03);
}
</style>
