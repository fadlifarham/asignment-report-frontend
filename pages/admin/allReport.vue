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
            <vue-virtual-table
              :config="columns"
              :data="ars"
              :height="500"
              :itemHeight="55"
              :minWidth="1000"
              :selectable="true"
              :hoverHighlight="true"
              :enableExport="true"
              :borderedHeadings="true"
              :language="'en'"
              v-on:changeSelection="handleSelectionChange"
            >
                <b-button variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" :href="'/admin/editReportAdmin/' + props.row.assignment_id">
                  <i class="fa fa-edit"></i>
                </b-button>
                <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                  <i class="fa fa-trash-o"></i>
                </b-button>
            </vue-virtual-table>
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
  import VueVirtualTable from 'vue-virtual-table'
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    components: {
        VueVirtualTable
    },
    data () {
        return {
          files: [],
          name: 'demo',
          ars: [],
          errors: [],
          columns: [
              { prop: '_index', name: 'No', summary: 'COUNT', width: 50},
              { prop: 'assignment_id', name: 'ID', numberFilter: true, sortable: true, width: 120 },
              { prop: 'assignment_type', name: 'Type', filterable: true, sortable: true, width: 90 },
              { prop: 'sppd_status', name: 'SPPD Status', numberFilter: true, sortable: true, width: 110 },
              { prop: 'day_number', name: 'Day', numberFilter: true, sortable: true, width: 50 },
              { prop: 'brief_work', name: 'Brief Work',searchable: true, width: 90 },
              { prop: 'result', name: 'Result',searchable: true, width: 90 },
              { prop: 'ptl_id', name: 'PTL ID', numberFilter: true, sortable: true, width: 60 },
              { prop: 'project_number', name: 'Project Number', numberFilter: true, sortable: true, width: 130 },
              { prop: 'io_number', name: 'IO Number', numberFilter: true , sortable: true, width: 100},
              { prop: 'assignment_class', name: 'Class', filterable: true, sortable: true, width: 100},
              { prop: 'assignment_tittle', name: 'Title',searchable: true, width: 100},
              { prop: 'assignment_desc', name: 'Description',searchable: true, width: 100},
              { prop: 'difficulty_level', name: 'Level', numberFilter: true, sortable: true, width: 50},
              { prop: 'status', name: 'Status', filterable: true, sortable: true, width: 110},
              { prop: '_action', name: 'Edit', actionName: 'edit'},
              { prop: '_action', name: 'Delete', actionName: 'delete'}
          ],
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
