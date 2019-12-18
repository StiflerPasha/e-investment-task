<template>
  <v-app app>
    <v-app-bar app>

      <v-spacer/>
      <div v-if="$auth.loggedIn">
        {{$auth.user.email}}
        <v-btn text>Logout</v-btn>
      </div>

      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>

    </v-app-bar>
    <h1>Title</h1>
  </v-app>
</template>

<script>
  export default {};
</script>
