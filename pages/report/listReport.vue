<template>
  <b-row>
    <b-col lg="4">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px"><strong>Assignment title</strong></b-row><br>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PTL  </b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Location </b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Description </b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="8"></b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                <b-col style="padding: 10px" class="text-right">
                    <b-button @click="addStore" size="sm" variant="primary" style="margin: 10px">Lihat</b-button>
                </b-col>
                </b-row>
            </b-card>
        </div>
        <br>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              
            </tr>
            <!-- <tr v-for="assignment_report in assignment_report" :key="assignment_report.id">
              <td>{{ assignment_report.id }}</td>
              <td>{{ assignment_report.name }}</td>
              <td>{{ assignment_report.email }}</td>
              <td><img :src="user.foto" width="100" height="100"></td>
            </tr> -->
          </thead>
        </table>
    </b-col>
  </b-row>
</template>
<script>
    export default {
    data () {
        return {
            assignment_id: '',
            assignment_class: '',
            assignment_title: '',
            errors: [],
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
        this.$axios.get('/assignment').then( response => {
          this.assignment_id = response.data.assignment_id;
          this.assignment_class = response.data.assignment_class;
          this.assignment_title = response.data.assignment_title;
        })
      },
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
