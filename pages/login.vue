<template>
  <v-container>
    <h1>Login</h1>

    <UserAuthForm button-text="Login" :submitForm="loginUser"/>

  </v-container>
</template>

<script>
  import UserAuthForm from '../components/UserAuthForm';

  export default {
    components: {
      UserAuthForm
    },


    methods: {
      async loginUser(loginInfo) {
        await this.$store.dispatch('login', loginInfo);
        this.$router.push('/profile');
      }
    }
  };
</script>

<style lang='scss' scoped>

</style>
