<template>
  <v-container>
    <h1>Profile {{user.username}}</h1>

    <UserInfo v-if="user.username" :user="user" :submit="onUpdate"/>
    <div v-else>Loading</div>

  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import UserInfo                   from '../../components/UserInfo';

  export default {
    name: 'Profile',
    components: { UserInfo },

    computed: {
      ...mapGetters(['user'])
    },

    methods: {
      ...mapActions(['updateUser']),

      onUpdate(toUpdate) {
        this.updateUser(toUpdate);
      }
    }
  };
</script>

<style lang='scss' scoped>

</style>
