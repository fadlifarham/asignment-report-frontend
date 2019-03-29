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
                <input type="text" class="form-control" placeholder="Full Name">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" placeholder="Email">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" placeholder="Password">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-phone"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" placeholder="Phone Number">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>ID</b-input-group-text>
                </b-input-group-prepend>
                <b-form-select id="role_id"
                  :plain="true"
                  :options="['1','2', '3', '4', '5']"
                  value="4">
                </b-form-select>
              </b-input-group>

              <b-button variant="success" block @click="register()">Create Account</b-button>
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
            role_id: '',
        }
    },
    mounted() {
    },
    methods: {
      register(){
        this.$axios.post('/register', {
                full_name: this.full_name,
                email: this.email,
                
                }).then(response => {
                    this.status = 'Create Assignment Success!';
                    console.log(this.status);
                    swal('Success', this.status, 'success');
                    this.reset();
                }, response => {
                    this.status = 'Please Fill In All Data';
                    console.log(this.status);
                    swal('Failed', this.status, 'warning');
            })
      }
    }
}
</script>

