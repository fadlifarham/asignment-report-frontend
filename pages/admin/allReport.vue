<template>
  <b-row>
    <b-col lg="12">
    <div class="animated fadeIn">
        <b-card-header>
          <b-input-group>
            <b-col sm="4">
              <h5 id="label" class="card-title mb-0" style="padding : 5px">List Report</h5>
            </b-col>
            <b-col sm="4">
            </b-col>
            <b-col sm="4">
              <b-button variant="primary" to="/createAssignment/create" class="btn btn-primary btn-xs pull-right"> + Create New Assignment</b-button>
            </b-col>
          </b-input-group>
        </b-card-header>
        <b-card-body
          class="card"
          id="nav-scroller"
          ref="content"
          style="position:relative; height:600px;">
          <div id="demo">
            <v-client-table :data="ars" :columns="columns" :options="options">
                <b-button variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" :href="'/createAssignment/editReport/' + props.row.assignment_id">
                  <i class="fa fa-edit"></i>
                </b-button>
                <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                  <i class="fa fa-trash-o"></i>
                </b-button>
            </v-client-table>
          </div>
        </b-card-body>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
        </div>
    </b-col>
  </b-row>
</template>
<script>
  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    data () {
        return {
          files: [],
          name: 'demo',
          ars: [],
          errors: [],
          columns: [
            'id', 'assignment_id', 'assignment_type', 'sppd_status', 'day_number', 'brief_work', 'result',
            'ptl_id', 'project_number', 'io_number', 'assignment_class', 'assignment_tittle', 'assignment_desc',
            'difficulty_level', 'status', 'edit', 'delete'
          ],
          options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  id: 'ID',
                  assignment_id: 'Assignment ID',
                  assignment_type: 'Assignment Type',
                  sppd_status: 'SPPD Status',
                  day_number: 'Number of Days',
                  brief_work: 'Brief Work',
                  result: 'result',
                  ptl_id: 'PTL ID',
                  project_number: 'Project Number',
                  io_number: 'IO Number',
                  assignment_class: 'Assignment Class',
                  assignment_tittle: 'Assignment Title',
                  assignment_desc: 'Assignment Description',
                  difficulty_level: 'Difficulty Level',
                  view: 'View',
                  edit: 'Edit',
                  delete: 'Delete',
                },
                sortable: [
                    'id', 'assignment_id', 'assignment_type', 'sppd_status', 'day_number', 'brief_work', 'result',
                    'ptl_id', 'project_number', 'io_number', 'assignment_class', 'assignment_tittle', 'assignment_desc',
                    'difficulty_level', 'status',
                ],
                filterable: [
                    'id', 'assignment_id', 'assignment_type', 'sppd_status', 'day_number', 'brief_work', 'result',
                    'ptl_id', 'project_number', 'io_number', 'assignment_class', 'assignment_tittle', 'assignment_desc',
                    'difficulty_level', 'status',
                ],
                texts: {
                  filterPlaceholder: 'filter'
                },
                perPage: 4
            }
        }
    },

    mounted(){
        this.readArs();
    },
    methods: {
        readArs() {
          var temp;
          this.$axios.get('admin/ar/').then(response => {
              
              for(let i=0;i<response.data.length;i++){
                  console.log("saya oke")
                  let files = ''
                //   for(let j=0; j<response.data[i].user.length;j++){
                //       teams += response.data[i].file[j].filename + '<br>';
                //   }
                  temp = { 
                    id: response.data[i].id,
                    assignment_id: response.data[i].assignment_id, 
                    assignment_type: response.data[i].assignment_type,
                    sppd_status: response.data[i].sppd_status, 
                    day_number: response.data[i].day_number, 
                    brief_work: response.data[i].brief_work,
                    other: response.data[i].other,
                    result: response.data[i].result,
                    ptl_id: response.data[i].assignment.ptl_id,
                    project_number: response.data[i].assignment.project_number,
                    io_number: response.data[i].assignment.io_number,
                    assignment_class: response.data[i].assignment.assignment_class,
                    assignment_tittle: response.data[i].assignment.assignment_tittle,
                    assignment_desc: response.data[i].assignment.assignment_desc,
                    status: response.data[i].assignment.status,
                    difficulty_level: response.data[i].assignment.difficulty_level,
                    files: response.data[i].file };
                this.ars.push(temp);
              }
            console.log(this.ars);
          })
        },
        // read() {
        //     this.$axios.get('assignment/ptl')
        //     .then(response => {
        //         this.ptls = response.data;
        //         console.log(this.ptls);
        //     })
        // },
        getBadge (status) {
        return status === 'On Progress' ? 'success'
          : status === 'Close' ? 'secondary'
            : status === 'Waiting Approvement' ? 'warning'
              : status === 'Cancel' ? 'danger' : 'primary'
        },
        scrollIntoView(evt) {
          evt.preventDefault()
          const href = evt.target.getAttribute('href')
          const el = href ? document.querySelector(href) : null
          if (el) {
            this.$refs.content.scrollTop = el.offsetTop
          }
        },
        deleteAss(id){
          console.log("id : " + id)
          if (confirm("Are you sure you want to delete this item?")) {
                this.$axios.post('assignment/delete/' + id)
                .then(response => {
                    this.status = 'Delete Success!';
                    console.log(this.status);
                    swal('Success', this.status, 'success');
                    this.readPtls();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
        },
        // show:function () {
        //         this.ID = 'GET COW ID HERE'
        //       var data = new FormData()
        //       data.append('function','show')
        //         data.append('ID',this.ID)
        //       axios.post(this.url,data)
        //           .then( function (response ) {
        //       }.bind(this)).catch(function (error) {

        //       })

        //     },
    },

    middleware: "forPtl"

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
  .glyphicon.glyphicon-eye-open {
    width: 16px;
    display: block;
    margin: 0 auto;
  }
</style>
