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
                    <b-button variant="link" to="/register" class="px-0">Register</b-button> or
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
