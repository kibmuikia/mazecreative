import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    // "primary": "#1976D2", :: twitter facebook instagram
    twitter: "#76a9ea",
    facebook: "#475993",
    instagram: "#a81d8f"
  }
});
