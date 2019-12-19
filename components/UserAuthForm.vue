<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.sponsor"
                  label="Sponsor"
                  :rules="nameRules"
                  v-if="register"/>

    <v-text-field v-model="userInfo.username"
                  label="Username"
                  :rules="nameRules"/>

    <v-text-field v-model="userInfo.email"
                  label="Email"
                  :rules="emailRules"
                  v-if="register"/>

    <v-text-field v-model="userInfo.firstName"
                  label="First Name"
                  :rules="nameRules"
                  v-if="register"/>

    <v-text-field v-model="userInfo.secondName"
                  label="Second Name"
                  :rules="nameRules"
                  v-if="register"/>

    <v-text-field v-model="userInfo.phone"
                  label="Phone"

                  v-if="register"/>

    <v-text-field v-model="userInfo.country"
                  label="Country"

                  v-if="register"/>

    <v-text-field v-model="userInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="passwordRules"/>

    <v-text-field v-model="userInfo.finPassword"
                  label="Finance Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="passwordRules"
                  v-if="register"/>

    <v-btn @click="submitForm(userInfo)"
           :disabled="!valid"
    >{{buttonText}}
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    props: ['submitForm', 'buttonText', 'register'],
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          "sponsor": "testareg1",
          "username": "Andrey",
          "email": "andrey@mail.ru",
          "firstName": "Andrey",
          "secondName": "Doe",
          "password": "123456789",
          "finPassword": "987654321",
          "country": "ru",
          "phone": "9264569823"
        },
        //TODO: add all validations
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters'
        ]
      };
    }
  };
</script>

<style lang='scss' scoped>

</style>
