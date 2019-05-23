<template>
  <v-snackbar
    v-model="showValue"
    top
    left
    vertical
    auto-height
    :timeout="timeout"
    class=""
    :color="color"
  >
    <v-card class="kibclass">
      <v-card-text class="subheading sofia">
        <h5
          class="headline sofia text-uppercase text-xs-center"
          style="letter-spacing:5px !important;"
        >
          {{ title }}
        </h5>
        {{ information }}
        <div class="text-xs-right">
          <v-btn icon @click="showValue = false" color="red accent-1">
            <v-icon>close</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-snackbar>
</template>

<script>
/* eslint-disable no-console */

import { serverBus } from "@/main";

export default {
  name: "tip-component",
  props: {
    title: String,
    information: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "info"
    },
    timeout: {
      type: Number,
      default: 3000
    },
    show: {
      type: Boolean,
      required: true
    }
  }, //end-props
  data() {
    return {
      showValue: this.show
      // textcolor: `${}`
    }; //end-return
  }, //end-data
  watch: {
    show: function() {
      return (this.showValue = this.show);
    },
    showValue: function() {
      // console.log(`\tshowValue:: current value [ ${this.showValue} ]`);
      if (this.showValue === false) {
        serverBus.$emit("resetTip");
      }
    }
  }, //end-watch
  computed: {
    // .
  } //end-computed
}; //end-export
</script>

<style scoped>
.kibclass {
  background-color: rgba(255, 255, 255, 0.5);
  /*box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;*/
}
</style>
