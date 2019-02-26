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
    <div class="animated fadeIn">
    <b-card style="width: 100%">
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
              <th>Assignment status
                <!-- <div class="dropdown">
                  <button type="button" data-toggle="dropdown">
                  <span class="caret"></span></button>
                  <ul class="dropdown-menu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                  </ul>
                </div> -->
              </th>
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
        
        <br><br>
        <nav>
          <b-pagination :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
        </b-card>
        </div>
  </b-row>
</template>
<script>
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
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
        },
        getBadge (status) {
        return status === 'Approve' ? 'success'
          : status === 'Done' ? 'secondary'
            : status === 'On Progress' ? 'warning'
              : status === 'Cancel' ? 'danger' : 'primary'
      },
    }
    }
</script>
