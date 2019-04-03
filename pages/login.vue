<template class="login">
  <div class="app flex-row align-items-center">
    <div class="container">
      <center><h1 class="text-muted">Assignment Online</h1>
        <h4 class="text-muted">Indonesia Comnets Plus SBU Semarang</h4>
      </center>

      <br><br>
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
                    <!-- <b-button variant="link" class="px-0">Lupa Kata Sandi?</b-button> -->
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <!-- <b-button variant="link"  v-b-modal.show class="px-0">Register</b-button> or -->
                    <b-button @click="loginUser" variant="primary" class="px-4">Login</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-card-group>

          <b-modal id="show" size="lg" title="Register User Information">
           <!-- <form @submit.prevent ="edit()">
             <div class="form-group">
                <label>Project Number :</label>
                <input type="text" style="border-radius: 5px" placeholder="Project Number" class="form-control" v-model="project_number">
            </div>
            <div class="form-group">
                <label>IO Number :</label>
                <input type="text" style="border-radius: 5px" placeholder="IO Number" class="form-control" v-model="io_number">
            </div>
            <div class="form-group">
                <label>Assigment Class :</label>
                <b-form-select id="assignment_class"
                    :plain="true"
                    :options="['Testcomm','Survey','Installation','QC','BERTest','Supervise Vendor','Migration','Integration',
                    'Integration','Technical Meeting','Sales Activity','Asplan Drawing','Administration']"
                    value="Assignment Class"
                    style="border-radius: 5px"
                    v-model="assignment_class">
                </b-form-select>
            </div>
            <div class="form-group">
                <label>Assignment Title :</label>
                <input type="text" style="border-radius: 5px" placeholder="Assignment Title" class="form-control" v-model="assignment_tittle">
            </div>
            <div class="form-group">
                <label>Assignment Detail Instruction :</label>
                <textarea v-model="assignment_desc" class="form-control" rows="4" id="detail"></textarea>
            </div>
            <div class="form-group">
                <label>Difficult Level :</label>
                <div id="app">
                        <star-rating
                        v-model="difficulty_level"
                        v-bind:increment="1"
                        v-bind:max-rating="5"
                        inactive-color="#000"
                        active-color="orange"
                        v-bind:star-size="50"
                        @rating-selected ="setRating"
                        >
                        </star-rating>
                </div>
            </div>
            <div class="form-group">
                <label>Dispose Team :</label>
                <div>
                    <multiselect
                        v-model="value"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :options="multi"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag">
                    </multiselect>
                </div>
            </div>
           </form> -->
            <div class="form-group">
                Silahkan Mengirimkan Email ke <b>assignmentonline1@gmail.com</b> <br>
                Dengan Subject : <b>Register User</b> <br>
                Dengan Isi : <br>
                <br>
                Email &emsp; &emsp; &nbsp; : (Masukkan Email Anda)<br>
                Password &emsp; : (Masukkan Password Anda)<br>
                No. Telp &emsp; &nbsp; : (Masukkan No. Telp Anda)<br>
                Role &emsp; &emsp; &nbsp; &nbsp; : (Manager/SPV/PTL/Field Service/Magang)
                <br>
                <br>

            </div>
         </b-modal>

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
