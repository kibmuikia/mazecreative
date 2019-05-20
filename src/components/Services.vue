<template>
  <v-layout row wrap>
    <v-flex xs12 md3>
      <h2 class="display-1 font-weight-bold pt-3">
        Our services
        <span class="kibdot">.</span>
      </h2>
    </v-flex>
    <v-flex xs12 md3 v-for="service in services" :key="service.title">
      <v-card flat>
        <v-card-title>
          <h3 class="headline font-weight-bold">
            {{ service.title }}
          </h3>
        </v-card-title>
        <v-card-text>
          <p>
            {{ service.info }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn flat class="kibbtn2">More</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "services-component",
  data() {
    return {
      services: this.$store.getters.services
    }; //end-return
  } //end-data
}; //end-export
</script>

<style scoped>
/*.kibdot {
  color: #00e676;
  border-radius: 50%;
}*/
.kibbtn2 {
  /*border-bottom: 2px solid #00e676;*/
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
.kibbtn2:hover {
  background-color: #66ffa6;
}
.kibbtn2::after {
  background-color: #00e676;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0);
  width: 50%;
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
.kibbtn2:hover::after {
  width: 90%;
  height: 4px;
  background-color: #66ffa6;
}
</style>
