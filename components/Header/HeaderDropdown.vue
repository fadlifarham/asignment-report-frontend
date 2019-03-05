<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <img src="~static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>{{first_name}}{{last_name}}</strong>
        <br>{{position}}
        </b-dropdown-header>
        <!-- <b-dropdown-header tag="div" class="text-center"><strong>{{username}}</strong></b-dropdown-header> -->
        <b-dropdown-item to="editProfil"><i class="fa fa-user"></i> Edit Profile</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-tasks"></i> My Performance</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="logout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
<<<<<<< HEAD
=======

// import VModal from 'vue-js-modal'
>>>>>>> 58622ef422445161badc290a967b3ad5970e4bfa
  export default {
    name: 'header-dropdown',
    data: () => ({
      // return { itemsCount: 42 }
      itemsCount: 42,
      username: "",
      email: "",
      image: "",
      role_id: "",
      position: "",
      // update: false,
    }),

    mounted() {
      this.getUser();
    },

    methods: {
      async logout() {
        await this.$auth.logout()
        .then(res => {
          if(!this.$auth.loggedIn) {
            this.$router.push('/login');
          }
        });
      },
      show () {
        this.$modal.show('hello-world');
      },
      hide () {
        this.$modal.hide('hello-world');
      },
      getUser() {
        this.$axios.get('/profile').then( response => {
          this.image = response.data.picture;
          this.email = response.data.email;
          this.username = response.data.username;
          this.position = response.data.role.name;
        })
      }
    }
  }
</script>

