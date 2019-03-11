<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <img :src="picture" class="img-avatar" alt="admin@bootstrapmaster.com">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>{{full_name}}</strong>
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

// import VModal from 'vue-js-modal'
  export default {
    name: 'header-dropdown',
    data: () => ({
      // return { itemsCount: 42 }
      itemsCount: 42,
      full_name: "",
      email: "",
      picture: "",
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
          this.picture = response.data.picture;
          this.email = response.data.email;
          this.full_name = response.data.full_name;
          this.position = response.data.role.name;
        })
      }
    }
  }
</script>

