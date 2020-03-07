<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn tile large color="teal" icon>
        <v-icon>mdi-vuetify</v-icon>
      </v-btn>
      <v-toolbar-title>Power Vuejs using Socket.io</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout row mb-4 mt-4>
          <v-flex>
            <Graph></Graph>
            <PopupMessage></PopupMessage>
            <Profile></Profile>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer dark></v-footer>
  </v-app>
</template>

<script>
import Graph from "@/components/Graph";
import PopupMessage from "@/components/PopupMessage";
import Profile from "@/components/Profile";

export default {
  components: {
    Graph,
    PopupMessage,
    Profile
  }
};
</script>
