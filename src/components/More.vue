<template>
  <v-dialog v-model="showMain" scrollable>
    <v-card>
      <v-card-title>
        <h3 class="sofia headline text-uppercase">
          {{ id }}
        </h3>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="" flat @click="closeMore()">Done Viewing</v-btn>
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
      filteredservice: null
    }; //end-return
  }, //end-data
  methods: {
    closeMore() {
      this.showMain = false;
      this.filteredservice = null;
      serverBus.$emit("resetMore");
    }
  }, //end-methods
  watch: {
    id: function() {
      // console.log(`\tid[ ${this.id} ]`);
      let self = this,
        result = this.services.filter(service => service.title === self.id);
      result.forEach(item => (self.filteredservice = item));
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
