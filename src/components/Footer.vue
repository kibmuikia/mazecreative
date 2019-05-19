<template>
  <v-footer height="auto">
    <v-card flat tile class="text-xs-center">
      <v-card-text class="subheading">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="">
        &copy;{{ currentyear }} Muikia.A —
        <strong>Designed and Developed by Maze Creative</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footer-component",
  data() {
    return {
      currentyear: new Date().getFullYear()
      // icons: [
      //   "fab fa-facebook",
      //   "fab fa-twitter",
      //   "fab fa-google-plus",
      //   "fab fa-linkedin",
      //   "fab fa-instagram"
      // ]
    }; //end-return
  } //end-data
}; //end-export
</script>

<style scoped>
.kibdot {
  color: #00e676;
  border-radius: 50%;
}
</style>
