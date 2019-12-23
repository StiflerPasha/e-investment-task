<template>
  <div class="col-xs-12 col-md-6">

    <v-card class="my-3 px-3">
      <v-list dense>
        <v-subheader>General</v-subheader>

        <v-list-item @click.stop="focusField('username')">Username:
          <span v-show="!showField('username')">{{editUser.username}}</span>
          <input v-model="editUser.username"
                 v-show="showField('username')"
                 @focus="focusField('username')"
                 @blur="blurField"
                 @keypress="test"/>
        </v-list-item>


        <v-list-item @click.stop="edit('email')">E-mail:
          <span>{{editUser.email}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('firstName')">First name:
          <span>{{editUser.firstName}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('secondName')">Second name:
          <span>{{editUser.secondName}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('birthday')">Birthday:
          <span>{{new Date(editUser.birthday).toLocaleDateString()}}</span>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card class="my-3 px-3">
      <v-list dense>
        <v-subheader>Contacts</v-subheader>

        <v-list-item @click.stop="edit('phoneNumber')">Phone 1:
          <span>{{editUser.phoneNumber}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('phoneNumber2')">Phone 2:
          <span>{{editUser.phoneNumber2}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('skype')">Skype:
          <span>{{editUser.skype}}</span>
        </v-list-item>

        <v-divider class="ma-2"/>

        <v-list-item @click.stop="edit('country')">Country:
          <span>{{editUser.country}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('state')">State:
          <span>{{editUser.state}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('city')">City:
          <span>{{editUser.city}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('address')">Address:
          <span>{{editUser.address}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('zipCode')">Zip code:
          <span>{{editUser.zipCode}}</span>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card class="my-3 px-3">
      <v-list dense>
        <v-subheader>Media</v-subheader>

        <v-list-item @click.stop="edit('site')">Site:
          <span>{{editUser.site}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('odnoklassniki')">Odnoklassniki:
          <span>{{editUser.odnoklassniki}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('vk')">VK:
          <span>{{editUser.vk}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('fb')">Facebook:
          <span>{{editUser.fb}}</span>
        </v-list-item>

        <v-list-item @click.stop="edit('youtube')">Youtube:
          <span>{{editUser.youtube}}</span>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>

  export default {
    props: ['user', 'submit'],
    data() {
      return {
        editUser: {
          ...this.user
        },
        editField: ''
      };
    },
    methods: {
      edit(event) {
        this.$router.push(`/profile/edit/${event}`);
      },

      focusField(name) {
        this.editField = name;
      },
      blurField() {
        this.editField = '';
      },
      showField(name) {
        return (this.user[name] === '' || this.editField === name);
      },

      test(event) {
        console.log(event.key, event.keyCode);
      }

    }
  };
</script>

<style lang='scss' scoped>
  .v-list-item:hover {
    cursor: pointer;
    background: grey;
    border-radius: 5px;
  }

  span {
    padding-left: 5px;
    color: orangered;
  }

</style>

userInfo: {
'username': 'pashasdf',
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
'youtube': null*!/
},
