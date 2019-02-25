<template>
  <b-row>
    <b-col lg="12">
        <div>
          <b-input-group>
            <b-col cols="4">
            <b-button variant="primary" to="/createAssignment/create" class="form-actions" > + Create New Assignment</b-button>
            </b-col>
            <b-col cols="8">
              <b-input-group>
                <b-form-input type="text" placeholder="Search"></b-form-input>
                <b-input-group-prepend>
                  <b-button variant="primary"><i class="fa fa-search"></i></b-button>
                </b-input-group-prepend>
                </b-input-group>
            </b-col>
          </b-input-group>
            <br><br>
        </div>
        
    </b-col>
    <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              <th>No</th>
              <th>Assignment ID</th>
              <th>Project Number</th>
              <th>IO Number</th>
              <th>Assignment Title</th>
              <th>Team</th>
              <th>Assignment Description</th>
              <th>Location</th>
              <th>Assignment status</th>
              <th>Action</th>
            </tr>
            <!-- <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td><img :src="user.foto" width="100" height="100"></td>
            </tr> -->
          </thead>
        </table>
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
