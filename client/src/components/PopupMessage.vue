<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="color" top>
    {{notificationText}}
    <v-btn text @click="snackbar=false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    notificationText: "",
    timeout: 2000,
    color: "success"
  }),

  sockets: {
    POPUP_NOTIFICATION: function(data) {
      this.notificationText = data.message;
      this.color = data.color;
      this.snackbar = true;
    }
  }
};
</script>