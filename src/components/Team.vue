<template>
  <v-layout row wrap justify-space-around class="pa-1">
    <v-flex xs12 md12>
      <h6 class="title text-xs-center py-3">
        The Team
      </h6>
    </v-flex>
    <!-- . -->
    <v-flex xs12 md3 v-for="(member, index) in team" :key="index" class="ma-1">
      <v-card>
        <v-img
          :src="member.pic"
          :lazy-src="lazyimage"
          :alt="member.name"
          max-height="250"
          contain
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
        <v-card-title>
          <v-layout column>
            <v-flex xs12>
              <h5 class="headline sofia font-weight-bold kibspace">
                {{ member.name }}
              </h5>
            </v-flex>
            <v-flex xs12 mt-1>
              <h5 class="title sofia grey--text">
                {{ member.title }}
              </h5>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-flex>
    <!-- . -->
  </v-layout>
</template>

<script>
export default {
  name: "team-members-component",
  data() {
    return {
      team: this.$store.getters.team,
      lazyimage: this.$store.getters.lazyimage
    }; //end-return
  } //end-data
}; //end-export
</script>

<style scoped>
.kibspace {
  letter-spacing: 4px !important;
}
</style>
