<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>ASSIGNMENT LIST</b></label>
            <b-button variant="secondary" to="/form/toko" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
        </div>
        <br>
        <div class="animated fadeIn">
          <b-card style="width: 95%">
            <table class="table table-striped table--middle table-responsive">
              <thead>
                <tr>
                  <th>Assignment ID</th>
                  <th>PTL</th>
                  <th>Project Number</th>
                  <th>IO Number</th>
                  <th>Level</th>
                  <th>Team</th>
                  <th>Assignment Description</th>
                  <th>AR ID List</th>
                  <th>Location</th>
                  <th>Assignment status</th>
                </tr>
                <!-- <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td><img :src="user.foto" width="100" height="100"></td>
                </tr> -->
              </thead>
            </table>
          </b-card>
        </div>
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
