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
                  <b-button variant="primary" v-model="search"><i class="fa fa-search"></i></b-button>
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
                <tr align="center">
                  <th>Assignment ID</th>
                  <th>PTL</th>
                  <th>Project Number</th>
                  <th>IO Number</th>
                  <th>Assignment Title</th>
                  <!-- <th>Assignment Description</th> -->
                  <!-- <th>Team</th>
                  <th>AR ID List</th> -->
                  <th>Assignment status</th>
                </tr>
                <tr v-for="all in alls" :key="all.id" align="center">
                  <td>{{ all.id }}</td>
                  <td>{{ all.ptl.full_name }}</td>
                  <td>{{ all.project_number }}</td>
                  <td>{{ all.io_number }}</td>
                  <td>{{ all.assignment_tittle}}</td>
                  <!-- <td>{{ all.assignment_desc}}</td> -->
                  <!-- <td>{{ all.id }}</td>
                  <td>{{ all.id }}</td> -->
                  <td>{{ all.status }}</td>
                </tr>
              </thead>
            </table>
            <br><br>
            <nav>
              <b-pagination :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
            </nav>
          </b-card>
          <b-button @click="exportToExcel" variant="secondary" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
        </div>
    </b-col>
  </b-row>
</template>
<script>
    export default {
    data () {
        return {
            alls: [],
            errors: [],
            apply: null,
        }
    },
    mounted(){
        this.readAlls();
    },
    methods: {
        readAlls() {
            this.$axios.get('assignment/all')
            .then(response => {
              this.alls = response.data;
              console.log(this.alls);
      })
      },
          getBadge (status) {
          return status === 'On Progress' ? 'success'
            : status === 'Close' ? 'secondary'
              : status === 'Waiting Approvement' ? 'warning'
                : status === 'Cancel' ? 'danger' : 'primary'
        },
      },

      exportToExcel() {
        this.$axios.get('assignment/all/export').then(response => {
          this.apply = response.data
          let blob = new Blob([response.data], { type: 'application/xlsx'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'All_Assignment.xlsx'
          link.click()
          // console.log(response.data)
        });
      }
    }
</script>
<style>
  table {
    counter-reset: section;
  }

  .no:before {
    counter-increment: section;
    content: counter(section);
  }
</style>

