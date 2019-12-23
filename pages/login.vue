<template>
  <v-container>
    <h1>Login</h1>

    <UserAuthForm button-text="Login" :submitForm="loginUser"/>

  </v-container>
</template>

<script>
  import UserAuthForm   from '../components/UserAuthForm';
  import { mapActions } from 'vuex';

  export default {
    components: {
      UserAuthForm
    },

    methods: {
      ...mapActions(['login']),

      async loginUser(loginInfo) {
        await this.login(loginInfo);
        this.$router.push('/profile');
      }
    }
  }
  ;
</script>

<style lang='scss' scoped>

</style>
