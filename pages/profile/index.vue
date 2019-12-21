<template>
  <v-container>
    <h1>Profile {{userInfo.username}}</h1>
    <v-form @submit.prevent="updateUser({
    username:userInfo.username,
    email: userInfo.email
    })">
      <v-text-field v-model="userInfo.username"
                    label="User name"/>
      <v-text-field v-model="userInfo.email"
                    label="Email"/>

      <v-btn type="submit"
      >Submit
      </v-btn>

      <v-btn @click="test">Test</v-btn>
      <v-btn @click="$router.push('profile/edit')">Edit</v-btn>

    </v-form>

    <ul v-if="!loading">
      <li v-for="field in Object.keys(userInfo)">
        {{field}}: {{userInfo[field]}}
      </li>
    </ul>

    <div v-else>Loading</div>


  </v-container>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        userInfo: {
          /*'username': 'pashasdf',
          'sponsor': 'testareg1',
          'email': 'pasha@mail2.ru',
          'firstName': 'Pasha',
          'secondName': 'Doe',
          'password': '123456789',
          'birthday': null,
          'phoneNumber': null,
          'phoneNumber2': null,
          'skype': null,
          'country': 'RU',
          'state': null,
          'city': null,
          'address': null,
          'zipCode': null,
          'site': null,
          'odnoklassniki': null,
          'vk': null,
          'fb': null,
          'youtube': null*/
        },
        loading: true
      };
    },
    methods: {
      ...mapActions(['updateUser']),
      test() {
        console.log(this.userInfo);
      }
    },
    async mounted() {
      this.userInfo = await this.$store.dispatch('fetchUser');
      this.loading = false;
    }
  };
</script>

<style lang='scss' scoped>

</style>
