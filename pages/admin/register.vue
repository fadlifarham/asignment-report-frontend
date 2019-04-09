<template>
    <div class="animated fadeIn">
        <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <h1>Register</h1>
              <p class="text-muted">Create account</p>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" id="full_name" placeholder="Full Name" v-model="full_name">
              </b-input-group>  

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" id="email" placeholder="Email" v-model="email">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" id="nip" placeholder="NIP / Contract Number" v-model="nip">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-phone"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" id="phone_number" placeholder="Phone Number" v-model="phone_number">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>ID</b-input-group-text>
                </b-input-group-prepend>
                <b-form-select id="role_id"
                  :plain="true"
                  :options="options"
                  value="Select Position"
                  v-model="role_id">
                </b-form-select>
              </b-input-group>

              <b-button @click="register" variant="success" block >Create Account</b-button>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
</template>
<script>
export default {
  data () {
        return{
            full_name: '',
            email: '',
            password: '',
            phone_number: '',
            nip:'',
            role_id: null,
            errors: [],
            selected: null,
            options: [
                { value: null, text: 'Select Position', disabled: true },
            ],
        }
    },
    mounted() {
      this.getRole();
    },
    methods: {
      getRole() {
            this.$axios.get('/admin/role')
            .then(response => {
                response.data.forEach(element => {
                    this.options.push({
                        value: element.id,
                        text: element.name
                    })
                });
            })
      },
      register(){
        this.$axios.post('/admin/register', {
          full_name: this.full_name,
          email: this.email,
          password: this.password,
          nip: this.nip,
          phone_number: this.phone_number,
          role_id: this.role_id,
        }).then(response => {
            this.status = 'Create Account Success!';
            console.log(this.status);
            swal('Success', this.status, 'success');
            this.reset();
        }, response => {
            this.status = 'Please Fill In All Data';
            console.log(this.status);
            swal('Failed', this.status, 'warning');
        })
      },
      reset(){
        this.full_name = "";
        this.email = "";
        this.password = "";
        this.nip = "";
        this.phone_number = "";
        this.role_id = "";
      }
    },

    middleware: "admin"
}
</script>

