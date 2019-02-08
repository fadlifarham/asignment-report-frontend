<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL USER</b></label></div>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Foto</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td><img :src="user.foto" width="100" height="100"></td>
            </tr>
          </thead>
        </table>
    </b-col>
  </b-row>
</template>
<script>
    export default {
    data () {
        return {
            users: '',
            errors: [],
        }
    },
    mounted(){
        this.readUsers();
    },
    methods: {
        readUsers() {
            this.$axios.get('/user')
            .then(response => {
                this.users = response.data.users;
                console.log(response.data.users);
            })
        }
    }
    }
</script>
