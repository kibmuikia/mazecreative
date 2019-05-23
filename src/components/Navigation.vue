<template>
  <div id="navigation-wrapper" class="sofia">
    <v-toolbar app color="white" class="" scroll-off-screen>
      <v-img
        :src="logo_p"
        alt="Maze Media Creative Logo"
        contain
        max-height="55"
        max-width="55"
        class="maintoolbarlogo"
        @click="navigate('/')"
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
      <v-toolbar-title
        class="pa-1 maintoolbarlogo"
        style="transform: translateX(-10px);"
        @click="navigate('/')"
      >
        Maze Media Creative
        <span class="kibdot">.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="link.title"
      >
        <v-btn flat @click="navigate(link.path)">{{ link.title }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        color="green accent-2"
        flat
      ></v-toolbar-side-icon>
    </v-toolbar>
    <!-- . -->
    <v-navigation-drawer v-model="drawer" temporary app right class="">
      <v-toolbar flat color="white" dense>
        <v-list>
          <v-list-tile>
            <v-list-tile-avatar size="55">
              <v-img
                :src="logo_p"
                alt="Maze Media Creative Logo"
                contain
              ></v-img>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title id="drawerTitle">
                MMC
                <span class="kibdot" style="transform: translateX(-25px);"
                  >.</span
                >
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <!-- <v-btn icon @click.stop="drawer = !drawer"> -->
              <v-layout row justify-space-around align-center>
                <v-flex xs5>
                  <v-btn icon color="info" flat @click="showTip()">
                    <v-icon>info</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs5>
                  <v-btn
                    icon
                    @click="drawer = !drawer"
                    color="red accent-1"
                    flat
                  >
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <!-- . -->
      <v-list>
        <v-list-tile v-for="link in links" :key="link.title" class="">
          <v-list-tile-content>
            <v-list-tile-title
              class="drawerLinks text-xs-right pt-3 pr-1 text-lowercase"
              @click="navigate(link.path)"
            >
              {{ link.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- . -->
    <!-- . -->
    <div v-show="tip.show">
      <Tip
        :title="tip.title"
        :information="tip.information"
        :show="tip.show"
        :color="tip.color"
        :timeout="tip.timeout"
      />
    </div>
    <!-- . -->
  </div>
</template>

<script>
import { serverBus } from "@/main";

export default {
  name: "navigation-component",
  components: {
    Tip: () => import("@/components/Tip")
  }, //end-components
  data() {
    return {
      drawer: false,
      links: [
        { title: "Home", icon: "home", path: "/" },
        { title: "About", icon: "question_answer", path: "/about" }
      ],
      logo_p: this.$store.getters.logo192_p,
      tip: {
        title: "",
        information: "",
        color: "",
        timeout: null,
        show: false
      }
    }; //end-return
  }, //end-data
  methods: {
    navigate(path) {
      // console.log(`Going to :: [ ${path} ] *`);
      this.$router.push(path);
    }, //end-navigate
    showTip() {
      this.tip.title = `Tip`;
      this.tip.information = `Reload, [Ctrl + Shift + R in Chrome], to get updates!`;
      this.tip.color = "info";
      this.tip.timeout = 5000;
      this.tip.show = true;
    }
  }, //end-methods
  mounted() {
    serverBus.$on("resetTip", () => {
      this.tip.show = false;
    });
  } //end-mounted
}; //end-export
</script>

<style scoped>
.maintoolbarlogo {
  cursor: pointer;
}

.drawerLinks {
  font-size: 2.4rem;
  transition: color 0.2s ease;
  font-weight: 700;
  height: 2.8rem;
  letter-spacing: 3px;
  cursor: pointer;
  /*text-decoration: none;*/
  /*line-height: 1;*/
  /*padding: 8px 0;*/
  /*margin-bottom: 1.2rem;*/
}
.drawerLinks:hover {
  color: grey;
}
#drawerTitle {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 3px;
}
</style>
