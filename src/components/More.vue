<template>
  <v-dialog v-model="showMain" scrollable>
    <v-card>
      <v-card-title>
        <h3 class="sofia headline text-uppercase">
          {{ id }}
        </h3>
      </v-card-title>
      <v-card-text v-if="filteredservice">
        <v-carousel
          hide-controls
          light
          height="370"
          class=""
          style="background: url('@/assets/images/bg1.svg')"
        >
          <v-carousel-item
            v-for="(sub, index) in filteredservice.subservices"
            :key="index"
            class=""
            :src="carouselbg"
            style="position:relative;"
          >
            <v-card
              width="90%"
              min-height="70%"
              height="auto"
              class=""
              style="position:absolute; left:5%; top:5%;background: rgba(255,255,255,0.7);"
            >
              <v-card-text>
                <div>
                  <div>
                    <p class="sofia title text-xs-center">
                      {{ sub.title }}
                    </p>
                  </div>
                  <v-divider></v-divider>
                  <div class="sofia subheading mt-1">
                    {{ sub.description }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <!-- <v-layout row wrap justify-space-around align-center>
          <v-flex
            xs12
            md4
            v-for="(sub, index) in filteredservice.subservices"
            :key="index"
            class="ma-2"
          >
            <v-card>
              <v-card-text>
                <div>
                  <div class="sofia title text-xs-center">
                    {{ sub.title }}
                  </div>
                  <v-divider></v-divider>
                  <div class="sofia subheading mt-1">
                    {{ sub.description }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout> -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green accent-4" flat @click="closeMore()"
          >Done Viewing</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { serverBus } from "@/main";

export default {
  name: "more-component",
  props: {
    id: {
      type: String,
      required: true
    }
  }, //end-props
  data() {
    return {
      showMain: false,
      services: this.$store.getters.services,
      filteredservice: null,
      carouselbg: require("@/assets/images/bg1.svg")
    }; //end-return
  }, //end-data
  methods: {
    closeMore() {
      this.showMain = false;
      serverBus.$emit("resetMore");
      this.filteredservice = null;
    }
  }, //end-methods
  watch: {
    id: function() {
      // console.log(`\tid[ ${this.id} ]`);
      let self = this,
        result = this.services.filter(service => service.title === self.id);
      result.forEach(item => (self.filteredservice = item));
      console.log(self.filteredservice);
    }
  }, //end-watch
  computed: {
    // .
  }, //end-computed
  mounted() {
    let self = this;
    serverBus.$on("setMore", () => {
      self.showMain = true;
    });
  } //end-mounted
}; //end-export
</script>

<style scoped>
/*.*/
</style>
