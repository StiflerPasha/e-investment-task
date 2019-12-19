<template>
  <v-container>
    <h1>Profile {{user.username}}</h1>
    <v-form @submit.prevent="updateUser(userInfo)">
      <v-text-field v-model="userInfo.username"
                    label="User name"/>

      <v-btn type="submit"
      >Submit
      </v-btn>

      <v-btn @click="test">Test</v-btn>

    </v-form>

    <ul>
      <li v-for="field in Object.keys(userInfo)">
        {{field}}: {{userInfo[field]}}
      </li>
    </ul>


  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

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
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      ...mapActions(['updateUser']),
      test() {
        console.log(this.userInfo);
      }
    },
    async mounted() {
      this.userInfo = await this.$store.dispatch('fetchUser');
    }
  };
</script>

<style lang='scss' scoped>

</style>
