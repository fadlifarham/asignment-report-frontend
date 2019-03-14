<template>
  <b-row>
    <b-col lg="12">
        <div>
          <b-input-group>
            <b-col sm="4">
            <b-button variant="primary" to="/createAssignment/create" class="form-actions" > + Create New Assignment</b-button>
            </b-col>
            <b-col sm="8">
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
    <b-col lg="12">
    <div class="animated fadeIn">
      <div class="card">
        <b-card-header>
          <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Assignment List</h5>
        </b-card-header>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr align="center">
              <th>No</th>
              <th>Assignment ID</th>
              <th>Project Number</th>
              <th>IO Number</th>
              <th>Assignment Class</th>
              <th>Assignment Title</th>
              <!-- <th>Team</th> -->
              <!-- <th>Assignment Description</th> -->
              <!-- <th>Location</th> -->
              <th>Assignment status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ptl in ptls" :key="ptl.id" align="center">
              <td align="center" class="no"></td>
              <td align="center">{{ ptl.id}}</td>
              <td>{{ ptl.project_number}}</td>
              <td>{{ ptl.io_number}}</td>
              <td>{{ ptl.assignment_class}}</td>
              <td>{{ ptl.assignment_tittle}}</td>
              <td>{{ ptl.status}}</td>
              <td><v-button class="btn btn-success btn-xs" v-for="detail in details" :key="detail.id" :to="'/createAssignment/viewReport/' + detail.assignment_user.assignment_id"><i class="fa fa-eye"></i></v-button>
                  <button class="btn btn-primary"><i class="fa fa-edit"></i></button>
                  <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i></button></td>
            </tr>
          </tbody>
        </table>
        <br><br>
        <nav>
          <b-pagination :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </div>
        </div>
    </b-col>
  </b-row>
</template>
<script>
    export default {
    data () {
        return {
            ptls: [],
            errors: [],
        }
    },
    mounted(){
        this.readPtls();
    },
    methods: {
        readPtls() {
            this.$axios.get('assignment/ptl')
            .then(response => {
              this.ptls = response.data;
              console.log(this.ptls);
      })
    },
        getBadge (status) {
        return status === 'On Progress' ? 'success'
          : status === 'Close' ? 'secondary'
            : status === 'Waiting Approvement' ? 'warning'
              : status === 'Cancel' ? 'danger' : 'primary'
      },
    }
    }
</script>
<style>
  table {
    counter-reset: section;
    width: 1150px;
  }

  .no:before {
    counter-increment: section;
    content: counter(section);
  }
</style>
