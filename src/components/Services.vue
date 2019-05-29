<template>
  <v-layout row wrap class="white px-1 animated fadeInUp">
    <v-flex xs12 md3>
      <h2 class="display-1 sofia font-weight-bold pt-3 animated pulse delay-1s">
        Our services
        <span class="kibdot">.</span>
      </h2>
    </v-flex>
    <v-flex xs12 md3 v-for="service in services" :key="service.title">
      <v-card flat>
        <v-card-title>
          <h3 class="headline font-weight-bold sofia kibspace">
            <vue-typer
              :text="service.title"
              caret-animation="smooth"
              :type-delay="250"
              :repeat="3"
              erase-style="backspace"
            ></vue-typer>
          </h3>
        </v-card-title>
        <v-card-text>
          <p class="animated pulse delay-1s">
            {{ service.info }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn flat class="kibbtn2" @click="showMore(service.title)"
            >More</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- . -->
    <div v-show="more.show">
      <More :id="more.id" />
    </div>
    <!-- . -->
  </v-layout>
</template>

<script>
import { serverBus } from "@/main";
import { VueTyper } from "vue-typer";

export default {
  name: "services-component",
  components: {
    More: () => import("@/components/More"),
    VueTyper
  }, //end-components
  data() {
    return {
      services: this.$store.getters.services,
      more: {
        show: false,
        id: ""
      }
    }; //end-return
  }, //end-data
  mounted() {
    serverBus.$on("resetMore", () => {
      this.more.show = false;
    });
  }, //end-mounted
  methods: {
    showMore(serviceid) {
      this.more.id = serviceid;
      this.more.show = true;
      serverBus.$emit("setMore");
    }
  } //end-methods
}; //end-export
</script>

<style scoped>
.kibspace {
  letter-spacing: 2px !important;
}
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
