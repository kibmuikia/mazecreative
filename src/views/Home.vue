<template>
  <v-container class="">
    <!-- . -->
    <v-layout row wrap class="kibsec1">
      <v-flex xs12 md5 class="">
        <v-card flat>
          <v-card-title primary-title>
            <h1 class="font-weight-bold display-2 sofia">
              Tempor incididunt ut labore et dolore magna aliqua
              <span class="kibdot">.</span>
            </h1>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat class="kibbtn text-lowercase pa-2 font-weight-bold"
              >link one</v-btn
            >
            <v-btn flat class="kibbtn text-lowercase pa-2 font-weight-bold"
              >link two</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- . -->
    <Services />
    <!-- . -->
    <Samples />
    <!-- . -->
  </v-container>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  components: {
    // HelloWorld
    // Tooltip: () => import("./Tooltip")
    Services: () => import("../components/Services"),
    Samples: () => import("../components/Samples")
  },
  data() {
    return {
      // .
    }; //end-return
  } //end-data
};
</script>

<style scoped>
.kibdot {
  color: #00e676;
  border-radius: 50%;
}
.kibbtn {
  background-color: white;
  border: 2px solid #00e676;
  border-radius: 20px;
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
.kibbtn:hover {
  background-color: #66ffa6;
}
/*global-brand-illustration-opt.png*/
.kibsec1 {
  background-image: url("~@/assets/images/global-brand-illustration-opt.png");
  background-position: right center;
  background-size: cover;
}
</style>
