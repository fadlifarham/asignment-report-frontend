<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
            <b-col sm="0"><h4>General Assignment Information</h4></b-col>
        </div>
    </b-col>
    <b-col lg="8">
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
                    <b-row>
                        <label><strong>Dispose Team</strong></label>
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
                    <b-button @click="create" size="lg" variant="primary" style="margin: 10px">Submit for Approval</b-button>
                    <b-button @click="reset" size="lg" variant="danger" style="margin: 10px">Delete and back</b-button>
                </b-col>
            </b-input-group>
        </div>
    </b-col>
    </b-row>
</template>
<style>
    .checked {
        color: orange;
    }
</style>

<script>
    export default {
    data () {
        return {
            users: '',
            errors: [],
        };
    },
    mounted(){
        this.readUsers();
    },
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
             // this.assignment.push(response.data.task);
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
