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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
              @click="goto(social.link)"
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
              <v-btn flat small @click="goToTwitter()" class="body-2"
                >Muikia.A.K</v-btn
              >
            </p>
          </v-flex>
          <v-flex xs12>
            <p class="sofia font-weight-bold">
              Developed by Maze Media Creative
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <!-- . -->
  </v-footer>
</template>

<script>
export default {
  name: "footer-component",
  data() {
    return {
      currentyear: new Date().getFullYear(),
      links: [
        { title: "Home", icon: "home", path: "/" },
        { title: "About", icon: "question_answer", path: "/about" }
      ],
      logo192: this.$store.getters.logo192,
      socialmedia: this.$store.getters.socialmedia
    }; //end-return
  }, //end-data
  methods: {
    goto(path) {
      if (!path) {
        // console.log(`Path[ ${path} ] is empty(${path.length})`);
        alert("Coming soon");
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
    // .
  }
}; //end-export
</script>

<style scoped>
.kibcenter {
  transform: translateX(32.5vw);
}
</style>
