<template>
  <div id="navigation-wrapper">
    <v-toolbar app color="white" class="" scroll-off-screen>
      <v-toolbar-title>Maze Creative</v-toolbar-title>
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
            <v-list-tile-content>
              <v-list-tile-title id="drawerTitle"
                >Maze Creative</v-list-tile-title
              >
            </v-list-tile-content>
            <v-list-tile-action>
              <!-- <v-btn icon @click.stop="drawer = !drawer"> -->
              <v-btn icon @click="drawer = !drawer" color="red accent-1" flat>
                <v-icon>close</v-icon>
              </v-btn>
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
  </div>
</template>

<script>
export default {
  name: "navigation-component",
  data() {
    return {
      drawer: false,
      links: [
        { title: "Home", icon: "home", path: "/" },
        { title: "About", icon: "question_answer", path: "/about" }
      ]
    }; //end-return
  }, //end-data
  methods: {
    navigate(path) {
      console.log(`Going to :: [ ${path} ] *`);
      this.$router.push(path);
    } //end-navigate
  } //end-methods
}; //end-export
</script>

<style scoped>
/*@font-face {
  font-family: sofia-pro;
  src: url("~@/assets/fonts/sofiapro-light.otf");
}
.sofia {
  font-family: sofia-pro, sans-serif;
}*/
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
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
}
</style>
