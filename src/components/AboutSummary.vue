<template>
  <v-layout column>
    <v-flex xs12 md12>
      <v-card class="pa-2">
        <v-img
          :src="url1"
          alt="about-summary-illustration"
          max-height="200px"
          height="200px"
          position="0 25%"
          class="animated flash slow"
        >
          <template v-slot:placeholder class="animated fadeInDown">
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular
                indeterminate
                color="green accent-3"
              ></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
        <v-layout row wrap justify-space-around>
          <v-flex
            xs12
            md5
            v-for="(summary, index) in aboutsummary"
            :key="index"
            mt-2
          >
            <v-card class="my-3" flat>
              <v-card-actions>
                <v-expansion-panel>
                  <v-expansion-panel-content>
                    <template v-slot:header>
                      <div class="animated fadeInDown title sofia">
                        {{ summary.title }}
                      </div>
                    </template>
                    <v-card>
                      <v-card-text>
                        {{ summary.description }}
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import { VueTyper } from "vue-typer";
export default {
  name: "about-summary-component",
  components: {
    // import { VueTyper } from 'vue-typer'
    // VueTyper: () => import("vue-typer")
    // VueTyper
  }, //components
  data() {
    return {
      aboutsummary: this.$store.getters.aboutsummary,
      showdescription: false,
      lazyimage: this.$store.getters.lazyimage,
      url1:
        "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fabout%2Fbusiness-characters-working-office.jpg?alt=media&token=f99fd616-9b5b-41ed-b173-f832bda361ee",
      typedelay: 500
    }; //end-return
  }, //end-data
  mounted() {
    // serverBus.$on("resetTip", () => {
    //   this.tip.show = false;
    // });
  } //end-mounted
}; //end-export
</script>

<style>
/*.*/
</style>
