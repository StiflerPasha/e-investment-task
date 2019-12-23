<template>
  <div class="col-xs-12 col-md-6">

    <v-card class="my-3 px-3">
      <v-list dense>
        <v-subheader>General</v-subheader>

        <v-list-item @click.stop="edit('username')">Username:
          <span>{{user.username}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="username"
                      v-model="editUser.username"
                      v-show="showField('username')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('username')"/>


        <v-list-item @click.stop="edit('email')">E-mail:
          <span>{{user.email}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="email"
                      v-model="editUser.email"
                      v-show="showField('email')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('email')"/>

        <v-list-item @click.stop="edit('firstName')">First name:
          <span>{{user.firstName}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="firstName"
                      v-model="editUser.firstName"
                      v-show="showField('firstName')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('firstName')"/>

        <v-list-item @click.stop="edit('secondName')">Second name:
          <span>{{user.secondName}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="secondName"
                      v-model="editUser.secondName"
                      v-show="showField('secondName')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('secondName')"/>

        <v-list-item @click.stop="edit('birthday')">Birthday:
          <span>{{new Date(user.birthday).toLocaleDateString()}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="birthday"
                      v-model="editUser.birthday"
                      v-show="showField('birthday')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('birthday')"/>
      </v-list>
    </v-card>

    <v-card class="my-3 px-3">
      <v-list dense>
        <v-subheader>Contacts</v-subheader>

        <v-list-item @click.stop="edit('phoneNumber')">Phone 1:
          <span>{{user.phoneNumber}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="phoneNumber"
                      v-model="editUser.phoneNumber"
                      v-show="showField('phoneNumber')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('phoneNumber')"/>

        <v-list-item @click.stop="edit('phoneNumber2')">Phone 2:
          <span>{{user.phoneNumber2}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="phoneNumber2"
                      v-model="editUser.phoneNumber2"
                      v-show="showField('phoneNumber2')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('phoneNumber2')"/>

        <v-list-item @click.stop="edit('skype')">Skype:
          <span>{{user.skype}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="skype"
                      v-model="editUser.skype"
                      v-show="showField('skype')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('skype')"/>

        <v-divider class="ma-2"/>

        <v-list-item @click.stop="edit('country')">Country:
          <span>{{user.country}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="country"
                      v-model="editUser.country"
                      v-show="showField('country')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('country')"/>

        <v-list-item @click.stop="edit('state')">State:
          <span>{{user.state}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="state"
                      v-model="editUser.state"
                      v-show="showField('state')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('state')"/>

        <v-list-item @click.stop="edit('city')">City:
          <span>{{user.city}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="city"
                      v-model="editUser.city"
                      v-show="showField('city')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('city')"/>

        <v-list-item @click.stop="edit('address')">Address:
          <span>{{user.address}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="address"
                      v-model="editUser.address"
                      v-show="showField('address')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('address')"/>

        <v-list-item @click.stop="edit('zipCode')">Zip code:
          <span>{{user.zipCode}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="zipCode"
                      v-model="editUser.zipCode"
                      v-show="showField('zipCode')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('zipCode')"/>
      </v-list>
    </v-card>

    <v-card class="my-3 px-3">
      <v-list dense>
        <v-subheader>Media</v-subheader>

        <v-list-item @click.stop="edit('site')">Site:
          <span>{{user.site}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="site"
                      v-model="editUser.site"
                      v-show="showField('site')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('site')"/>

        <v-list-item @click.stop="edit('odnoklassniki')">Odnoklassniki:
          <span>{{user.odnoklassniki}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="odnoklassniki"
                      v-model="editUser.odnoklassniki"
                      v-show="showField('odnoklassniki')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('odnoklassniki')"/>

        <v-list-item @click.stop="edit('vk')">VK:
          <span>{{user.vk}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="vk"
                      v-model="editUser.vk"
                      v-show="showField('vk')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('vk')"/>

        <v-list-item @click.stop="edit('fb')">Facebook:
          <span>{{user.fb}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="fb"
                      v-model="editUser.fb"
                      v-show="showField('fb')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('fb')"/>

        <v-list-item @click.stop="edit('youtube')">Youtube:
          <span>{{user.youtube}}</span>
          <v-spacer/>
          <v-list-item-icon>
            <v-icon v-text="'mdi-pen'"/>
          </v-list-item-icon>
        </v-list-item>
        <v-text-field ref="youtube"
                      v-model="editUser.youtube"
                      v-show="showField('youtube')"
                      @blur="editField = null"
                      outlined
                      dense
                      :append-icon="'mdi-check'"
                      @click:append="onSubmit('youtube')"/>
      </v-list>
    </v-card>
  </div>
</template>

<script>

  export default {
    props: ['user', 'submit'],

    data() {
      return {
        editField: null,
        editUser: {
          ...this.user
        }
      };
    },

    methods: {
      edit(field) {
        this.editField = field;
        this.$nextTick(() => {
          this.$refs[field].focus();
        });

      },
      onSubmit(field) {
        this.editField = null;
        this.submit({ [field]: this.editUser[field] });
      },
      showField(name) {
        return this.editField === name;
      },

      test(event) {
        console.log(event);
      }
    }
  };
</script>

<style lang='scss' scoped>
  span {
    padding-left: 5px;
    color: orangered;
  }

</style>
