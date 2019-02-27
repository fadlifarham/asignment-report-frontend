<template>
  <b-row>
    <b-col lg="12">
      <div>
          <b-input-group>
            <b-col cols="4">
              <label><b>ASSIGNMENT LIST</b></label>
            </b-col>
            <b-col cols="4"></b-col>
            <b-col cols="4">
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
        <div class="animated fadeIn">
          <b-card style="width: 100%">

            <table class="table table-striped table--middle table-responsive">
              <thead>
                <tr>
                  <th>No</th>
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
            <br><br>
            <nav>
              <b-pagination :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
            </nav>
          </b-card>
          <b-button variant="secondary" to="/form/toko" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
        </div>
    </b-col>
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
