<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <center><h1 class="text-muted">Assignment Online</h1>
        <h4 class="text-muted">Indonesia Comnets Plus SBU Semarang</h4>
      </center>

      <br><br><br>
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Masuk Dengan Akun Anda</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input type="email" v-model="email" class="form-control" placeholder="Username">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input type="password" v-model="password" class="form-control" placeholder="Password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="link" class="px-0">Lupa Kata Sandi?</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Daftar</b-button> or 
                    <b-button @click="loginUser" variant="primary" class="px-4">Login</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  // auth: false,
  name: 'Login',
  layout: 'clean',
  data() {
    return {
        email: '',
        password: '',
    }
  },
  methods: {
    loginUser() {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then(res => {
        if(this.$auth.loggedIn) {
          this.$router.push('/');
        }
      });
      // this.$router.push('/');      
    },
    // async login() {
    //   try {
    //     await this.$auth.loginWith('local', {
    //       data: {
    //         email: this.email,
    //         password: this.password
    //       }
    //     })

    //     this.$router.push('/')
    //   } catch (e) {
    //     this.error = e.response.data.message
    //   }
    // },
    // login (){
    //   this.$axios.post('/user/login', {
    //     email: this.email,
    //     password: this.password
    //   }).then(response => {
    //     localStorage.setItem('api_token', 'Bearer ' + response.data.token);
    //     console.log(response.data.token);
    //   })
    // }
  }
}
</script>
