<template>
  <v-container mt-10>
    <v-card color="grey darken-4" class="white--text">
      <v-card-title primary-title>
        <v-icon large left dark>portrait</v-icon>
        <div class="title font-weight-light text-md-left">
          User Profile
          <div class="caption text-md-right">{{ socketId }}</div>
        </div>
        <v-container>
          <v-layout row wrap>
            <v-flex md6 xs12 class="pr-2">
              <v-select
                dark
                :items="names"
                label="Person"
                v-model="name"
              ></v-select>
            </v-flex>
            <v-flex md6 xs12>
              <v-select
                dark
                :items="items"
                label="Group"
                v-model="group"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>

      <v-card-actions>
        <v-btn color="orange" dark @click="saveUserDetails()">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  sockets: {
    connect: function() {
      this.socketId = this.$socket.id;
      this.readlocalUser();
    }
  },

  data: () => ({
    items: ["Alpha", "Beta", "Charlie"],
    names: ["Po Nuri", "Neng Rina", "Teh Firda", "Mang Ipin"],
    name: "",
    group: "",
    socketId: ""
  }),

  methods: {
    sendUserDetails() {
      const userData = {};
      userData.name = this.name;
      userData.group = this.group;

      this.$socket.emit("UPDATE_USER", userData);
    },

    saveUserDetails() {
      sessionStorage.name = this.name;
      sessionStorage.group = this.group;

      this.sendUserDetails();
    },

    readlocalUser() {
      this.name = sessionStorage.name;
      this.group = sessionStorage.group;

      if (this.name || this.group) {
        this.sendUserDetails();
      }
    }
  }
};
</script>
