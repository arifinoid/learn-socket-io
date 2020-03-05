<template>
  <v-app>
    <v-app-bar app dark>
      <v-icon>speaker_phone</v-icon>
      <v-toolbar-title>Power Vuejs using Socket.io</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout row mb-4 mt-4>
          <v-flex>
            <Graph></Graph>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer dark></v-footer>
  </v-app>
</template>

<script>
import Graph from "@/components/Graph";

export default {
  components: {
    Graph
  }
};
</script>
