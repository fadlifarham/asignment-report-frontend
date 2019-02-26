<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
            <b-col sm="0"><h4>General Assignment Information</h4></b-col>
            <br><br>
        </div>
    </b-col>
    <b-col lg="12">
        <div class="animated fadeIn">
            <b-form-group
                label="Project Number"
                label-for="projectNumber"
                :label-cols="4"
                :horizontal="true">
                <b-form-input  id="projectNumber" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="IO Number"
                label-for="ioNumber"
                :label-cols="4"
                :horizontal="true">
                <b-form-input  id="ioNumber" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assigment Class"
                label-for="assignmentClass"
                :label-cols="4"
                :horizontal="true">
                <b-form-input  id="assignmentClass" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assignment Title"
                label-for="assignmentTitle"
                :label-cols="4"
                :horizontal="true">
                <b-form-input  id="assignmentTitle" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assignment Detail Instruction"
                label-for="assignmentDetail"
                :label-cols="4"
                :horizontal="true">
                <textarea class="form-control" rows="6" id="detail"></textarea>
            </b-form-group>
            <b-form-group
                label="Difficult Level"
                label-for="assignmentDetail"
                :label-cols="4"
                :horizontal="true">
                <span class="fa fa-star checked" style="padding-top: 10px"></span>
                <span class="fa fa-star checked" style="padding-top: 10px"></span>
                <span class="fa fa-star checked" style="padding-top: 10px"></span>
                <span class="fa fa-star" style="padding-top: 10px"></span>
                <span class="fa fa-star" style="padding-top: 10px"></span>
            </b-form-group>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row style="padding: 4px"><strong>Attachment</strong></b-row>
                    <b-row style="padding: 4px">
                        <b-col sm="4">BAI</b-col>
                        <b-col sm="5"><b-form-file id="bai" :plain="true" v-model="bai" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 4px">
                        <b-col sm="4">TNC</b-col>
                        <b-col sm="5"><b-form-file id="tnc" :plain="true" v-model="tnc" @change="onFileSelected"></b-form-file></b-col>

                    </b-row>
                    <b-row>
                        <b-col>
                            <template>
                                <img src="/img/user.png">
                            </template>
                        </b-col>
                        <b-col>
                            <b-row>
                                <template>
                                    <form-select
                                        v-model="selectedTeam"
                                        :options="team"
                                    />
                                </template>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-input-group>
                <!-- <b-col cols="6"></b-col> -->
                <b-col cols="12" class="text-right" style="padding: 10px">
                    <b-button @click="addStore" size="lg" variant="primary" style="margin: 10px">Submit for Approval</b-button>
                    <b-button @click="reset" size="lg" variant="danger" style="margin: 10px">Delete and back</b-button>
                </b-col>
            </b-input-group>
        </div>
        <br>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>

            </tr>
            <!-- <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td><img :src="user.foto" width="100" height="100"></td>
            </tr> -->
          </thead>
        </table>
    </b-col>
  </b-row>
</template>

<script>

  // export default {
  //   data () {
  //       return {
  //           users: '',
  //           errors: [],
  //       }
  //   },
  //   mounted(){
  //       this.readUsers();
  //   },
  //   methods: {
  //       readUsers() {
  //           this.$axios.get('/user')
  //           .then(response => {
  //               this.users = response.data.users;
  //               console.log(response.data.users);
  //           })
  //       }
  //   }
  // }

	export default {
		data :() => ({
      project_number: null,
      io_number: null,
      assignment_class: null,
      assignment_title: null,
      assignment_desc: null,
      sum_engineer: 1,
      user_id_0: 1,
      assignment: [],
      status: null
    }),

    methods: {
      create() {
        this.$axios.post('/assignment/create', {
          project_number: this.project_number,
          io_number: this.io_number,
          assignment_class: this.assignment_class,
          assignment_tittle: this.assignment_title,
          assignment_desc: this.assignment_desc,
          sum_engineer: 1,
          user_id_0: 1,
        }).then(response => {
          this.assignment.push(response.data.task);
          this.status = 'Create Assignment Success!';
          console.log(this.status);
          swal('Success', this.status, 'success');
          this.reset();
        })
      },

      reset() {
        this.project_number = "";
        this.io_number = "";
        this.assignment_title = "";
        this.assignment_class = "";
        this.assignment_desc = ""
      }
    }
	}
</script>
