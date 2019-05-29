<template>
  <v-container class="">
    <!-- . -->
    <v-layout row wrap class="kibsec1 animated fadeInUp">
      <v-flex xs12 md5 class="">
        <v-card flat>
          <v-card-title primary-title>
            <h1 class="font-weight-bold display-2 sofia">
              We are an Independent design agency,
              <span class="kibdot">.</span>
            </h1>
          </v-card-title>
          <v-card-text>
            <p>
              based in Nairobi Kenya, working with businesses big or small on
              brand, insight, digital, advertising or website projects.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              class="kibbtn text-lowercase pa-2 font-weight-bold"
              @click="navigateTo('about')"
              >About Us</v-btn
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
  name: "home-view",
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
  }, //end-data
  methods: {
    navigateTo(path) {
      this.$router.push({ name: path });
    }
  } //end-methods
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
