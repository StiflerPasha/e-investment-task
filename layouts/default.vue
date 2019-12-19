<template>
  <v-app app>
    <v-app-bar app>

      <v-spacer/>
      <div v-if="user.email">
        {{user.email}}
        <v-btn text @click="logout">Logout</v-btn>
      </div>

      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>

    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  };
</script>
