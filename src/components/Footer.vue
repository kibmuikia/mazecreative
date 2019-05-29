<template>
  <v-footer height="auto">
    <!-- . -->
    <v-layout row wrap justify-space-between px-3 align-start>
      <v-flex xs12 md5>
        <v-card
          :class="{
            'text-xs-center': $vuetify.breakpoint.xs,
            'text-xs-left': !$vuetify.breakpoint.xs
          }"
          flat
          style="background-color:inherit;"
        >
          <v-card-title class="">
            <h4 class="headline sofia green--text text--accent-3">
              Our Motto
            </h4>
          </v-card-title>
          <v-card-text class="subheading">
            We combine your business goals with online marketing strategy that
            drives and breeds business growth. We create and evolve brands
            through great design. Your website is the most important component
            of your marketing strategy, whether you're at work or not, your
            website is always working for your business.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md5>
        <v-card
          :class="{
            'text-xs-center': $vuetify.breakpoint.xs,
            'text-xs-right': !$vuetify.breakpoint.xs
          }"
          flat
          style="background-color:inherit;"
        >
          <v-card-text>
            <h4 class="headline sofia green--text text--accent-3">
              Email us
            </h4>
            <h5 class="headline sofia">example@maze-media-creative.com</h5>
          </v-card-text>
          <v-card-text>
            <h4 class="headline sofia green--text text--accent-3">
              Find Us On Social
            </h4>
            <v-avatar
              v-for="(social, index) in socialmedia"
              :key="index"
              class="mx-1"
              tile
              size="45"
              @click="goto(social.link, social.site)"
            >
              <v-img :alt="social.site" :src="social.iconurl" contain>
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular
                      indeterminate
                      color="green accent-3"
                    ></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </v-avatar>
          </v-card-text>
          <v-card-text>
            <h4 class="headline sofia green--text text--accent-3">
              Call Us
            </h4>
            <h5 class="headline sofia">07xx-xxx-xxx</h5>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md12 class="text-xs-center">
        <v-btn
          flat
          v-for="(link, index) in links"
          :key="index"
          @click="navigate(link.path)"
        >
          {{ link.title }}
        </v-btn>
      </v-flex>
      <v-flex xs12 md5>
        <v-img
          :src="logo192"
          alt="Maze Media Creative Logo"
          contain
          max-height="85"
          max-width="85"
          :class="{
            kibcenter: $vuetify.breakpoint.xs
          }"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular
                indeterminate
                color="green accent-3"
              ></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>
      <v-flex
        xs12
        md5
        :class="{
          'text-xs-center': $vuetify.breakpoint.xs,
          'text-xs-right': !$vuetify.breakpoint.xs
        }"
      >
        <v-layout row wrap>
          <v-flex xs12>
            <p>
              &copy;{{ currentyear }}
              <v-btn
                flat
                small
                @click="goToTwitter()"
                class="body-2 kibtweetbtn"
              >
                <span class="kibscroll">
                  Muikia.A
                </span>
              </v-btn>
            </p>
          </v-flex>
          <v-flex xs12 class="pt-1">
            <p class="sofia font-weight-bold">
              Developed by
              <span>
                <vue-typer
                  :text="['Maze Media Creative', 'Muikia Allan']"
                  caret-animation="smooth"
                  :type-delay="400"
                  erase-style="backspace"
                  class="sofia title"
                  style="display:inline-block;"
                ></vue-typer>
              </span>
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <!-- . -->
    <div v-show="tip.show">
      <Tip
        :title="tip.title"
        :information="tip.information"
        :show="tip.show"
        :color="tip.color"
      />
    </div>
    <!-- . -->
  </v-footer>
</template>

<script>
/* eslint-disable no-console */

import { serverBus } from "@/main";
import { VueTyper } from "vue-typer";

export default {
  name: "footer-component",
  components: {
    Tip: () => import("@/components/Tip"),
    VueTyper
  }, //end-components
  data() {
    return {
      currentyear: new Date().getFullYear(),
      links: [
        { title: "Home", icon: "home", path: "/" },
        { title: "About", icon: "question_answer", path: "/about" }
      ],
      logo192: this.$store.getters.logo192,
      socialmedia: this.$store.getters.socialmedia,
      tip: {
        title: "",
        information: "",
        color: "",
        timeout: null,
        show: false
      },
      showInitialLoader: true
    }; //end-return
  }, //end-data
  methods: {
    goto(path, site) {
      if (!path) {
        // console.log(`Path of ${site} [ ${path} ] is empty(${path.length})`);
        this.tip.title = `${site}`;
        this.tip.information = `Coming soon!`;
        this.tip.color = site;
        this.tip.show = true;
        return false;
      }
      window.location = path;
    }, //end-goto
    goToTwitter() {
      window.location = "https://twitter.com/MuikiaAllan";
    }, //end-goToTwitter
    navigate(path) {
      // console.log(`Going to :: [ ${path} ] *`);
      this.$router.push(path);
    } //end-navigate
  },
  mounted() {
    serverBus.$on("resetTip", () => {
      this.tip.show = false;
    });
  } //end-mounted
}; //end-export
</script>

<style scoped>
.kibcenter {
  transform: translateX(32.5vw);
}
.kibtweetbtn {
  border-radius: 10px;
  overflow: hidden;
}
.kibtweetbtn:hover {
  background-color: rgba(153, 255, 102, 0.3);
}
.kibscroll {
  animation: kibscale 2s ease-in-out infinite;
  transition: all 2s ease-in-out 1s;
}
@keyframes kibscale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
