<template>
  <v-container>

    <UserAuthForm buttonText="Register"
                  :submitForm="registerUser"
                  register="true"/>
  </v-container>
</template>

<script>
  import UserAuthForm from '../components/UserAuthForm';

  export default {
    components: {
      UserAuthForm
    },
    methods: {
      async registerUser(registrationInfo) {
        await this.$store.dispatch('register', registrationInfo);
        this.$router.push('/profile');
      }
    }
  };
</script>

<style lang='scss' scoped>

</style>
